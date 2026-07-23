import { render, screen } from '@testing-library/react'
import { contentByLocale } from './content'
import { MetricGrid } from '../components/Primitives'
import { getStaticRouteMeta, publicRoutes } from './routes'

describe('canonical portfolio content', () => {
  it('keeps both locales structurally complete and aligned', () => {
    const pt = contentByLocale['pt-BR']
    const en = contentByLocale.en

    expect(Object.keys(pt.cases)).toEqual(Object.keys(en.cases))
    expect(pt.cases.abaplay.slug).toBe(en.cases.abaplay.slug)
    expect(pt.cases.luminipsi.slug).toBe(en.cases.luminipsi.slug)
    expect(pt.home.capabilities).toHaveLength(en.home.capabilities.length)
    expect(pt.home.process).toHaveLength(en.home.process.length)
    expect(pt.home.automations).toHaveLength(en.home.automations.length)
  })

  it('contains localized public routes for every core page', () => {
    const portuguese = publicRoutes.filter((route) => !route.startsWith('/en'))
    const english = publicRoutes.filter((route) => route.startsWith('/en'))
    expect(portuguese).toHaveLength(english.length)
    expect(publicRoutes).toContain('/systems/asaas-billing')
    expect(publicRoutes).toContain('/en/systems/asaas-billing')
  })

  it('never renders a metric marked as private', () => {
    render(
      <MetricGrid metrics={[
        { value: '4', label: 'public proof', verifiedAt: '2026-07-23', source: 'production', public: true },
        { value: 'secret', label: 'private proof', verifiedAt: '2026-07-23', source: 'internal', public: false },
      ]} />,
    )

    expect(screen.getByText('public proof')).toBeInTheDocument()
    expect(screen.queryByText('private proof')).not.toBeInTheDocument()
  })

  it('keeps billing and fiscal automation explicit in both products', () => {
    for (const locale of Object.values(contentByLocale)) {
      expect(locale.cases.billing.summary.toLowerCase()).toMatch(/invoice|nota/)
      expect(locale.cases.billing.metrics.some((metric) => metric.value === 'Auto')).toBe(true)
    }
  })

  it('defines a 1200×630 social card and descriptive metadata for every public route', () => {
    for (const route of publicRoutes) {
      const meta = getStaticRouteMeta(route)
      expect(meta.title).toBeTruthy()
      expect(meta.description).toBeTruthy()
      expect(meta.image).toMatch(/^\/og\/.+-og\.png$/)
      expect(meta.imageAlt).toBeTruthy()
    }
  })
})
