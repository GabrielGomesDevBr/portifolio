import { useEffect } from 'react'
import type { Locale } from '../content'

type PageMeta = {
  title: string
  description: string
  locale: Locale
  image?: string
  imageAlt?: string
  canonical?: string
}

function setMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.content = content
}

function setAlternate(language: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${language}"]`)
  if (!link) {
    link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = language
    document.head.appendChild(link)
  }
  link.href = href
}

export function usePageMeta({
  title,
  description,
  locale,
  image = '/og/portfolio-og.png',
  imageAlt = 'Gabriel Gomes — Engenheiro de Produto Full-Stack',
  canonical,
}: PageMeta) {
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', locale === 'en' ? 'en_US' : 'pt_BR')
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Gabriel Gomes')
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    if (canonical) {
      const absoluteImage = new URL(image, canonical).href
      setMeta('meta[property="og:image"]', 'property', 'og:image', absoluteImage)
      setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
      setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
      setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', imageAlt)
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImage)
      setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', imageAlt)
      setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)

      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical

      const url = new URL(canonical)
      const basePath = url.pathname === '/en' ? '/' : url.pathname.replace(/^\/en\//, '/')
      const pt = `${url.origin}${basePath === '/' ? '' : basePath}`
      const en = `${url.origin}/en${basePath === '/' ? '' : basePath}`
      setAlternate('pt-BR', pt)
      setAlternate('en', en)
      setAlternate('x-default', pt)
    }
  }, [canonical, description, image, imageAlt, locale, title])
}
