import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateCV } from '../utils/generateCV'
import StatusLine from './StatusLine'

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 }
}

export default function Hero() {
    const { t, language } = useLanguage()

    const scrollToCases = () => {
        document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
            <div className="container-custom w-full">
                <div className="max-w-3xl">
                    <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
                        <StatusLine type="live">{t.hero.status}</StatusLine>
                    </motion.div>

                    <motion.h1
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="font-display font-extrabold text-ink leading-[1.02] tracking-tight text-5xl sm:text-6xl lg:text-7xl mt-6 mb-8"
                    >
                        {t.hero.title1}
                        <br />
                        <span className="text-pine-600">{t.hero.title2}</span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.16 }}
                        className="text-lg sm:text-xl text-ink-soft max-w-2xl mb-10"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, delay: 0.24 }}
                        className="flex flex-col sm:flex-row gap-3 mb-16"
                    >
                        <button
                            onClick={scrollToCases}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-pine-700 text-white font-semibold rounded-md hover:bg-pine-800 transition-colors"
                        >
                            {t.hero.cta1}
                            <ArrowDown size={17} />
                        </button>
                        <button
                            onClick={() => generateCV(language)}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-pine-800 font-semibold rounded-md border border-pine-300 hover:border-pine-600 hover:bg-pine-50 transition-colors"
                        >
                            <Download size={17} />
                            {t.hero.cta2}
                        </button>
                    </motion.div>
                </div>

                {/* Telemetria verificada */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.34 }}
                    className="border-t border-pine-200 pt-8"
                >
                    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                        {t.hero.metrics.map((metric) => (
                            <div key={metric.label}>
                                <dd className="font-mono text-3xl sm:text-4xl font-semibold text-ink mb-1">
                                    {metric.value}
                                </dd>
                                <dt className="text-sm text-ink-faint">{metric.label}</dt>
                            </div>
                        ))}
                    </dl>
                    <p className="font-mono text-xs text-ink-faint mt-8">
                        ✓ {t.hero.footnote}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
