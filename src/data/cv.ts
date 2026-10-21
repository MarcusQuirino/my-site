// Edit this file to update /cv. Dates marked TODO are unknown and should be filled in.

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
  'Software engineer. Mission-critical billing systems by day, AI systems that ship faster by night.'

export const experience: Experience[] = [
  {
    company: 'Southlike Software',
    url: 'https://southlikesoftware.com',
    title: 'Founder',
    start: '2025', // TODO: confirm start date
    summary:
      'Boutique AI automation agency for businesses. I run the engagements end to end: audit, design, build, and the systems that keep it running.',
  },
  {
    company: 'ADP Brasil Labs',
    url: 'https://www.adp.com/',
    title: 'Software Engineer',
    start: 'TODO', // e.g. 'Mar 2024'
    summary:
      'Mission-critical billing systems used by some of the largest payroll operations in the world.',
    highlights: [
      'Enterprise-scale services where correctness is not optional',
      'Built internal AI tooling and workflows that help the team ship better and faster',
    ],
  },
  {
    company: 'PureAI',
    url: 'https://www.pureai.com.br/',
    title: 'Full-stack Developer',
    start: 'TODO',
    end: 'TODO',
    summary: 'Early-stage startup. Shipped the product and the marketing site with Next.js and TypeScript.',
  },
  {
    company: 'Free From Club',
    url: 'https://www.freefromclub.com.br/',
    title: 'Mobile Developer',
    start: 'TODO',
    end: 'TODO',
    summary: 'Built the React Native app for a food community in Brazil.',
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
  'Node',
  'React / Next.js',
  'Astro',
  'Python',
  'Rust (learning)',
  'Docker',
  'AWS',
  'LLM tooling & agent workflows',
  'System design & performance',
]
