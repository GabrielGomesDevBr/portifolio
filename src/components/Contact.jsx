import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, Send, MapPin, MessageCircle, Phone } from 'lucide-react'
import { generateCV } from '../utils/generateCV'

const contactLinks = [
    {
        icon: Mail,
        label: 'Email',
        value: 'gabrielgomesdevbr@gmail.com',
        href: 'mailto:gabrielgomesdevbr@gmail.com',
        color: 'from-red-500 to-orange-500'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: '/in/gabrielgomesdevbr',
        href: 'https://linkedin.com/in/gabrielgomesdevbr',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'GabrielGomesDevBr',
        href: 'https://github.com/GabrielGomesDevBr',
        color: 'from-gray-700 to-gray-900'
    },
    {
        icon: Phone,
        label: 'WhatsApp',
        value: '(11) 94602-0901',
        href: 'https://wa.me/5511946020901?text=Olá Gabriel! Vi seu portfólio e gostaria de conversar.',
        color: 'from-green-500 to-green-600'
    }
]

export default function Contact() {
    const handleDownloadCV = () => {
        generateCV()
    }

    return (
        <section id="contact" className="section-padding bg-surface-50">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-semibold rounded-full text-sm mb-4">
                            Contato
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
                            Vamos
                            <span className="text-gradient"> trabalhar juntos?</span>
                        </h2>
                        <p className="text-lg text-surface-500 max-w-2xl mx-auto">
                            Estou disponível para novos projetos, parcerias ou oportunidades de trabalho.
                            Entre em contato e vamos conversar!
                        </p>
                    </motion.div>

                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
                    >
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl p-5 border border-surface-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className="relative">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                                        <link.icon size={24} />
                                    </div>
                                    <h3 className="text-sm font-bold text-surface-900 mb-1">
                                        {link.label}
                                    </h3>
                                    <p className="text-xs text-surface-500 group-hover:text-primary-600 transition-colors truncate">
                                        {link.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center"
                    >
                        <div className="max-w-2xl mx-auto">
                            <MessageCircle size={48} className="text-white/80 mx-auto mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Pronto para o próximo passo?
                            </h3>
                            <p className="text-white/80 mb-8 text-lg">
                                Baixe meu currículo completo em PDF ou entre em contato diretamente.
                                Retorno em até 24 horas!
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                {/* CV Download Button */}
                                <button
                                    onClick={handleDownloadCV}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                                >
                                    <Download size={22} />
                                    Download Currículo PDF
                                </button>

                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/5511946020901?text=Olá Gabriel! Vi seu portfólio e gostaria de conversar."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-2xl hover:bg-green-600 hover:shadow-lg transition-all duration-300"
                                >
                                    <Phone size={22} />
                                    WhatsApp
                                </a>
                            </div>

                            {/* Email alternative */}
                            <div className="mt-6">
                                <a
                                    href="mailto:gabrielgomesdevbr@gmail.com"
                                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                                >
                                    <Send size={16} />
                                    <span className="text-sm">ou envie um email</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 text-surface-400 mt-8"
                    >
                        <MapPin size={18} />
                        <span>São Paulo, SP • Disponível para trabalho remoto</span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
