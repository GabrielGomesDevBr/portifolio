import { motion } from 'framer-motion'
import { Download, MessageCircle, Mail, Linkedin, Github } from 'lucide-react'
import { generateCV } from '../utils/generateCV'
import { useLanguage } from '../context/LanguageContext'
import StatusLine from './StatusLine'

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' }
}

export default function Contact() {
    const { t, language } = useLanguage()

    const whatsappUrl = `https://wa.me/5511946020901?text=${encodeURIComponent(t.contact.whatsappMessage)}`

    const links = [
        { icon: Mail, label: t.contact.links.email, href: 'mailto:gabrielgomesdevbr@gmail.com' },
        { icon: Linkedin, label: t.contact.links.linkedin, href: 'https://linkedin.com/in/gabrielgomesdevbr' },
        { icon: Github, label: t.contact.links.github, href: 'https://github.com/GabrielGomesDevBr' }
    ]

    return (
        <section id="contact" className="section-padding bg-engine text-engine-text">
            <div className="container-custom">
                <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-3xl">
                    <span className="eyebrow-dark">{t.contact.eyebrow}</span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-5">
                        {t.contact.title}
                    </h2>
                    <p className="text-lg text-engine-faint mb-10">{t.contact.text}</p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-12">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-pine-400 text-engine font-bold rounded-md hover:bg-pine-300 transition-colors"
                        >
                            <MessageCircle size={18} />
                            {t.contact.whatsapp}
                        </a>
                        <button
                            onClick={() => generateCV(language)}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-engine-text font-semibold rounded-md border border-engine-line hover:border-pine-300 hover:text-white transition-colors"
                        >
                            <Download size={18} />
                            {t.contact.downloadCV}
                        </button>
                    </div>

                    <ul className="space-y-3 mb-12">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 font-mono text-sm text-engine-faint hover:text-pine-200 transition-colors"
                                >
                                    <link.icon size={16} aria-hidden="true" />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <StatusLine type="live" dark>{t.contact.location}</StatusLine>
                </motion.div>
            </div>
        </section>
    )
}
