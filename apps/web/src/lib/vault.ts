/**
 * O Cofre — versão fiel ao contrato do @batuta/core (packages/core).
 * Dinheiro em centavos (inteiro), nunca float. Função pura: mesma entrada,
 * mesma decisão. Quando o pacote core for publicado, o dashboard importa
 * `evaluate` de lá; aqui a landing usa esta cópia fiel para o widget ser real.
 */

export type Verdict = 'allow' | 'hold' | 'block'

export interface BudgetPolicy {
  /** Teto diário da conta, em centavos. */
  dailyCeilingCents: number
  /** Maior jogada permitida numa única ação, em centavos. */
  perActionCapCents: number
  /** Acima disso, a ação é segurada para aprovação, em centavos. */
  approvalAboveCents: number
}

export interface AgentAction {
  kind: 'read' | 'update_budget' | 'delete'
  /** Quanto a ação adiciona ao gasto diário, em centavos (0 para leitura). */
  deltaCents: number
}

export interface VaultState {
  /** Quanto já está comprometido no dia, em centavos. */
  committedCents: number
}

export interface Decision {
  verdict: Verdict
  /** Folga restante até o teto, em centavos (nunca negativa). */
  slackCents: number
  /** Gasto projetado caso a ação passasse, em centavos. */
  projectedCents: number
  reason: string
}

export function evaluate(
  action: AgentAction,
  policy: BudgetPolicy,
  state: VaultState,
): Decision {
  const slackCents = Math.max(0, policy.dailyCeilingCents - state.committedCents)
  const projectedCents = state.committedCents + action.deltaCents

  // Leitura sempre passa.
  if (action.kind === 'read') {
    return { verdict: 'allow', slackCents, projectedCents: state.committedCents, reason: 'Leitura — sempre liberada.' }
  }

  // Ação destrutiva nunca executa direto: vai para aprovação.
  if (action.kind === 'delete') {
    return { verdict: 'hold', slackCents, projectedCents, reason: 'Ação destrutiva — segurada para aprovação.' }
  }

  // Jogada grande demais para uma única ação.
  if (action.deltaCents > policy.perActionCapCents) {
    return { verdict: 'hold', slackCents, projectedCents, reason: 'Jogada acima do limite por ação — segurada.' }
  }

  // Furaria o teto da conta: barrado.
  if (projectedCents > policy.dailyCeilingCents) {
    return { verdict: 'block', slackCents, projectedCents, reason: 'Furaria o teto da conta — barrado.' }
  }

  // Dentro do teto, mas acima do gatilho de aprovação: segurado.
  if (action.deltaCents > policy.approvalAboveCents) {
    return { verdict: 'hold', slackCents, projectedCents, reason: 'Acima do gatilho de aprovação — segurada.' }
  }

  // Ajuste pequeno, dentro de tudo: liberado.
  return { verdict: 'allow', slackCents, projectedCents, reason: 'Dentro do teto e do gatilho — liberado.' }
}
