// Edit this file to update /cv, /pt-br/cv and both PDFs. Keep both languages in sync.
import type { Lang } from '../i18n'

export type Experience = {
  company: string
  url?: string
  title: string
  start: string
  end?: string // undefined = present
  summary: string
  highlights?: string[]
}

export type Education = { school: string; url: string; course: string; note: string }

export type CV = {
  headline: string
  experience: Experience[]
  education: Education[]
  skills: string[]
  languages: string
  labels: {
    experience: string
    education: string
    skills: string
    languages: string
    present: string
    location: string
    download: string
    fileName: string
    fullHistory: string
  }
}

const en: CV = {
  headline:
    'Full-stack software engineer specialized in mission-critical payment and billing systems. I build AI systems that help me ship better and faster.',
  experience: [
    {
      company: 'Southlike Software',
      url: 'https://southlikesoftware.com',
      title: 'Founder',
      start: '2023',
      summary:
        'Boutique AI automation agency for businesses. Agents, workflow automation and systems that connect AI to the real world. Not chatbots answering questions: systems that do the work on their own.',
    },
    {
      company: 'ADP',
      url: 'https://www.adp.com/',
      title: 'Developer',
      start: '2026', // TODO: confirm promotion date
      summary:
        'Promoted to own more of the billing platform. Same mission-critical systems, wider scope: I drive improvements across the pipelines and services I built, and carry more of the architecture and reliability decisions for the team.',
      highlights: [
        'Keep raising invoice-data accuracy and closing the remaining revenue-leakage gaps.',
        'Build AI tooling and workflows that help the team ship better and faster.',
      ],
    },
    {
      company: 'ADP',
      url: 'https://www.adp.com/',
      title: 'Associate Developer',
      start: 'May 2024',
      end: '2026', // TODO: confirm promotion date
      summary:
        'Mission-critical payment and billing systems for a global marketplace. Event-driven architectures built to scale.',
      highlights: [
        'Led a billing data-refinement pipeline end to end over two quarters: requirements, data modeling, architecture and implementation. It fixed a revenue-leakage problem caused by unknown customer status across multiple sources of truth.',
        'Result: 60% better invoice-data accuracy and over $1M in annual revenue recovered.',
        'Built big-data export pipelines with Databricks feeding the transactional database, cutting query time from 11 s to 100 ms.',
        'Refactored the backend with retry and failover, and monitored production through Splunk.',
      ],
    },
    {
      company: 'ADP',
      url: 'https://www.adp.com/',
      title: 'Developer, internship',
      start: 'Aug 2022',
      end: 'May 2024',
      summary:
        'Worked with a global team maintaining and modernizing a microservices ecosystem in Node.js.',
      highlights: [
        'Upgraded dependencies and refactored codebases to current standards.',
        'Helped move infrastructure from VMs to Kubernetes, containerizing and testing the components of an entire business domain.',
      ],
    },
  ],
  education: [
    {
      school: 'PUCRS',
      url: 'https://www.pucrs.br/',
      course: 'Software Engineering',
      note: 'Studied software engineering in Porto Alegre.',
    },
  ],
  skills: [
    'TypeScript',
    'Node.js',
    'Next.js / React',
    'Tailwind',
    'AI SDK & agent workflows',
    'Docker',
    'AWS',
    'Databricks',
    'Event-driven architecture',
  ],
  languages: 'Portuguese (native), English (fluent)',
  labels: {
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    present: 'Present',
    location: 'Porto Alegre, Brazil',
    download: 'Download CV as PDF',
    fileName: 'marcus-quirino-cv.pdf',
    fullHistory: 'Full history on',
  },
}

const ptBr: CV = {
  headline:
    'Engenheiro de software full-stack especializado em sistemas de pagamento e faturamento de missão crítica. Construo sistemas de IA que me ajudam a entregar melhor e mais rápido.',
  experience: [
    {
      company: 'Southlike Software',
      url: 'https://southlikesoftware.com',
      title: 'Fundador',
      start: '2023',
      summary:
        'Agência boutique de automação com IA para empresas. Agentes, automação de processos e sistemas que conectam a IA ao mundo real. Não são chatbots respondendo perguntas: são sistemas que fazem o trabalho sozinhos.',
    },
    {
      company: 'ADP',
      url: 'https://www.adp.com/',
      title: 'Desenvolvedor',
      start: '2026', // TODO: confirm promotion date
      summary:
        'Promovido para assumir uma parte maior da plataforma de faturamento. Os mesmos sistemas de missão crítica, com escopo maior: conduzo melhorias nos pipelines e serviços que construí e assumo mais das decisões de arquitetura e confiabilidade do time.',
      highlights: [
        'Seguir aumentando a precisão dos dados de faturas e fechando as brechas restantes de perda de receita.',
        'Construir ferramentas e workflows de IA que ajudam o time a entregar melhor e mais rápido.',
      ],
    },
    {
      company: 'ADP',
      url: 'https://www.adp.com/',
      title: 'Desenvolvedor Associado',
      start: 'mai. 2024',
      end: '2026', // TODO: confirm promotion date
      summary:
        'Sistemas de pagamento e faturamento de missão crítica para um marketplace global. Arquiteturas orientadas a eventos feitas para escalar.',
      highlights: [
        'Liderei de ponta a ponta, ao longo de dois trimestres, um pipeline de refinamento de dados de faturamento: requisitos, modelagem de dados, arquitetura e implementação. Ele resolveu um problema de perda de receita causado por status de cliente desconhecido entre várias fontes de verdade.',
        'Resultado: 60% mais precisão nos dados de faturas e mais de US$ 1 milhão por ano em receita recuperada.',
        'Construí pipelines de exportação de big data com Databricks alimentando o banco transacional, reduzindo o tempo de consulta de 11 s para 100 ms.',
        'Refatorei o backend com retry e failover e monitorei produção pelo Splunk.',
      ],
    },
    {
      company: 'ADP',
      url: 'https://www.adp.com/',
      title: 'Desenvolvedor, estágio',
      start: 'ago. 2022',
      end: 'mai. 2024',
      summary:
        'Trabalhei com um time global mantendo e modernizando um ecossistema de microsserviços em Node.js.',
      highlights: [
        'Atualizei dependências e refatorei bases de código para os padrões atuais.',
        'Ajudei a migrar a infraestrutura de VMs para Kubernetes, containerizando e testando os componentes de um domínio de negócio inteiro.',
      ],
    },
  ],
  education: [
    {
      school: 'PUCRS',
      url: 'https://www.pucrs.br/',
      course: 'Engenharia de Software',
      note: 'Estudei engenharia de software em Porto Alegre.',
    },
  ],
  skills: [
    'TypeScript',
    'Node.js',
    'Next.js / React',
    'Tailwind',
    'AI SDK e workflows com agentes',
    'Docker',
    'AWS',
    'Databricks',
    'Arquitetura orientada a eventos',
  ],
  languages: 'Português (nativo), inglês (fluente)',
  labels: {
    experience: 'Experiência',
    education: 'Formação',
    skills: 'Competências',
    languages: 'Idiomas',
    present: 'Atual',
    location: 'Porto Alegre, Brasil',
    download: 'Baixar currículo em PDF',
    fileName: 'marcus-quirino-curriculo.pdf',
    fullHistory: 'Histórico completo no',
  },
}

export const cv: Record<Lang, CV> = { en, 'pt-br': ptBr }
