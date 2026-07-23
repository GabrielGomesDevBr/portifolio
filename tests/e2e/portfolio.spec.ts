import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = [
  ['/', /Produtos digitais que entram em operação/i],
  ['/work/abaplay', /Da planilha à operação clínica conectada/i],
  ['/work/luminipsi', /Compliance clínico tratado como produto/i],
  ['/systems/asaas-billing', /Uma conta financeira. Dois produtos isolados/i],
  ['/about', /Negócio primeiro. Tecnologia a serviço da operação/i],
  ['/resume', /Engenheiro de Produto Full-Stack/i],
  ['/en', /Digital products that make it to production/i],
] as const

test('all primary routes load directly without console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })

  for (const [route, heading] of routes) {
    await page.goto(route)
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible()
  }

  expect(errors).toEqual([])
})

test('the localized 404 remains useful', async ({ page }) => {
  await page.goto('/route-that-does-not-exist')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/rota|route/i)
  await expect(page.getByRole('link', { name: /Voltar ao início|Back home/i })).toBeVisible()
})

test('critical pages have no serious or critical axe violations', async ({ page }) => {
  for (const route of ['/', '/work/luminipsi', '/systems/asaas-billing']) {
    await page.goto(route)
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze()
    const blocking = results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))
    expect(blocking, `${route}: ${blocking.map((item) => item.id).join(', ')}`).toEqual([])
  }
})

test('mobile navigation is keyboard-safe and closable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toBeHidden()
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused()
})

test('responsive matrix does not create horizontal overflow', async ({ page }) => {
  for (const viewport of [
    { width: 360, height: 800 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1280, height: 800 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    expect(overflow, `${viewport.width}px viewport`).toBeLessThanOrEqual(1)
  }
})

test('reduced motion keeps all primary content available', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Não são conceitos/i })).toBeVisible()
  await expect(page.locator('.reveal').first()).toHaveCSS('opacity', '1')
})

test('resume PDF is generated only after the user requests it', async ({ page }) => {
  await page.goto('/resume')
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: /Baixar PDF/i }).click()
  const download = await downloadPromise
  expect(download.suggestedFilename()).toBe('Gabriel_Gomes_Curriculo.pdf')
})

test('social previews expose absolute Open Graph metadata', async ({ page }) => {
  await page.goto('/work/luminipsi')
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /LuminiPsi/)
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https?:\/\/.+\/og\/luminipsi-og\.png$/)
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute('content', '1200')
  await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute('content', '630')
  await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', /LuminiPsi/)
})
