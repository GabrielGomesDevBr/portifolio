import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
    const { t } = useLanguage()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-engine border-t border-engine-line py-8 text-sm">
            <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-engine-faint">
                    © {currentYear} Gabriel Gomes · <span className="text-engine-text">{t.footer.role}</span>
                </p>
                <p className="font-mono text-xs text-engine-faint">{t.footer.madeWith}</p>
            </div>
        </footer>
    )
}
