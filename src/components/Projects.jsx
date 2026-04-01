import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Users, Building2, Code2, CheckCircle2, Star, X, Lock, Layers, Shield, FileText } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const iconMap = { Users, Building2, Code2, Layers, Shield, FileText }

// Base project data (structure only, no text)
const projectsBase = {
    abaplay: {
        id: 'abaplay',
        title: 'ABAplay',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'OpenAI', 'Tailwind'],
        status: 'production',
        metrics: [
            { icon: 'Users', value: '300+', labelKey: 'patients', gradient: 'from-primary-50 to-purple-50', iconColor: 'text-primary-500' },
            { icon: 'Building2', value: '4', labelKey: 'clinics', gradient: 'from-purple-50 to-pink-50', iconColor: 'text-purple-500' },
            { icon: 'Code2', value: '145K+', labelKey: 'lines', gradient: 'from-surface-50 to-primary-50', iconColor: 'text-primary-600', colSpan: 2 }
        ],
        links: { demo: 'https://www.abaplay.app.br/info', info: 'https://www.abaplay.app.br/info' }
    },
    lumnipsi: {
        id: 'lumnipsi',
        title: 'LumniPsi',
        technologies: ['TypeScript', 'React', 'Express', 'Prisma', 'PostgreSQL', 'LangChain', 'Tailwind'],
        status: 'production',
        metrics: [
            { icon: 'Layers', value: '15+', labelKey: 'modules', gradient: 'from-emerald-50 to-teal-50', iconColor: 'text-emerald-500' },
            { icon: 'Shield', value: '8', labelKey: 'roles', gradient: 'from-teal-50 to-cyan-50', iconColor: 'text-teal-500' },
            { icon: 'FileText', value: '8', labelKey: 'docTypes', gradient: 'from-surface-50 to-emerald-50', iconColor: 'text-emerald-600', colSpan: 2 }
        ],
        links: {}
    },
    outreach: {
        id: 'outreach',
        title: 'ABAplay Outreach',
        technologies: ['Python', 'Flask', 'React', 'TypeScript', 'Dash/Plotly', 'Ollama', 'Claude Haiku', 'Meta API', 'Resend'],
        status: 'production',
        links: {}
    },
    'operadora-hunter': {
        id: 'operadora-hunter',
        title: 'OperadoraHunter',
        technologies: ['Python', 'DuckDB', 'Polars', 'Prefect', 'Playwright', 'Ollama', 'Dash/Plotly', 'Pydeck'],
        status: 'production',
        links: {}
    },
    'lead-finder': {
        id: 'lead-finder',
        title: 'ABAplay Lead Finder',
        technologies: ['Python', 'Playwright', 'Streamlit', 'Ollama', 'SQLite', 'aiohttp'],
        status: 'production',
        links: {}
    },
    'financas-ia': {
        id: 'financas-ia',
        title: 'Finanças IA',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI GPT-4o', 'Tailwind'],
        status: 'production',
        links: { demo: 'https://financas-ia-chi.vercel.app/' }
    },
    'psicoia-pro': {
        id: 'psicoia-pro',
        title: 'PsicoIA Pro',
        technologies: ['React', 'Node.js', 'OpenAI GPT-4', 'DOCX Export'],
        status: 'demo',
        links: { github: 'https://github.com/GabrielGomesDevBr/psicoia_pro' }
    }
}

function TechBadge({ tech }) {
    return (
        <span className="inline-flex items-center px-3 py-1 bg-surface-100 text-surface-600 text-xs font-medium rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors">
            {tech}
        </span>
    )
}

function StatusBadge({ status, t }) {
    const styles = {
        production: 'bg-green-100 text-green-700 border-green-200',
        demo: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    }

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${styles[status]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status === 'production' ? 'bg-green-500' : 'bg-yellow-500'}`} />
            {t.projects.status[status]}
        </span>
    )
}

function PrivateBadge({ t }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-100 text-surface-500 text-sm font-medium rounded-lg">
            <Lock size={14} />
            {t.projects.privateCode}
        </span>
    )
}

function FeaturedProjectCard({ project, projectText, t, gradient = 'from-primary-500 to-purple-600' }) {
    const hasLinks = project.links.demo || project.links.info

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-1 shadow-2xl mb-12`}
        >
            <div className="bg-white rounded-[22px] p-6 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <div className="flex items-center gap-2 text-primary-600">
                                <Star size={20} fill="currentColor" />
                                <span className="font-bold text-sm">{t.projects.featuredProject}</span>
                            </div>
                            <StatusBadge status={project.status} t={t} />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-semibold mb-4">
                            {projectText.subtitle}
                        </p>
                        <p className="text-surface-600 mb-6 leading-relaxed">
                            {projectText.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                            {projectText.highlights.slice(0, 4).map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-surface-600">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                                <TechBadge key={tech} tech={tech} />
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            {hasLinks ? (
                                <>
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                                        >
                                            <ExternalLink size={18} />
                                            {t.projects.viewApp}
                                        </a>
                                    )}
                                    {project.links.info && (
                                        <a
                                            href={project.links.info}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-100 text-surface-700 font-bold rounded-xl hover:bg-surface-200 transition-colors"
                                        >
                                            {t.projects.learnMore}
                                        </a>
                                    )}
                                </>
                            ) : (
                                <span className="inline-flex items-center gap-2 px-6 py-3 bg-surface-100 text-surface-500 font-semibold rounded-xl">
                                    <Lock size={18} />
                                    {t.projects.privateCode}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((metric, idx) => {
                            const Icon = iconMap[metric.icon]
                            return (
                                <div
                                    key={idx}
                                    className={`${metric.colSpan === 2 ? 'col-span-2' : ''} bg-gradient-to-br ${metric.gradient} rounded-2xl p-6 text-center`}
                                >
                                    <Icon size={32} className={`${metric.iconColor} mx-auto mb-3`} />
                                    <div className="text-3xl font-extrabold text-surface-900">{metric.value}</div>
                                    <div className="text-sm text-surface-500 font-medium">{t.projects.metrics[metric.labelKey]}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function ProjectModal({ project, projectText, t, onClose }) {
    const hasLinks = project.links.demo || project.links.github

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-surface-100 hover:bg-surface-200 rounded-full transition-colors"
                >
                    <X size={20} className="text-surface-600" />
                </button>

                {/* Content */}
                <div className="p-8 overflow-y-auto max-h-[90vh]">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4 pr-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-surface-900 mb-1">
                                {project.title}
                            </h3>
                            <p className="text-lg text-primary-600 font-semibold">
                                {projectText.subtitle}
                            </p>
                        </div>
                        <StatusBadge status={project.status} t={t} />
                    </div>

                    {/* Full Description */}
                    <p className="text-surface-600 mb-6 leading-relaxed">
                        {projectText.description}
                    </p>

                    {/* All Highlights */}
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-surface-900 uppercase tracking-wider mb-3">
                            Highlights
                        </h4>
                        <div className="space-y-2">
                            {projectText.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-surface-600">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* All Technologies */}
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-surface-900 uppercase tracking-wider mb-3">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <TechBadge key={tech} tech={tech} />
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-surface-100">
                        {hasLinks ? (
                            <>
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                                    >
                                        <ExternalLink size={18} />
                                        {t.projects.demo}
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-surface-200 text-surface-700 font-bold rounded-xl hover:bg-surface-300 transition-colors"
                                    >
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                )}
                            </>
                        ) : (
                            <span className="inline-flex items-center gap-2 px-6 py-3 bg-surface-100 text-surface-500 font-medium rounded-xl">
                                <Lock size={18} />
                                {t.projects.privateCode}
                            </span>
                        )}
                        <button
                            onClick={onClose}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-100 text-surface-600 font-semibold rounded-xl hover:bg-surface-200 transition-colors ml-auto"
                        >
                            {t.projects.close}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function ProjectCard({ project, projectText, t, index, onClick }) {
    const hasLinks = project.links.demo || project.links.github

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl border border-surface-200 overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={onClick}
        >
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <h3 className="text-xl font-bold text-surface-900 group-hover:text-primary-600 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-primary-600 font-medium">
                            {projectText.subtitle}
                        </p>
                    </div>
                    <StatusBadge status={project.status} t={t} />
                </div>

                <p className="text-surface-600 text-sm mb-4 line-clamp-2">
                    {projectText.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                    {projectText.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-surface-500">{highlight}</span>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 text-xs text-surface-400 font-medium">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-surface-50 border-t border-surface-100 flex items-center justify-between">
                <div className="flex gap-2">
                    {hasLinks ? (
                        <>
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={14} />
                                    {t.projects.demo}
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-200 text-surface-700 text-sm font-semibold rounded-lg hover:bg-surface-300 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={14} />
                                    GitHub
                                </a>
                            )}
                        </>
                    ) : (
                        <PrivateBadge t={t} />
                    )}
                </div>
                <span className="text-xs text-primary-500 font-medium group-hover:text-primary-600">
                    {t.projects.seeDetails} →
                </span>
            </div>
        </motion.div>
    )
}


export default function Projects() {
    const { t, tProjects } = useLanguage()
    const [selectedProject, setSelectedProject] = useState(null)

    const featuredConfigs = [
        { project: projectsBase.abaplay, gradient: 'from-primary-500 to-purple-600' },
        { project: projectsBase.lumnipsi, gradient: 'from-emerald-500 to-teal-600' }
    ]

    const aiProjects = [
        projectsBase.outreach,
        projectsBase['operadora-hunter'],
        projectsBase['lead-finder']
    ]

    const otherProjects = [
        projectsBase['financas-ia'],
        projectsBase['psicoia-pro']
    ]

    const handleCloseModal = () => setSelectedProject(null)

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-semibold rounded-full text-sm mb-4">
                        {t.projects.badge}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
                        {t.projects.title}
                        <span className="text-gradient">{t.projects.titleHighlight}</span>
                    </h2>
                    <p className="text-lg text-surface-500">
                        {t.projects.description}
                    </p>
                </motion.div>

                {/* Featured Projects */}
                {featuredConfigs.map(({ project, gradient }) => (
                    <FeaturedProjectCard
                        key={project.id}
                        project={project}
                        projectText={tProjects[project.id]}
                        t={t}
                        gradient={gradient}
                    />
                ))}

                {/* AI Agents Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 mt-4"
                >
                    <span className="inline-block px-4 py-2 bg-amber-50 text-amber-700 font-semibold rounded-full text-sm mb-3">
                        {t.projects.aiSectionTitle}
                    </span>
                    <p className="text-surface-500 max-w-2xl mx-auto">
                        {t.projects.aiSectionDescription}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {aiProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            projectText={tProjects[project.id]}
                            t={t}
                            index={index}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* Other Projects */}
                <div className="grid md:grid-cols-2 gap-6">
                    {otherProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            projectText={tProjects[project.id]}
                            t={t}
                            index={index + aiProjects.length}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        projectText={tProjects[selectedProject.id]}
                        t={t}
                        onClose={handleCloseModal}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}
