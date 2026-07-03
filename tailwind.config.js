/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Papel clínico — fundo claro com leve tom verde
                paper: '#F6F8F7',
                card: '#FFFFFF',
                // Tinta — verde-negro profundo para texto
                ink: {
                    DEFAULT: '#132723',
                    soft: '#3D5450',
                    faint: '#6B807C',
                },
                // Pine — verde clínico, cor primária da marca
                pine: {
                    50: '#EDF5F2',
                    100: '#D5E8E2',
                    200: '#A8D1C5',
                    300: '#72B3A2',
                    400: '#3E937F',
                    500: '#1E7A64',
                    600: '#12695B',
                    700: '#0F5449',
                    800: '#0D423A',
                    900: '#0B332D',
                    950: '#071F1B',
                },
                // Live — verde de status "em produção"
                live: '#16A34A',
                // Signal — âmbar para status "pré-lançamento" e destaques pontuais
                signal: {
                    DEFAULT: '#B45309',
                    soft: '#FDF2E3',
                },
                // Seção escura ("casa de máquinas")
                engine: {
                    DEFAULT: '#0C1F1B',
                    soft: '#122B26',
                    line: '#1E3B34',
                    text: '#D9E5E1',
                    faint: '#8AA39C',
                },
            },
            fontFamily: {
                display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
                sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
            },
            maxWidth: {
                'content': '72rem',
            },
        },
    },
    plugins: [],
}
