/**
 * Conteúdo da landing — tipado e centralizado.
 * Dinheiro sempre em centavos (inteiro), como no core da Batuta.
 */

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'O Cofre', href: '#cofre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Integrações', href: '#integracoes' },
  { label: 'Preços', href: '#precos' },
  { label: 'Perguntas', href: '#faq' },
]

export interface Stat {
  value: string
  label: string
  tone: 'brass' | 'verdigris' | 'wine'
}

export const STATS: Stat[] = [
  { value: '20K+', label: 'tool calls regidas', tone: 'brass' },
  { value: '2.000+', label: 'campanhas sob batuta', tone: 'verdigris' },
  { value: 'R$ 4,2M', label: 'verba sob regência', tone: 'brass' },
  { value: '2,8×', label: 'ROAS médio real', tone: 'verdigris' },
]

export interface Platform {
  name: string
  icon: 'google' | 'meta' | 'tiktok' | 'linkedin' | 'instagram' | 'x'
}

export const PLATFORMS: Platform[] = [
  { name: 'Google Ads', icon: 'google' },
  { name: 'Meta Ads', icon: 'meta' },
  { name: 'TikTok Ads', icon: 'tiktok' },
  { name: 'LinkedIn Ads', icon: 'linkedin' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'X Ads', icon: 'x' },
]

export interface AiClient {
  name: string
}

export const AI_CLIENTS: AiClient[] = [
  { name: 'ChatGPT' },
  { name: 'Claude' },
  { name: 'Claude Code' },
  { name: 'Cursor' },
  { name: 'Codex' },
  { name: 'Windsurf' },
]

export interface Pillar {
  movimento: string
  title: string
  body: string
  icon: 'vault' | 'layers' | 'zap'
}

export const PILLARS: Pillar[] = [
  {
    movimento: 'Movimento I',
    title: 'Trava, não aviso',
    body: 'O Cofre de Orçamento é um teto que o agente não atravessa. Não é alerta depois do estrago — é a barra de latão que a nota não cruza.',
    icon: 'vault',
  },
  {
    movimento: 'Movimento II',
    title: 'Enxerga o conjunto',
    body: 'Google, Meta e TikTok num só pódio. A Batuta deduplica conversão entre plataformas e mostra o ROAS real, não o inflado.',
    icon: 'layers',
  },
  {
    movimento: 'Movimento IV',
    title: 'Simular antes de gastar',
    body: 'Toda mudança vira um plano aprovável — um diff do orçamento, como um terraform plan. Você lê a partitura antes da orquestra tocar.',
    icon: 'zap',
  },
]

export interface Step {
  n: string
  title: string
  body: string
}

export const STEPS: Step[] = [
  {
    n: 'I',
    title: 'Afine os instrumentos',
    body: 'Conecte Google, Meta e TikTok via os MCPs oficiais. Sem cano novo: a Batuta rege por cima do que já existe.',
  },
  {
    n: 'II',
    title: 'Convoque o maestro',
    body: 'Aponte seu assistente de IA — ChatGPT, Claude, Cursor — para o servidor MCP da Batuta. Uma URL, e ele entra no pódio.',
  },
  {
    n: 'III',
    title: 'Reja em linguagem natural',
    body: 'Peça, lance e otimize por texto. Cada mutação cruza o Cofre antes de chegar à plataforma. Você define a dinâmica.',
  },
]

export interface Persona {
  audience: string
  quote: string
  bullets: string[]
}

export const PERSONAS: Persona[] = [
  {
    audience: 'Para Agências',
    quote: 'Reja dezenas de contas sem medo de um agente estourar a verba de um cliente.',
    bullets: [
      'Teto por conta, por jogada e por gatilho de aprovação',
      'Trilha auditável pronta para LGPD e prestação de contas',
      'ROAS real cross-platform por cliente',
    ],
  },
  {
    audience: 'Para Founders',
    quote: 'Você no comando da verba, a IA na execução. Cresça sem soltar o orçamento.',
    bullets: [
      'Defina o teto uma vez; o agente respeita sempre',
      'Plano aprovável antes de qualquer gasto grande',
      'Pix via Asaas, em português, sem fricção',
    ],
  },
  {
    audience: 'Para Creators',
    quote: 'Impulsione conteúdo sem virar gestor de tráfego — e sem queimar caixa.',
    bullets: [
      'Linguagem natural: descreve a meta, a Batuta executa',
      'Avisos proativos antes do erro, no WhatsApp',
      'Comece de graça e suba de plano quando crescer',
    ],
  },
]

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marina Rabelo',
    role: 'Head de Mídia',
    company: 'Cadência',
    quote: 'O Cofre tirou meu medo de deixar a IA mexer na verba. Ela toca; eu rejo o teto.',
  },
  {
    name: 'Diego Vasques',
    role: 'Founder',
    company: 'Lumebox',
    quote: 'Subi de R$2k para R$40k/mês de mídia sem contratar tráfego. A trava nunca falhou.',
  },
  {
    name: 'Aline Prado',
    role: 'Gestora de Tráfego',
    company: 'Studio NORTE',
    quote: 'Ver Google e Meta no mesmo pódio, com ROAS dedupado, mudou minhas decisões de budget.',
  },
  {
    name: 'Rafael Quinteiro',
    role: 'COO',
    company: 'Agência Pauta',
    quote: 'A trilha auditável virou meu argumento de venda. O cliente vê cada ação e por quê.',
  },
  {
    name: 'Bianca Senra',
    role: 'Performance Lead',
    company: 'Verve',
    quote: 'O plano aprovável é um terraform plan pro orçamento. Aprovo o diff e durmo tranquila.',
  },
  {
    name: 'Henrique Sá',
    role: 'Creator',
    company: '@henriquesa',
    quote: 'Eu só descrevo a meta no Claude. A Batuta impede que ele exagere na mão. Genial.',
  },
  {
    name: 'Camila Veloso',
    role: 'CMO',
    company: 'Pomar Digital',
    quote: 'Brasil-nativo de verdade: Pix, português e LGPD de fábrica. Parou de parecer gambiarra.',
  },
  {
    name: 'Tomás Aragão',
    role: 'Growth',
    company: 'Bordô',
    quote: 'O aviso proativo no WhatsApp me chamou antes do pacing furar. Salvou a campanha.',
  },
]

export interface Plan {
  name: string
  tagline: string
  priceMonthly: number // centavos/mês
  priceYearly: number // centavos/mês quando pago anual
  movimentos: string
  features: string[]
  highlighted?: boolean
}

export const PLANS: Plan[] = [
  {
    name: 'Solo',
    tagline: 'Para o primeiro pódio',
    priceMonthly: 0,
    priceYearly: 0,
    movimentos: 'até 200 movimentos/mês',
    features: ['1 conta de anúncios', 'Cofre de Orçamento', 'Trilha auditável (7 dias)', '1 cliente de IA'],
  },
  {
    name: 'Maestro',
    tagline: 'Para quem rege sozinho',
    priceMonthly: 9700,
    priceYearly: 8000,
    movimentos: 'até 2.000 movimentos/mês',
    features: ['3 contas de anúncios', 'Regência cross-platform', 'Dedup de conversão', 'Avisos no WhatsApp', 'Auditoria de 90 dias'],
  },
  {
    name: 'Orquestra',
    tagline: 'Para times e agências',
    priceMonthly: 29700,
    priceYearly: 24700,
    movimentos: 'até 15.000 movimentos/mês',
    features: ['Contas ilimitadas', 'Aprovações por papel', 'Planos aprováveis (diff)', 'ROAS real por cliente', 'Auditoria de 1 ano'],
    highlighted: true,
  },
  {
    name: 'Filarmônica',
    tagline: 'Para operações grandes',
    priceMonthly: 0,
    priceYearly: 0,
    movimentos: 'movimentos sob medida',
    features: ['Tudo do Orquestra', 'SLA e suporte dedicado', 'SSO e papéis avançados', 'Retenção de auditoria sob medida', 'Onboarding assistido'],
  },
]

export interface Faq {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: 'Preciso de plano pago para começar?',
    a: 'Não. O plano Solo é gratuito e já vem com o Cofre de Orçamento e a trilha auditável. Você só sobe de plano quando precisar de mais contas, movimentos ou regência cross-platform.',
  },
  {
    q: 'A Batuta é segura? O agente pode estourar minha verba?',
    a: 'Não pode. Toda mutação cruza o Cofre antes de chegar à plataforma. Se a ação furaria o teto, ela é barrada — não é um aviso depois do gasto, é uma trava antes dele.',
  },
  {
    q: 'O Batuta pode apagar minhas campanhas?',
    a: 'Ações destrutivas não são executadas direto: elas viram um item na fila de aprovação. Nada irreversível acontece sem você liberar.',
  },
  {
    q: 'Quais IAs posso conectar?',
    a: 'Qualquer cliente que fale o protocolo MCP: ChatGPT, Claude, Claude Code, Cursor, Codex, Windsurf e outros. É só apontar para a URL do servidor da Batuta.',
  },
  {
    q: 'Vocês substituem os MCPs oficiais do Google, Meta e TikTok?',
    a: 'Não. A Batuta rege por cima deles. O acesso virou commodity; o valor está em interpretar, coordenar e travar com segurança — é o que fazemos.',
  },
  {
    q: 'Quem paga os anúncios?',
    a: 'Você, direto nas plataformas, com seus próprios métodos. A Batuta cobra apenas a assinatura da regência, em Pix via Asaas.',
  },
  {
    q: 'Como funciona a dedup de conversão?',
    a: 'A Batuta cruza conversões que aparecem em mais de uma plataforma e remove a dupla contagem, devolvendo o ROAS real em vez do inflado que cada plataforma reporta sozinha.',
  },
  {
    q: 'Fica rastro para auditoria e LGPD?',
    a: 'Sim. Cada ação gera uma entrada append-only, encadeada por hash e reversível. Pronta para auditoria de cliente e exigências de LGPD.',
  },
]

/**
 * Números da história do Cofre — batem com a demo (em centavos).
 * Teto R$1.200/dia · já gasto R$1.040 · folga R$160.
 */
export const VAULT = {
  ceilingCents: 120000,
  spentCents: 104000,
  perActionCapCents: 50000,
  approvalAboveCents: 30000,
  accountId: 'g-123-456-7890',
}
