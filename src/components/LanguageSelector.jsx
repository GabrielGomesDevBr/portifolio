import { useLanguage } from '../context/LanguageContext'

export default function LanguageSelector() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors"
            aria-label="Toggle language"
        >
            {language === 'pt-BR' ? (
                <>
                    <span className="text-xl" role="img" aria-label="Brazil">🇧🇷</span>
                    <span className="text-sm font-medium text-surface-600 hidden sm:inline">PT</span>
                </>
            ) : (
                <>
                    <span className="text-xl" role="img" aria-label="USA">🇺🇸</span>
                    <span className="text-sm font-medium text-surface-600 hidden sm:inline">EN</span>
                </>
            )}
        </button>
    )
}
