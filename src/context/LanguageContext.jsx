import { createContext, useContext, useState, useEffect } from 'react'
import { translations, projectTranslations } from '../i18n/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Check localStorage first, then browser language, default to pt-BR
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio-language')
            if (saved) return saved

            const browserLang = navigator.language
            if (browserLang.startsWith('en')) return 'en'
        }
        return 'pt-BR'
    })

    useEffect(() => {
        localStorage.setItem('portfolio-language', language)
        document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en'
    }, [language])

    const t = translations[language]
    const tProjects = projectTranslations[language]

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt-BR' ? 'en' : 'pt-BR')
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, tProjects }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
