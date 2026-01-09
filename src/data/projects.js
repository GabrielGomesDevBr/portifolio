export const projects = [
    {
        id: 'abaplay',
        title: 'ABAplay',
        subtitle: 'Plataforma SaaS Multi-tenant',
        description: 'Sistema completo de gestão para clínicas de terapia infantil (ABA, fono, TO). Desenvolvido 100% solo, atualmente em produção com +300 pacientes e 4 clínicas ativas.',
        highlights: [
            'Arquitetura multi-tenant com isolamento por clinic_id',
            'WebSocket para chat em tempo real (terapeuta-pais)',
            'Sistema de prompting ABA metodologicamente preciso',
            'Geração de relatórios profissionais em PDF',
            '68+ migrações SQL versionadas',
            '104.000+ linhas de código'
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'OpenAI', 'Tailwind'],
        metrics: {
            patients: '300+',
            clinics: '4',
            lines: '104K+'
        },
        links: {
            demo: 'https://abaplay.app.br',
            info: 'https://abaplay.app.br/info',
            github: null // Private repo
        },
        featured: true,
        status: 'production',
        image: '/projects/abaplay.png'
    },
    {
        id: 'financas-ia',
        title: 'Finanças IA',
        subtitle: 'Assistente Financeiro com IA',
        description: 'Aplicação que permite registrar gastos via conversa natural com IA. Utiliza GPT-4o para interpretar comandos e categorizar transações automaticamente.',
        highlights: [
            'Chat com IA para registro de gastos',
            'Gestão familiar compartilhada',
            'Row Level Security (RLS)',
            'PWA instalável'
        ],
        technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind'],
        links: {
            demo: 'https://financas-ia-chi.vercel.app',
            github: 'https://github.com/GabrielGomesDevBr/financas_ia'
        },
        featured: false,
        status: 'production',
        image: '/projects/financas.png'
    },
    {
        id: 'mural-bicos',
        title: 'Mural de Bicos',
        subtitle: 'Marketplace de Serviços',
        description: 'Plataforma que conecta trabalhadores autônomos a contratantes. Filtros por categoria, valor e localização com contato direto via WhatsApp.',
        highlights: [
            'Filtros avançados por categoria/valor/cidade',
            'Contato via WhatsApp integrado',
            'Real-time com Supabase'
        ],
        technologies: ['React', 'Vite', 'Supabase', 'Tailwind'],
        links: {
            github: 'https://github.com/GabrielGomesDevBr/mural_de_bicos'
        },
        featured: false,
        status: 'production',
        image: '/projects/mural.png'
    },
    {
        id: 'prompt-agent',
        title: 'Prompt Agent',
        subtitle: 'Agente de Engenharia de Prompt',
        description: 'Ferramenta com IA para auxiliar na criação de prompts eficientes. Implementa fallback inteligente (API → base local), validação de respostas e métricas de precisão.',
        highlights: [
            'Modo LLM/Local com fallback inteligente',
            'Armazenamento de interações em SQLite',
            'Métricas de precisão de respostas'
        ],
        technologies: ['Python', 'Streamlit', 'OpenAI', 'SQLite', 'LangChain'],
        links: {
            github: 'https://github.com/GabrielGomesDevBr/prompt_agent'
        },
        featured: false,
        status: 'demo',
        image: '/projects/prompt.png'
    },
    {
        id: 'psicoia-pro',
        title: 'PsicoIA Pro',
        subtitle: 'Gerador de Relatórios com IA',
        description: 'Sistema que auxilia psicólogos na criação de 17 tipos de relatórios profissionais. Processo guiado com geração automática via GPT-4.',
        highlights: [
            '17 tipos de relatórios disponíveis',
            'Exportação para DOCX',
            'Processo passo-a-passo guiado'
        ],
        technologies: ['React', 'Node.js', 'Express', 'OpenAI'],
        links: {
            github: 'https://github.com/GabrielGomesDevBr/gerador-relatorio'
        },
        featured: false,
        status: 'demo',
        image: '/projects/psicoia.png'
    },
    {
        id: 'llm-local',
        title: 'Interface LLM Local',
        subtitle: 'Chat com LLMs via Ollama',
        description: 'Interface para interagir com LLMs rodando localmente via Ollama. Suporta streaming, histórico de conversas e upload de arquivos para contexto.',
        highlights: [
            'Streaming de respostas em tempo real',
            'Upload de PDF/DOCX para contexto',
            'Histórico de conversas persistente'
        ],
        technologies: ['Python', 'Streamlit', 'Ollama', 'LangChain'],
        links: {
            github: 'https://github.com/GabrielGomesDevBr/interface_llm_local'
        },
        featured: false,
        status: 'demo',
        image: '/projects/llm.png'
    },
    {
        id: 'cliniagenda',
        title: 'CliniAgenda',
        subtitle: 'Sistema de Agendamento',
        description: 'Aplicação de agendamento com foco em segurança enterprise. Implementa JWT, rate limiting, prepared statements e validação rigorosa de dados.',
        highlights: [
            'Autenticação JWT com bcrypt',
            'Rate limiting e Helmet',
            'Prepared statements anti-SQL injection'
        ],
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Tailwind'],
        links: {
            github: 'https://github.com/GabrielGomesDevBr/agendamento'
        },
        featured: false,
        status: 'demo',
        image: '/projects/agenda.png'
    }
];

export const featuredProject = projects.find(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
