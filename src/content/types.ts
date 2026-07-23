export type Locale = 'pt-BR' | 'en'
export type CaseKey = 'abaplay' | 'luminipsi' | 'billing'

export type Metric = {
  value: string
  label: string
  detail?: string
  verifiedAt: string
  source: string
  public: boolean
}

export type MediaItem = {
  src: string
  alt: string
  caption: string
  kind: 'desktop' | 'mobile' | 'detail'
}

export type CaseChapter = {
  eyebrow: string
  title: string
  body: string
  bullets?: string[]
}

export type CaseStudy = {
  key: CaseKey
  slug: string
  number: string
  name: string
  category: string
  status: string
  title: string
  summary: string
  role: string
  period: string
  accent: string
  link?: string
  linkLabel?: string
  metrics: Metric[]
  stack: string[]
  media: MediaItem[]
  chapters: CaseChapter[]
  closingTitle: string
  closingText: string
}

export type PortfolioContent = {
  locale: Locale
  seo: {
    title: string
    description: string
  }
  nav: {
    work: string
    systems: string
    process: string
    about: string
    contact: string
    projectCta: string
    menu: string
    close: string
    language: string
  }
  common: {
    home: string
    exploreCase: string
    visitProduct: string
    nextCase: string
    verified: string
    skip: string
    backToWork: string
    currentLocale: string
  }
  home: {
    status: string
    eyebrow: string
    titleTop: string
    titleAccent: string
    description: string
    primaryCta: string
    secondaryCta: string
    metrics: Metric[]
    workEyebrow: string
    workTitle: string
    workIntro: string
    systemEyebrow: string
    systemTitle: string
    systemText: string
    systemCta: string
    capabilitiesEyebrow: string
    capabilitiesTitle: string
    capabilities: Array<{ number: string; title: string; text: string; tags: string[] }>
    processEyebrow: string
    processTitle: string
    processIntro: string
    process: Array<{ number: string; title: string; text: string; artifact: string }>
    aboutEyebrow: string
    aboutTitle: string
    aboutText: string
    aboutCta: string
    automationEyebrow: string
    automationTitle: string
    automationIntro: string
    automationConclusion: string
    automations: Array<{ stage: string; tool: string; text: string; facts: string[] }>
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    projectCta: string
    emailCta: string
    resumeCta: string
    availability: string
    whatsappMessage: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    paragraphs: string[]
    principlesTitle: string
    principles: Array<{ title: string; text: string }>
    timelineTitle: string
    timeline: Array<{ period: string; role: string; org: string; text: string }>
  }
  resume: {
    eyebrow: string
    title: string
    intro: string
    print: string
    download: string
    summaryTitle: string
    summary: string
    experienceTitle: string
    skillsTitle: string
    educationTitle: string
  }
  cases: Record<CaseKey, CaseStudy>
}
