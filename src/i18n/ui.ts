// Shared UI strings. Page-specific copy lives next to its page in src/views/.
import type { Lang } from '.'

const en = {
  description:
    'Marcus Filipus (Marcus Filipe), AI developer and software engineer in Porto Alegre, Brazil. Founder of Southlike Software, an AI automation agency.',
  jobTitle: 'AI Developer & Software Engineer',
  location: 'Porto Alegre, Brazil',
  nav: { home: 'Home', blog: 'Blog', cv: 'CV', faq: 'FAQ', southlike: 'Southlike' },
  switchLang: 'Ler em português',
  pfpAlt: 'A little fat Garfield sitting on the ground',
  comingSoon: 'Coming soon...',
  tags: {} as Record<string, string>,
  southlike: {
    pitch:
      'A boutique AI automation agency for businesses. We find the slow, repetitive parts of how a company works and replace them with systems that run on their own.',
    services: [
      'Audits that show where AI actually pays off',
      'Automations that qualify, route and follow up without a human',
      'Integrations that make existing tools talk to each other',
      'Custom systems when nothing off the shelf fits',
    ],
    visit: 'Visit Southlike',
    whatWeDo: 'What we do',
  },
}

const ptBr: typeof en = {
  description:
    'Marcus Filipus (Marcus Filipe), desenvolvedor de IA e engenheiro de software em Porto Alegre. Fundador da Southlike Software, agência de automação com IA.',
  jobTitle: 'Desenvolvedor de IA e Engenheiro de Software',
  location: 'Porto Alegre, Brasil',
  nav: { home: 'Início', blog: 'Blog', cv: 'Currículo', faq: 'FAQ', southlike: 'Southlike' },
  switchLang: 'Read in English',
  pfpAlt: 'Um Garfield gordinho sentado no chão',
  comingSoon: 'Em breve...',
  tags: { life: 'vida', misc: 'diversos' },
  southlike: {
    pitch:
      'Uma agência boutique de automação com IA para empresas. A gente encontra as partes lentas e repetitivas de como uma empresa funciona e troca por sistemas que rodam sozinhos.',
    services: [
      'Diagnósticos que mostram onde a IA realmente dá retorno',
      'Automações que qualificam, encaminham e fazem follow-up sem precisar de uma pessoa',
      'Integrações que fazem as ferramentas que você já usa conversarem entre si',
      'Sistemas sob medida quando nada pronto resolve',
    ],
    visit: 'Conhecer a Southlike',
    whatWeDo: 'O que a gente faz',
  },
}

export const ui: Record<Lang, typeof en> = { en, 'pt-br': ptBr }
