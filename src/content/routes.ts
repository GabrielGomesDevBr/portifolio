import { contentByLocale, type Locale } from './index'

export const publicRoutes = [
  '/',
  '/work/abaplay',
  '/work/luminipsi',
  '/systems/asaas-billing',
  '/about',
  '/resume',
  '/en',
  '/en/work/abaplay',
  '/en/work/luminipsi',
  '/en/systems/asaas-billing',
  '/en/about',
  '/en/resume',
] as const

export type StaticRouteMeta = {
  locale: Locale
  title: string
  description: string
  image: string
  imageAlt: string
}

export function getStaticRouteMeta(path: string): StaticRouteMeta {
  const locale: Locale = path === '/en' || path.startsWith('/en/') ? 'en' : 'pt-BR'
  const content = contentByLocale[locale]
  const route = locale === 'en' ? (path === '/en' ? '/' : path.slice(3)) : path

  if (route === '/work/abaplay') {
    const study = content.cases.abaplay
    return { locale, title: `${study.name} — ${study.title} | Gabriel Gomes`, description: study.summary, image: '/og/abaplay-og.png', imageAlt: 'ABAplay — case de produto SaaS por Gabriel Gomes' }
  }
  if (route === '/work/luminipsi') {
    const study = content.cases.luminipsi
    return { locale, title: `${study.name} — ${study.title} | Gabriel Gomes`, description: study.summary, image: '/og/luminipsi-og.png', imageAlt: 'LuminiPsi — case de produto SaaS por Gabriel Gomes' }
  }
  if (route === '/systems/asaas-billing') {
    const study = content.cases.billing
    return { locale, title: `${study.name} — ${study.title} | Gabriel Gomes`, description: study.summary, image: '/og/billing-og.png', imageAlt: 'Infraestrutura de billing e NFS-e por Gabriel Gomes' }
  }
  if (route === '/about') {
    return { locale, title: `${content.about.title} | Gabriel Gomes`, description: content.about.intro, image: '/og/portfolio-og.png', imageAlt: 'Gabriel Gomes — Engenheiro de Produto Full-Stack' }
  }
  if (route === '/resume') {
    return { locale, title: `${content.resume.title} | Gabriel Gomes`, description: content.resume.summary, image: '/og/portfolio-og.png', imageAlt: 'Gabriel Gomes — Engenheiro de Produto Full-Stack' }
  }

  return { locale, title: content.seo.title, description: content.seo.description, image: '/og/portfolio-og.png', imageAlt: 'Portfólio de Gabriel Gomes — produtos digitais em operação' }
}
