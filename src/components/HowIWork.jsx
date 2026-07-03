import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' }
}

export default function HowIWork() {
    const { t } = useLanguage()

    return (
        <section id="method" className="section-padding">
            <div className="container-custom">
                <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-3xl mb-12">
                    <span className="eyebrow">{t.method.eyebrow}</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 mb-5 leading-tight">
                        {t.method.title}
                    </h2>
                    <p className="text-lg text-ink-soft">{t.method.intro}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {t.method.principles.map((principle, index) => (
                        <motion.div
                            key={principle.title}
                            {...reveal}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="bg-card border border-pine-100 border-l-4 border-l-pine-600 rounded-lg p-7"
                        >
                            <h3 className="font-display font-semibold text-xl text-ink mb-3">
                                {principle.title}
                            </h3>
                            <p className="text-ink-soft">{principle.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
