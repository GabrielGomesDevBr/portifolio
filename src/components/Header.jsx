import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSelector from './LanguageSelector'
import { generateCV } from '../utils/generateCV'

export default function Header() {
    const { t, language } = useLanguage()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: t.nav.cases, href: '#cases' },
        { name: t.nav.machine, href: '#machine' },
        { name: t.nav.method, href: '#method' },
        { name: t.nav.journey, href: '#journey' },
        { name: t.nav.contact, href: '#contact' }
    ]

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-paper/95 backdrop-blur border-b border-pine-100'
                : 'bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Marca */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="flex items-baseline gap-1 group"
                    >
                        <span className="font-display font-bold text-lg text-ink">Gabriel Gomes</span>
                        <span className="status-dot status-dot--live translate-y-[-2px]" aria-hidden="true" />
                    </a>

                    {/* Navegação desktop */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-3 py-2 text-sm text-ink-soft hover:text-pine-700 font-medium transition-colors rounded-md hover:bg-pine-50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-2">
                        <LanguageSelector />
                        <button
                            onClick={() => generateCV(language)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-pine-700 text-white text-sm font-semibold rounded-md hover:bg-pine-800 transition-colors"
                        >
                            <Download size={15} />
                            <span>{t.nav.resume}</span>
                        </button>
                    </div>

                    {/* Menu mobile */}
                    <div className="flex items-center gap-1 lg:hidden">
                        <LanguageSelector />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-ink-soft hover:text-ink rounded-md transition-colors"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-paper border-b border-pine-100 shadow-lg transition-all duration-200 ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="container-custom py-3 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block px-3 py-2.5 text-ink-soft hover:text-pine-700 hover:bg-pine-50 font-medium rounded-md transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => { setIsMobileMenuOpen(false); generateCV(language) }}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-pine-700 text-white font-semibold rounded-md"
                    >
                        <Download size={16} />
                        <span>{t.nav.resume}</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
