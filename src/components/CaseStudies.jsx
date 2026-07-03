import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import StatusLine from './StatusLine'

const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' }
}

function CaseRail({ study }) {
    return (
        <aside className="lg:sticky lg:top-24 space-y-8">
            <dl className="grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5">
                {study.metrics.map((metric) => (
                    <div key={metric.label} className="border-l-2 border-pine-200 pl-4">
                        <dd className="font-mono text-2xl font-semibold text-ink">{metric.value}</dd>
                        <dt className="text-sm text-ink-faint">{metric.label}</dt>
                    </div>
                ))}
            </dl>

            <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                    <span
                        key={tech}
                        className="font-mono text-xs text-pine-800 bg-pine-50 border border-pine-100 rounded px-2 py-1"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {study.link && (
                <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-pine-700 font-semibold hover:text-pine-900 transition-colors"
                >
                    {study.linkLabel}
                    <ArrowUpRight size={17} />
                </a>
            )}
        </aside>
    )
}

function CaseStudy({ study, children }) {
    return (
        <motion.article {...reveal} transition={{ duration: 0.5 }} className="pt-12">
            <header className="border-t-2 border-ink pt-6 mb-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
                    <div className="flex items-baseline gap-4">
                        <span className="eyebrow">{study.caseLabel}</span>
                        <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink">{study.name}</h3>
                    </div>
                    <StatusLine type={study.statusType}>{study.statusLine}</StatusLine>
                </div>
                <p className="text-lg text-ink-soft max-w-2xl">{study.tagline}</p>
            </header>

            {study.screenshots && <ScreenshotStrip screenshots={study.screenshots} />}

            <div className="grid lg:grid-cols-[16rem_1fr] gap-10 lg:gap-16">
                <CaseRail study={study} />
                <div className="space-y-10 max-w-2xl">{children}</div>
            </div>
        </motion.article>
    )
}

function ScreenshotStrip({ screenshots }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {screenshots.map((shot) => (
                <figure key={shot.file}>
                    {/* bg igual ao fundo dos mockups (#282828) para fundir sem emenda */}
                    <div className="h-72 sm:h-80 lg:h-96 rounded-lg overflow-hidden bg-[#282828]">
                        <img
                            src={shot.file}
                            alt={shot.caption}
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <figcaption className="font-mono text-xs text-ink-faint mt-2.5">
                        {shot.caption}
                    </figcaption>
                </figure>
            ))}
        </div>
    )
}

function TextBlock({ title, text }) {
    return (
        <div>
            <h4 className="font-display font-semibold text-xl text-ink mb-3">{title}</h4>
            <p className="text-ink-soft">{text}</p>
        </div>
    )
}

export default function CaseStudies() {
    const { t } = useLanguage()
    const { abaplay, luminipsi } = t.cases

    return (
        <section id="cases" className="section-padding bg-card border-y border-pine-100">
            <div className="container-custom">
                <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-3xl mb-8">
                    <span className="eyebrow">{t.cases.eyebrow}</span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 mb-4">
                        {t.cases.title}
                    </h2>
                    <p className="text-lg text-ink-soft">{t.cases.intro}</p>
                </motion.div>

                {/* Caso 01 — ABAplay */}
                <CaseStudy study={abaplay}>
                    {abaplay.sections.slice(0, 2).map((section) => (
                        <TextBlock key={section.title} title={section.title} text={section.text} />
                    ))}

                    <div>
                        <h4 className="font-display font-semibold text-xl text-ink mb-4">
                            {abaplay.decisionsTitle}
                        </h4>
                        <ul className="space-y-3">
                            {abaplay.decisions.map((decision) => (
                                <li key={decision} className="flex gap-3 text-ink-soft">
                                    <span className="font-mono text-pine-600 select-none" aria-hidden="true">▸</span>
                                    <span>{decision}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-pine-50 border border-pine-100 rounded-lg p-6">
                        <TextBlock
                            title={abaplay.sections[2].title}
                            text={abaplay.sections[2].text}
                        />
                    </div>
                </CaseStudy>

                {/* Caso 02 — LuminiPsi */}
                <div className="mt-20">
                    <CaseStudy study={luminipsi}>
                        {luminipsi.sections.map((section) => (
                            <TextBlock key={section.title} title={section.title} text={section.text} />
                        ))}

                        <ul className="space-y-3">
                            {luminipsi.evolution.map((item) => (
                                <li
                                    key={item.from}
                                    className="grid sm:grid-cols-[10rem_auto_1fr] items-baseline gap-x-3 gap-y-0.5 border-b border-pine-100 pb-3"
                                >
                                    <span className="font-mono text-sm text-ink-faint line-through decoration-ink-faint/50">
                                        {item.from}
                                    </span>
                                    <ArrowRight size={14} className="hidden sm:block text-pine-500 translate-y-0.5" aria-hidden="true" />
                                    <span className="text-ink font-medium">{item.to}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-signal-soft border border-signal/20 rounded-lg p-6">
                            <div className="flex items-center gap-2.5 mb-3">
                                <ShieldCheck size={20} className="text-signal" aria-hidden="true" />
                                <h4 className="font-display font-semibold text-xl text-ink">{luminipsi.cfpTitle}</h4>
                            </div>
                            <p className="text-ink-soft">{luminipsi.cfpText}</p>
                        </div>
                    </CaseStudy>
                </div>
            </div>
        </section>
    )
}
