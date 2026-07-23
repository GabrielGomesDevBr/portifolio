import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, Menu, MessageCircle, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'
import { track } from '../lib/analytics'
import { ActionLink, Eyebrow } from './Primitives'
import { useScrollRestoration } from '../hooks/useScrollRestoration'

function Header() {
  const { content, locale, localizePath, switchLocale } = usePortfolio()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  const links = [
    { label: content.nav.work, to: `${localizePath('/')}#work` },
    { label: content.nav.systems, to: localizePath('/systems/asaas-billing') },
    { label: content.nav.process, to: `${localizePath('/')}#process` },
    { label: content.nav.about, to: localizePath('/about') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key !== 'Tab') return

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    menuRef.current?.querySelector<HTMLElement>('a,button')?.focus()
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      if (previousFocus?.isConnected) previousFocus.focus()
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'site-header--solid' : ''}`}>
      <div className="site-header__inner">
        <Link className="brand" to={localizePath('/')} aria-label="Gabriel Gomes — início">
          <span className="brand__mark">GG</span>
          <span className="brand__name">Gabriel Gomes</span>
          <span className="live-dot" aria-hidden="true" />
        </Link>

        <nav className="desktop-nav" aria-label="Principal">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to}>{link.label}</NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="locale-switch"
            onClick={() => {
              track('change_locale', { from: locale })
              switchLocale()
            }}
            aria-label={content.nav.language}
          >
            {locale === 'pt-BR' ? 'EN' : 'PT'}
          </button>
          <Link className="header-cta" to={`${localizePath('/')}#contact`}>
            {content.nav.projectCta}
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            aria-label={open ? content.nav.close : content.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}
        aria-hidden={!open}
        aria-modal={open ? 'true' : undefined}
        role={open ? 'dialog' : undefined}
      >
        <nav aria-label="Mobile">
          {links.map((link, index) => (
            <Link key={link.label} to={link.to} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <Link to={`${localizePath('/')}#contact`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <span>05</span>
            {content.nav.contact}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
        <p>{content.contact.availability}</p>
      </div>
    </header>
  )
}

export function ContactSection() {
  const { content, localizePath } = usePortfolio()
  const whatsapp = `https://wa.me/5511946020901?text=${encodeURIComponent(content.contact.whatsappMessage)}`

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__glow" aria-hidden="true" />
      <div className="container contact-section__inner">
        <Eyebrow inverse>{content.contact.eyebrow}</Eyebrow>
        <h2>{content.contact.title}</h2>
        <p className="contact-section__lead">{content.contact.text}</p>
        <div className="contact-actions">
          <ActionLink
            to={whatsapp}
            external
            variant="inverse"
            onClick={() => track('click_whatsapp', { source: 'footer' })}
          >
            <MessageCircle aria-hidden="true" />
            {content.contact.projectCta}
          </ActionLink>
          <a
            className="contact-text-link"
            href="mailto:gabrielgomesdevbr@gmail.com"
            onClick={() => track('click_email', { source: 'footer' })}
          >
            <Mail aria-hidden="true" />
            {content.contact.emailCta}
          </a>
          <Link className="contact-text-link" to={localizePath('/resume')}>
            {content.contact.resumeCta}
          </Link>
        </div>
        <div className="contact-section__meta">
          <p><span className="live-dot" aria-hidden="true" />{content.contact.availability}</p>
          <div>
            <a href="https://linkedin.com/in/gabrielgomesdevbr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://github.com/GabrielGomesDevBr" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { content, localizePath } = usePortfolio()
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link className="brand brand--footer" to={localizePath('/')}>
          <span className="brand__mark">GG</span>
          <span className="brand__name">Gabriel Gomes</span>
        </Link>
        <p>© {new Date().getFullYear()} · {content.resume.title}</p>
        <p className="site-footer__signal">Product / Design / Engineering / Operations</p>
      </div>
    </footer>
  )
}

export function SiteLayout() {
  const { content } = usePortfolio()
  const { pathname } = useLocation()
  useScrollRestoration()

  useEffect(() => {
    track('page_view', { path: pathname })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">{content.common.skip}</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <ContactSection />
      <Footer />
    </>
  )
}
