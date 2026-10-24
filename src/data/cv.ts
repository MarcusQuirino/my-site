// Edit this file to update /cv.

export type Experience = {
  company: string
  url?: string
  title: string
  start: string
  end?: string // undefined = present
  summary: string
  highlights?: string[]
}

export const headline =
  'Full-stack software engineer specialized in mission-critical payment and billing systems. I build AI systems that help me ship better and faster.'

export const experience: Experience[] = [
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
]

export const education = [
  {
    school: 'PUCRS',
    url: 'https://www.pucrs.br/',
    course: 'Software Engineering',
    note: 'Studied software engineering in Porto Alegre.',
  },
]

export const skills = [
  'TypeScript',
  'Node.js',
  'Next.js / React',
  'Tailwind',
  'AI SDK & agent workflows',
  'Docker',
  'AWS',
  'Databricks',
  'Event-driven architecture',
]
