# 🎼 Batuta

**A camada de regência acima dos MCPs oficiais de anúncios.**
O agente toca. A batuta é sua.

---

## A tese

Em abril e maio de 2026, Google, Meta e TikTok lançaram seus **MCPs oficiais** —
de graça. Conectar uma IA à conta de anúncios virou commodity. O "cano" não vale
mais nada.

O gargalo nunca foi o acesso. É **interpretação, coordenação e segurança**:

- Os MCPs oficiais são **single-platform por design** — nenhum enxerga o conjunto.
- Nenhum tem **trava de orçamento**: o agente pode gastar até a conta secar.
- Nenhum **deduplica conversão** entre plataformas — seu ROAS vem inflado.
- Nenhum **avisa antes** de você errar, nem deixa **rastro auditável**.

A Batuta não compete com o cano. Ela **rege por cima** dele.

---

## Os seis movimentos

| # | Movimento | O que faz |
|---|-----------|-----------|
| I | **Cofre de Orçamento** | Teto que o agente **não atravessa**. Trava, não aviso. |
| II | **Regência cross-platform** | Junta Google + Meta + TikTok, **deduplica conversão**, mostra o ROAS real. |
| III | **Agente proativo** | Detecta anomalia/fadiga/pacing e **te chama no WhatsApp** antes do estrago. |
| IV | **Simular antes de gastar** | Toda mudança vira um **plano aprovável** (diff), como um `terraform plan` pro orçamento. |
| V | **Caixa-preta auditável** | Trilha **append-only, assinada e reversível**. Pronta pra LGPD e auditoria de cliente. |
| VI | **Brasil-nativo** | PT, Pix, Asaas, WhatsApp, LGPD de fábrica. |

---

## Arquitetura

```
batuta/
├─ apps/
│  ├─ web/          # dashboard Next.js 14 (+ landing estática em /public)
│  └─ mcp/          # 🫀 o servidor MCP remoto — onde o agente fala com a Batuta
├─ packages/
│  ├─ core/         # 🧠 a lógica que nos torna a Batuta (PURA, testada)
│  ├─ adapters/     # Google / Meta / TikTok / LinkedIn (embrulham as APIs oficiais)
│  └─ db/           # schema Supabase + ports do core implementados em Postgres
└─ workers/         # monitor proativo (cron → WhatsApp)
```

O **núcleo é puro e testável**. Todo I/O (Supabase, plataformas, filas) entra por
**interfaces** (ports) — então trocar qualquer peça externa não toca na lógica.

### O caminho de uma ação (a regra de ouro)

```
agente → tool de escrita (MCP) → guard() → Cofre.evaluate()
                                              ├─ allow → executa na plataforma + audita
                                              ├─ hold  → enfileira aprovação + audita
                                              └─ block → audita e NÃO executa
```

Nenhuma mutação chega às plataformas sem cruzar o Cofre. É isso que nenhum MCP
oficial entrega.

---

## O coração, em 4 arquivos

Tudo em `packages/core/src/`:

- **`policy/types.ts`** — o vocabulário: `AgentAction`, `BudgetPolicy`, `Decision`. Dinheiro em **centavos**, nunca float.
- **`policy/budget-vault.ts`** — o **Cofre**. Função pura `evaluate()` que devolve `allow | hold | block`.
- **`policy/guard.ts`** — o **portão**: o único caminho de mutação.
- **`attribution/dedup.ts`** — dedup cross-platform → **ROAS real** vs inflado.

Complementam: `agent/plan.ts` (o diff aprovável) e `audit/log.ts` (trilha
encadeada por hash, reversível).

---

## Já provado ✅

O Cofre tem **8 testes passando** (`packages/core`). Eles provam o
comportamento que vende a Batuta:

```
ok 1 - leitura sempre passa
ok 2 - BLOQUEIA quando furaria o teto da conta          (folga calculada: R$ 160)
ok 3 - SEGURA pra aprovação acima do gatilho
ok 4 - SEGURA jogada grande demais por ação
ok 5 - SEGURA ação destrutiva
ok 6 - LIBERA ajuste pequeno dentro de tudo
ok 7 - plano resume corretamente um lote misto
ok 8 - dedup remove dupla contagem e corrige o ROAS
```

Rode você mesmo:

```bash
cd packages/core
npm install
npx tsx --test src/policy/budget-vault.test.ts
```

---

## Como rodar

Requer **Node ≥ 20** e **pnpm 9**.

```bash
pnpm install                 # instala o monorepo todo
cp .env.example .env         # preencha as chaves

# banco
pnpm db:push                 # aplica packages/db/schema.sql no Supabase

# subir as peças
pnpm dev:mcp                 # servidor MCP   → http://localhost:8787/mcp
pnpm dev:web                 # dashboard       → http://localhost:3000
pnpm dev:worker              # monitor proativo

pnpm test                    # roda os testes do Cofre
pnpm typecheck               # checa tipos do monorepo
```

### Prévias estáticas (abra no navegador, sem build)

- `apps/web/public/landing.html` — a página de vendas.
- `apps/web/public/painel.html` — prévia navegável do painel, na identidade
  **"A Partitura"** (orçamento como dinâmica musical `pp→fff`). A pauta do Cofre
  é interativa. *O painel real em React/Next ainda usa o tema base; portar essa
  identidade pros componentes é o próximo passo.*

---

## Por onde começar de verdade — **Semana 1**

Não construa tudo. Prove o diferencial ponta a ponta com o mínimo:

1. **`db/schema.sql`** → cria as entidades no Supabase.
2. **`core/policy/`** completo → `types` → `budget-vault` → `guard`. *(já está pronto e testado)*
3. **`adapters/base.ts` + `google.ts`** → uma só plataforma de verdade.
4. **`mcp`** com **uma** tool de leitura e **uma** de escrita (que passa pelo guard). *(já está pronto)*
5. **dashboard `/conectar` e `/cofre`** → conectar o Google e definir o teto.

O resultado é o **vídeo de demo que vende a Batuta**:

> Conecto o Google → defino o teto de R$ 1.200/dia → o agente tenta subir o
> orçamento e estourar → **o Cofre trava** e mostra a folga. As outras 3
> plataformas e os movimentos III–VI entram depois, **sem reescrever nada**.

---

## Pendências marcadas no código

Procure por `TODO(api)`, `TODO(auth)`, `TODO(db)`, `TODO(integração)`:

- Chamadas reais de mutação nos adapters (payloads já montados na unidade certa).
- Persistência cifrada dos tokens OAuth + refresh.
- Verificação real do token de sessão Batuta no MCP.
- Efeitos no banco no webhook do Asaas.
- Integração de dados + envio de WhatsApp no worker.

---

## Planos

`solo` · `maestro` · `orquestra` · `filarmônica` — cobrados em **Pix via Asaas**,
medidos por "movimentos" (ações regidas) por mês.

---

## Decisões reversíveis

- **Nome "Batuta"** e o tema "regente/orquestra" são uma escolha — trocáveis por
  find-replace.
- O **posicionamento** (reger por cima dos MCPs grátis) é a aposta central; tudo
  no código segue dela.

*Construído com cuidado. O núcleo é a joia — comece por ele.*
