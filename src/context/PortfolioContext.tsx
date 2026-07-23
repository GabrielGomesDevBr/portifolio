import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { contentByLocale, type Locale, type PortfolioContent } from '../content'

type PortfolioContextValue = {
  locale: Locale
  content: PortfolioContent
  localizePath: (path: string) => string
  switchLocale: () => void
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null)

function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt-BR'
}

function stripLocale(pathname: string): string {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3)
  return pathname
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const locale = localeFromPath(location.pathname)
  const content = contentByLocale[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('portfolio-language', locale)
  }, [locale])

  const value = useMemo<PortfolioContextValue>(() => {
    const localizePath = (path: string) => {
      if (!path.startsWith('/')) return path
      if (locale === 'en') return path === '/' ? '/en' : `/en${path}`
      return path
    }

    const switchLocale = () => {
      const base = stripLocale(location.pathname)
      const target = locale === 'en' ? base : base === '/' ? '/en' : `/en${base}`
      navigate(`${target}${location.search}${location.hash}`)
    }

    return { locale, content, localizePath, switchLocale }
  }, [content, locale, location.hash, location.pathname, location.search, navigate])

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}

export function usePortfolio() {
  const value = useContext(PortfolioContext)
  if (!value) throw new Error('usePortfolio must be used inside PortfolioProvider')
  return value
}
