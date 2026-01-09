import { Heart, Code2 } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-surface-900 text-white py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">G</span>
                        </div>
                        <div>
                            <span className="font-bold text-lg">Gabriel Gomes</span>
                            <p className="text-sm text-surface-400">Desenvolvedor Full-Stack</p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm text-surface-400">
                        <a
                            href="https://github.com/GabrielGomesDevBr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/gabrielgomesdevbr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:gabrielgomesdevbr@gmail.com"
                            className="hover:text-white transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-surface-800 my-8" />

                {/* Copyright */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-surface-400">
                    <p>
                        © {currentYear} Gabriel Gomes. Todos os direitos reservados.
                    </p>
                    <p className="flex items-center gap-2">
                        Feito com
                        <Heart size={16} className="text-red-500" fill="currentColor" />
                        usando
                        <Code2 size={16} className="text-primary-400" />
                        React + Tailwind
                    </p>
                </div>
            </div>
        </footer>
    )
}
