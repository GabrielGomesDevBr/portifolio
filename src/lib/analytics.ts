type PortfolioEvent =
  | 'view_case'
  | 'click_project_contact'
  | 'click_whatsapp'
  | 'click_email'
  | 'download_resume'
  | 'change_locale'
  | 'open_project'
  | 'page_view'
  | 'web_vital'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function track(event: PortfolioEvent, params: Record<string, string> = {}) {
  window.gtag?.('event', event, params)
}

export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
  if (!measurementId || typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args)
  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
}

export function observeWebVitals() {
  if (typeof PerformanceObserver === 'undefined') return

  const observe = (type: 'largest-contentful-paint' | 'layout-shift') => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const last = entries.at(-1) as (PerformanceEntry & { value?: number; hadRecentInput?: boolean }) | undefined
        if (!last || last.hadRecentInput) return
        const value = type === 'layout-shift' ? last.value ?? 0 : last.startTime
        track('web_vital', { name: type, value: value.toFixed(2) })
      })
      observer.observe({ type, buffered: true })
    } catch {
      // Browsers without a given entry type keep the rest of the experience intact.
    }
  }

  observe('largest-contentful-paint')
  observe('layout-shift')
}
