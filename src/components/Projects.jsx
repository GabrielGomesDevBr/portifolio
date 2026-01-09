import { motion } from 'framer-motion'
import { ExternalLink, Github, Users, Building2, Code2, CheckCircle2, Star } from 'lucide-react'
import { featuredProject, otherProjects } from '../data/projects'

function TechBadge({ tech }) {
    return (
        <span className="inline-flex items-center px-3 py-1 bg-surface-100 text-surface-600 text-xs font-medium rounded-full hover:bg-primary-50 hover:text-primary-600 transition-colors">
            {tech}
        </span>
    )
}

function StatusBadge({ status }) {
    const styles = {
        production: 'bg-green-100 text-green-700 border-green-200',
        demo: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    }
    const labels = {
        production: 'Em Produção',
        demo: 'Demo'
    }

    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${styles[status]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status === 'production' ? 'bg-green-500' : 'bg-yellow-500'}`} />
            {labels[status]}
        </span>
    )
}

function FeaturedProjectCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-1 shadow-2xl mb-12"
        >
            <div className="bg-white rounded-[22px] p-6 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <div className="flex items-center gap-2 text-primary-600">
                                <Star size={20} fill="currentColor" />
                                <span className="font-bold text-sm">Projeto Principal</span>
                            </div>
                            <StatusBadge status={project.status} />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-extrabold text-surface-900 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-semibold mb-4">
                            {project.subtitle}
                        </p>
                        <p className="text-surface-600 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                            {project.highlights.slice(0, 4).map((highlight, index) => (
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
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                                >
                                    <ExternalLink size={18} />
                                    Ver Aplicação
                                </a>
                            )}
                            {project.links.info && (
                                <a
                                    href={project.links.info}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-surface-100 text-surface-700 font-bold rounded-xl hover:bg-surface-200 transition-colors"
                                >
                                    Saiba Mais
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-6 text-center">
                            <Users size={32} className="text-primary-500 mx-auto mb-3" />
                            <div className="text-3xl font-extrabold text-surface-900">{project.metrics.patients}</div>
                            <div className="text-sm text-surface-500 font-medium">Pacientes</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                            <Building2 size={32} className="text-purple-500 mx-auto mb-3" />
                            <div className="text-3xl font-extrabold text-surface-900">{project.metrics.clinics}</div>
                            <div className="text-sm text-surface-500 font-medium">Clínicas</div>
                        </div>
                        <div className="col-span-2 bg-gradient-to-br from-surface-50 to-primary-50 rounded-2xl p-6 text-center">
                            <Code2 size={32} className="text-primary-600 mx-auto mb-3" />
                            <div className="text-3xl font-extrabold text-surface-900">{project.metrics.lines}</div>
                            <div className="text-sm text-surface-500 font-medium">Linhas de Código</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl border border-surface-200 overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all duration-300"
        >
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <h3 className="text-xl font-bold text-surface-900 group-hover:text-primary-600 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-primary-600 font-medium">
                            {project.subtitle}
                        </p>
                    </div>
                    <StatusBadge status={project.status} />
                </div>

                <p className="text-surface-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
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
                    {project.links.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            <ExternalLink size={14} />
                            Demo
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-200 text-surface-700 text-sm font-semibold rounded-lg hover:bg-surface-300 transition-colors"
                        >
                            <Github size={14} />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
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
                        Portfólio
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
                        Projetos
                        <span className="text-gradient"> Destacados</span>
                    </h2>
                    <p className="text-lg text-surface-500">
                        Aplicações completas desenvolvidas do zero, algumas já em produção com usuários reais.
                    </p>
                </motion.div>

                {/* Featured Project */}
                <FeaturedProjectCard project={featuredProject} />

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
