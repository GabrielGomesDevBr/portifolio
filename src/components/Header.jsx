import { useState, useEffect } from 'react'
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSelector from './LanguageSelector'
import { generateCV } from '../utils/generateCV'

export default function Header() {
    const { t } = useLanguage()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="flex items-center space-x-2 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                            <span className="text-white font-bold text-lg">G</span>
                        </div>
                        <span className="font-bold text-xl text-surface-900 hidden sm:block">
                            Gabriel<span className="text-primary-500">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="px-4 py-2 text-surface-600 hover:text-primary-600 font-medium transition-colors duration-200 rounded-lg hover:bg-primary-50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-3">
                        <LanguageSelector />
                        <a
                            href="https://github.com/GabrielGomesDevBr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-surface-500 hover:text-surface-900 hover:bg-surface-100 rounded-lg transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/gabrielgomesdevbr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-surface-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <button
                            onClick={generateCV}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                        >
                            <Download size={18} />
                            <span>{t.nav.resume}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <LanguageSelector />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-surface-600 hover:text-surface-900 hover:bg-surface-100 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-300 ${isMobileMenuOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="container-custom py-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block px-4 py-3 text-surface-700 hover:text-primary-600 hover:bg-primary-50 font-medium rounded-xl transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 border-t border-surface-200 flex items-center gap-3">
                        <a
                            href="https://github.com/GabrielGomesDevBr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 text-surface-500 hover:text-surface-900 hover:bg-surface-100 rounded-xl transition-colors"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href="https://linkedin.com/in/gabrielgomesdevbr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 text-surface-500 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href="mailto:gabrielgomesdevbr@gmail.com"
                            className="p-3 text-surface-500 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
