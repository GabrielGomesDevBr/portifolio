import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' }
}

export default function GtmMachine() {
    const { t } = useLanguage()

    return (
        <section id="machine" className="section-padding bg-engine text-engine-text">
            <div className="container-custom">
                <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-3xl mb-14">
                    <span className="eyebrow-dark">{t.machine.eyebrow}</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-5 leading-tight">
                        {t.machine.title}
                    </h2>
                    <p className="text-lg text-engine-faint">{t.machine.intro}</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-4 lg:gap-0 lg:items-stretch mb-12">
                    {t.machine.steps.map((step, index) => (
                        <motion.div
                            key={step.tool}
                            {...reveal}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="relative flex"
                        >
                            <div className="flex-1 bg-engine-soft border border-engine-line rounded-lg p-7 lg:mr-8">
                                <div className="font-mono text-xs tracking-widest uppercase text-pine-300 mb-2">
                                    {String(index + 1).padStart(2, '0')} · {step.name}
                                </div>
                                <h3 className="font-display font-bold text-2xl text-white mb-3">{step.tool}</h3>
                                <p className="text-engine-faint mb-5">{step.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {step.facts.map((fact) => (
                                        <span
                                            key={fact}
                                            className="font-mono text-xs text-pine-200 border border-engine-line rounded px-2 py-1"
                                        >
                                            {fact}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {index < t.machine.steps.length - 1 && (
                                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 items-center justify-center bg-engine border border-engine-line rounded-full">
                                    <ArrowRight size={15} className="text-pine-300" aria-hidden="true" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    {...reveal}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-display text-xl sm:text-2xl font-semibold text-pine-200 max-w-3xl"
                >
                    {t.machine.conclusion}
                </motion.p>
            </div>
        </section>
    )
}
