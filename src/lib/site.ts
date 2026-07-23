const configuredUrl = import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, '')

export function siteUrl(path = '/') {
  const origin = configuredUrl || (typeof window !== 'undefined' ? window.location.origin : '')
  if (!origin) return path
  return `${origin}${path === '/' ? '' : path}`
}

