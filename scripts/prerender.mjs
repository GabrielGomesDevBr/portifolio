import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { getStaticRouteMeta, publicRoutes, render } from '../dist-ssr/entry-server.js'

const projectRoot = resolve(import.meta.dirname, '..')
const dist = resolve(projectRoot, 'dist')
const template = await readFile(resolve(dist, 'index.html'), 'utf8')
const configuredOrigin = (process.env.VITE_SITE_URL || 'http://localhost:4173').replace(/\/+$/, '')

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value)
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*(")`)
  return html.replace(pattern, `$1${escaped}$2`)
}

function localizedAlternates(path) {
  const base = path === '/en' ? '/' : path.replace(/^\/en\//, '/')
  const ptPath = base === '/' ? '' : base
  const enPath = `/en${base === '/' ? '' : base}`
  return [
    `<link rel="alternate" hreflang="pt-BR" href="${configuredOrigin}${ptPath}" />`,
    `<link rel="alternate" hreflang="en" href="${configuredOrigin}${enPath}" />`,
    `<link rel="alternate" hreflang="x-default" href="${configuredOrigin}${ptPath}" />`,
  ].join('\n    ')
}

for (const path of [...publicRoutes, '/404']) {
  const meta = getStaticRouteMeta(path)
  const canonical = `${configuredOrigin}${path === '/' ? '' : path}`
  const markup = render(path === '/404' ? '/not-found' : path)
  let html = template
    .replace('<html lang="pt-BR">', `<html lang="${meta.locale}" data-prerendered="true">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace('<link rel="canonical" href="/" />', `<link rel="canonical" href="${canonical}" />\n    ${localizedAlternates(path)}`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  html = replaceMeta(html, 'name="description"', meta.description)
  html = replaceMeta(html, 'property="og:title"', meta.title)
  html = replaceMeta(html, 'property="og:description"', meta.description)
  html = replaceMeta(html, 'property="og:locale"', meta.locale === 'en' ? 'en_US' : 'pt_BR')
  html = replaceMeta(html, 'property="og:image"', `${configuredOrigin}${meta.image}`)
  html = replaceMeta(html, 'property="og:image:alt"', meta.imageAlt)
  html = replaceMeta(html, 'name="twitter:title"', meta.title)
  html = replaceMeta(html, 'name="twitter:description"', meta.description)
  html = replaceMeta(html, 'name="twitter:image"', `${configuredOrigin}${meta.image}`)
  html = replaceMeta(html, 'name="twitter:image:alt"', meta.imageAlt)
  html = html.replace('</head>', `    <meta property="og:url" content="${canonical}" />\n  </head>`)

  const output = path === '/'
    ? resolve(dist, 'index.html')
    : path === '/404'
      ? resolve(dist, '404.html')
      : resolve(dist, path.slice(1), 'index.html')

  await mkdir(resolve(output, '..'), { recursive: true })
  await writeFile(output, html)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes.map((path) => `  <url><loc>${configuredOrigin}${path === '/' ? '' : path}</loc></url>`).join('\n')}
</urlset>
`

await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${configuredOrigin}/sitemap.xml\n`)

console.log(`Prerendered ${publicRoutes.length + 1} routes for ${configuredOrigin}`)
