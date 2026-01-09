import { motion } from 'framer-motion'
import { ArrowDown, Users, Code2, Building2, Sparkles, Award } from 'lucide-react'

const metrics = [
    { icon: Users, value: '300+', label: 'Pacientes em Produção' },
    { icon: Code2, value: '426K+', label: 'Linhas de Código' },
    { icon: Building2, value: '4', label: 'Clínicas Ativas' },
    { icon: Award, value: '9+', label: 'Anos em Gestão' }
]

export default function Hero() {
    const handleScrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleScrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-white to-primary-50" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-200/30 via-transparent to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-200/30 via-transparent to-transparent blur-3xl" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full mb-6"
                    >
                        <Sparkles size={16} className="text-primary-500" />
                        <span className="text-sm font-medium text-primary-700">
                            Disponível para novos projetos
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-surface-900 mb-6"
                    >
                        Gabriel Gomes
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
                    >
                        <span className="text-gradient">Engenheiro de Software</span>
                        <span className="text-surface-400 mx-3">|</span>
                        <span className="text-surface-600">Especialista em IA</span>
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg sm:text-xl text-surface-500 max-w-2xl mx-auto mb-10"
                    >
                        Transformo ideias em produtos digitais completos.
                        <br className="hidden sm:block" />
                        Do conceito à produção, <span className="text-primary-600 font-semibold">100% solo</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <button
                            onClick={handleScrollToProjects}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-bold text-lg rounded-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
                        >
                            Ver Projetos
                        </button>
                        <button
                            onClick={handleScrollToContact}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-surface-700 font-bold text-lg rounded-2xl border-2 border-surface-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
                        >
                            Entrar em Contato
                        </button>
                    </motion.div>

                    {/* Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-surface-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                        <metric.icon size={20} />
                                    </div>
                                    <div className="text-2xl font-extrabold text-surface-900 mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs font-medium text-surface-500">
                                        {metric.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex flex-col items-center gap-2 text-surface-400 hover:text-primary-500 transition-colors"
                    >
                        <span className="text-sm font-medium">Scroll</span>
                        <ArrowDown size={20} className="animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
