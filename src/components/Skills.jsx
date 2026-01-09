import { motion } from 'framer-motion'
import { Monitor, Server, Database, Brain, Cloud, Layers } from 'lucide-react'
import { skillCategories } from '../data/skills'
import { useLanguage } from '../context/LanguageContext'

const iconMap = {
    Monitor,
    Server,
    Database,
    Brain,
    Cloud,
    Layers
}

function SkillBar({ name, level, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-surface-700 group-hover:text-primary-600 transition-colors">
                    {name}
                </span>
                <span className="text-xs font-semibold text-surface-400">
                    {level}%
                </span>
            </div>
            <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                />
            </div>
        </motion.div>
    )
}

function SkillCard({ category, index }) {
    const Icon = iconMap[category.icon]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl p-6 border border-surface-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-surface-900">{category.title}</h3>
            </div>

            {/* Skills */}
            <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={index * 0.1 + skillIndex * 0.05}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default function Skills() {
    const { t } = useLanguage()

    return (
        <section id="skills" className="section-padding bg-surface-50">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-semibold rounded-full text-sm mb-4">
                        {t.skills.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
                        {t.skills.title}
                        <span className="text-gradient">{t.skills.titleHighlight}</span>
                    </h2>
                    <p className="text-lg text-surface-500">
                        {t.skills.description}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={category.title} category={category} index={index} />
                    ))}
                </div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        {t.skills.differentials}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.skills.softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                <h4 className="text-lg font-bold text-white mb-2">
                                    {skill.title}
                                </h4>
                                <p className="text-sm text-white/80">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
