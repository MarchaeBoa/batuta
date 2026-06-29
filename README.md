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

### Landing "A Partitura" (no ar)

A landing de marketing já está em **Next.js 14 + React** na identidade
**"A Partitura"** — paper/latão, tipografia Fraunces/Hanken/Spline Mono, sem
nada de genérico. O destaque é a **pauta de dinâmica interativa** do Cofre: a
nota desliza pela escala `pp→fff`, **bate na barra de latão** (o teto) e muda de
cor — **verdete** (liberado), **latão** (pede aval), **vinho** (barrado). O
veredito (`allow | hold | block` + folga) vem de `evaluate()`, fiel ao contrato
do `@batuta/core`.

```bash
pnpm install
pnpm dev:web        # → http://localhost:3000
```

Arrasta o controle "aumento do agente" para **+R$200** numa conta já em
**R$1.040/R$1.200** e o Cofre trava em **vinho**, com folga **R$160**. Baixa para
**+R$100** e a nota volta ao **verdete**. É a demo que vende a Batuta, num clique.

> Identidade visual escolhida de propósito: o editorial paper/latão foge da cara
> "SaaS dark + violeta" que todo concorrente usa. Próximo passo é o dashboard
> (as 5 telas em atos) na mesma identidade.

---

## Deploy na Vercel

A landing é **estática/prerenderizada** (`next build` gera tudo como `Static`),
então sobe na Vercel sem segredo nenhum — nenhuma variável de ambiente é
necessária para a landing.

O repositório já vem com `vercel.json` na raiz, configurado para o monorepo pnpm:

```json
{
  "framework": "nextjs",
  "installCommand": "pnpm install",
  "buildCommand": "pnpm --filter @batuta/web build",
  "outputDirectory": "apps/web/.next"
}
```

### Opção A — importar pela raiz (usa o `vercel.json` acima)

1. Em **vercel.com → Add New → Project**, importe `MarchaeBoa/batuta`.
2. **Root Directory:** deixe na raiz (`./`).
3. **Framework Preset:** Next.js · **Build/Install Command:** já vêm do `vercel.json`.
4. **Deploy.** Pronto — sem env vars.

### Opção B — Root Directory = `apps/web` (auto-detect)

1. Importe o repo e em **Settings → General → Root Directory** aponte para `apps/web`.
2. A Vercel detecta o workspace pnpm sozinha, instala da raiz e roda `next build`.
3. **Deploy.**

### Pela CLI (se tiver `vercel` autenticado)

```bash
npm i -g vercel
vercel link          # vincula ao projeto
vercel --prod        # publica
```

> Depois do primeiro deploy, cole o link aqui:
> **🔗 Demo ao vivo:** `https://<seu-projeto>.vercel.app`

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
