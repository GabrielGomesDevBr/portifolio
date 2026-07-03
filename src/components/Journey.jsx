import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' }
}

export default function Journey() {
    const { t } = useLanguage()

    return (
        <section id="journey" className="section-padding bg-card border-y border-pine-100">
            <div className="container-custom">
                <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
                    <span className="eyebrow">{t.journey.eyebrow}</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 mb-5 leading-tight">
                        {t.journey.title}
                    </h2>
                    <p className="text-lg text-ink-soft">{t.journey.intro}</p>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_20rem] gap-14">
                    {/* Linha do tempo */}
                    <ol className="space-y-0">
                        {t.journey.timeline.map((item, index) => (
                            <motion.li
                                key={`${item.org}-${item.period}`}
                                {...reveal}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="relative grid sm:grid-cols-[9rem_1fr] gap-x-8 gap-y-1 pb-10 last:pb-0 border-l-2 border-pine-100 pl-6 sm:border-l-0 sm:pl-0"
                            >
                                <div className="font-mono text-sm text-pine-700 pt-0.5">{item.period}</div>
                                <div className="sm:border-l-2 sm:border-pine-100 sm:pl-8 sm:pb-2 relative">
                                    <span className="hidden sm:block absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-pine-500" aria-hidden="true" />
                                    <h3 className="font-display font-semibold text-lg text-ink">
                                        {item.role}
                                        <span className="text-ink-faint font-normal"> · {item.org}</span>
                                    </h3>
                                    <p className="text-ink-soft mt-1.5">{item.text}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>

                    {/* Stack */}
                    <motion.aside
                        {...reveal}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="lg:sticky lg:top-24 self-start bg-paper border border-pine-100 rounded-lg p-7"
                    >
                        <h3 className="font-display font-semibold text-lg text-ink mb-5">
                            {t.journey.stackTitle}
                        </h3>
                        <dl className="space-y-4">
                            {t.journey.stack.map((group) => (
                                <div key={group.group}>
                                    <dt className="font-mono text-xs tracking-widest uppercase text-pine-600 mb-1">
                                        {group.group}
                                    </dt>
                                    <dd className="text-sm text-ink-soft">{group.items}</dd>
                                </div>
                            ))}
                        </dl>
                    </motion.aside>
                </div>
            </div>
        </section>
    )
}
