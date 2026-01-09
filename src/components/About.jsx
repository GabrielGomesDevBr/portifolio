import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase, Award, GraduationCap } from 'lucide-react'

const highlights = [
    { icon: Briefcase, text: 'Prompt Engineer na Alignerr & Outlier' },
    { icon: Award, text: 'Certificações em LangChain & IA' },
    { icon: GraduationCap, text: 'Eng. de Software - Cruzeiro do Sul' }
]

export default function About() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image/Avatar Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto lg:mx-0">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary-400 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
                            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-20 blur-2xl" />

                            {/* Photo Card */}
                            <div className="relative bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
                                <div className="bg-white rounded-[22px] p-6">
                                    <div className="flex flex-col items-center">
                                        {/* Profile Photo */}
                                        <div className="w-44 h-44 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-primary-100">
                                            <img
                                                src="/profile.jpg"
                                                alt="Gabriel Gomes"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <h3 className="text-2xl font-bold text-surface-900 mb-1">
                                            Gabriel Gomes
                                        </h3>
                                        <p className="text-primary-600 font-semibold mb-4">
                                            Engenheiro de Software
                                        </p>

                                        {/* Quick Info */}
                                        <div className="w-full space-y-3">
                                            <div className="flex items-center gap-3 text-surface-600">
                                                <MapPin size={18} className="text-primary-500" />
                                                <span>São Paulo, SP</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-surface-600">
                                                <Calendar size={18} className="text-primary-500" />
                                                <span>+2 anos de experiência</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-surface-600">
                                                <Briefcase size={18} className="text-primary-500" />
                                                <span>Disponível para projetos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Top right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute -right-4 top-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-surface-100"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-semibold text-surface-700">Produtos em Produção</span>
                                </div>
                            </motion.div>

                            {/* Experience Badge - Bottom right (FIXED position) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="absolute -right-4 -bottom-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl px-4 py-3 shadow-xl"
                            >
                                <div className="text-white text-center">
                                    <span className="text-xl font-bold">9+</span>
                                    <span className="text-sm ml-1">anos em gestão</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-semibold rounded-full text-sm mb-4">
                            Sobre Mim
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
                            Desenvolvendo soluções
                            <span className="text-gradient"> do zero à produção</span>
                        </h2>

                        <div className="space-y-4 text-lg text-surface-600 leading-relaxed">
                            <p>
                                <strong className="text-surface-900">Engenheiro de Software</strong> com especialização em
                                <strong className="text-primary-600"> Inteligência Artificial</strong> e Ciência de Dados.
                                Experiência na criação de produtos digitais do conceito ao desenvolvimento, com foco em
                                resolver problemas complexos através de soluções baseadas em LLMs.
                            </p>

                            <p>
                                Atuei como <strong className="text-surface-900">Prompt Engineer</strong> na
                                <strong className="text-primary-600"> Alignerr</strong> e <strong className="text-primary-600">Outlier</strong>,
                                otimizando modelos de linguagem e desenvolvendo sistemas conversacionais inteligentes.
                                Meu projeto principal, <strong className="text-primary-600">ABAplay</strong>, é uma plataforma
                                SaaS que atende <strong className="text-surface-900">300+ pacientes</strong> em
                                <strong className="text-surface-900"> 4 clínicas</strong>.
                            </p>

                            <p>
                                Possuo background de <strong className="text-surface-900">9 anos em gestão</strong> como
                                Diretor Administrativo, combinando visão de negócio com habilidades técnicas para
                                entregar produtos inovadores.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 gap-3 mt-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 bg-surface-50 rounded-xl px-4 py-3"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                                        <item.icon size={20} className="text-primary-600" />
                                    </div>
                                    <span className="font-medium text-surface-700">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-surface-200">
                            <div>
                                <div className="text-3xl font-extrabold text-gradient">2+</div>
                                <div className="text-sm text-surface-500 font-medium">Anos Dev</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-gradient">13+</div>
                                <div className="text-sm text-surface-500 font-medium">Projetos</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-gradient">100%</div>
                                <div className="text-sm text-surface-500 font-medium">Solo Dev</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
