import { useLanguage } from '../context/LanguageContext'

export default function LanguageSelector() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md font-mono text-xs text-ink-soft hover:bg-pine-50 hover:text-pine-700 transition-colors"
            aria-label="Toggle language"
        >
            <span role="img" aria-hidden="true">{language === 'pt-BR' ? '🇧🇷' : '🇺🇸'}</span>
            <span className="font-medium">{language === 'pt-BR' ? 'PT' : 'EN'}</span>
        </button>
    )
}
