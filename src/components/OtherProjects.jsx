import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' }
}

export default function OtherProjects() {
    const { t } = useLanguage()

    return (
        <section id="lab" className="section-padding">
            <div className="container-custom">
                <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
                    <span className="eyebrow">{t.others.eyebrow}</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-3 mb-4">
                        {t.others.title}
                    </h2>
                    <p className="text-lg text-ink-soft">{t.others.intro}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {t.others.projects.map((project, index) => (
                        <motion.a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...reveal}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group bg-card border border-pine-100 rounded-lg p-6 hover:border-pine-400 transition-colors flex flex-col"
                        >
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="font-display font-semibold text-lg text-ink">{project.name}</h3>
                                <ArrowUpRight
                                    size={17}
                                    className="text-ink-faint group-hover:text-pine-600 transition-colors shrink-0 mt-1"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="text-sm text-ink-soft mb-4 flex-1">{project.description}</p>
                            <p className="font-mono text-xs text-ink-faint">{project.tech}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
