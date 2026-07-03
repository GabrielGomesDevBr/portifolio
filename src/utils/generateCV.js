import jsPDF from 'jspdf'

// Números citados verificados no código-fonte dos projetos em julho/2026.
const cvData = {
    'pt-BR': {
        filename: 'Gabriel_Gomes_Curriculo.pdf',
        header: {
            name: 'Gabriel Gomes',
            title: 'Engenheiro de Produto Full-Stack | SaaS & IA Aplicada',
            email: 'gabrielgomesdevbr@gmail.com',
            phone: '(11) 94602-0901',
            location: 'São Paulo, SP',
            linkedin: 'linkedin.com/in/gabrielgomesdevbr',
            github: 'github.com/GabrielGomesDevBr'
        },
        sections: {
            summary: 'Resumo Profissional',
            experience: 'Experiência Profissional',
            skills: 'Competências Técnicas',
            certifications: 'Certificações',
            education: 'Formação Acadêmica'
        },
        summaryText: 'Engenheiro de produto full-stack: construo, lanço e opero sistemas SaaS de ponta a ponta — do modelo de dados ao funil de vendas. Criador do ABAplay, plataforma multi-tenant em produção com 4 clínicas pagantes e 300+ pacientes (180 mil linhas de código, 248 migrations), e do LuminiPsi, SaaS em TypeScript com pirâmide completa de testes e billing Stripe. Uso IA como alavanca de produtividade com responsabilidade integral sobre arquitetura, operação e suporte. Background de 9 anos como Diretor Administrativo: entendo o negócio que o software serve.',
        experience: [
            {
                company: 'ABAplay',
                role: 'Fundador & Engenheiro de Produto',
                period: '2023 – Presente',
                description: 'SaaS multi-tenant para clínicas de terapia infantil, em produção contínua desde 2025 com clientes pagantes. Responsável por produto, código, infraestrutura, vendas e suporte.',
                achievements: [
                    '4 clínicas pagantes e 300+ pacientes com acompanhamento clínico na plataforma',
                    '180 mil linhas de código, 484 commits em 13 meses, 248 migrations versionadas',
                    'Sistema multi-agente de IA (4 agentes especializados) com limites de custo por clínica e auditoria LGPD',
                    'Isolamento multi-tenant em toda query; uploads diretos a Cloudflare R2 com URLs pré-assinadas',
                    'Máquina de aquisição própria: descoberta de leads (Playwright + Ollama), qualificação com dados públicos ANS/CNES (score 0–100) e outreach via WhatsApp oficial + e-mail com 5 agentes LLM (178 testes unitários)'
                ]
            },
            {
                company: 'LuminiPsi',
                role: 'Fundador & Engenheiro de Produto',
                period: '2026 – Presente',
                description: 'SaaS de gestão clínica para psicólogos, com conformidade CFP/LGPD no centro do produto. Em fase final de QA para lançamento.',
                achievements: [
                    '64 mil linhas de TypeScript em monorepo; 24 módulos de API com validação Zod',
                    'Pirâmide de testes completa: unitários, integração (isolamento de tenant, RBAC, quotas) e e2e com Playwright',
                    'Billing Stripe com webhook idempotente, 4 planos e add-ons; RBAC com 8 papéis',
                    'Decisão de remover IA do conteúdo clínico por ética profissional — automação determinística e auditável'
                ]
            },
            {
                company: 'Alignerr · Outlier',
                role: 'Prompt Engineer',
                period: '2024',
                description: 'Avaliação e otimização de modelos de linguagem em escala para plataformas internacionais de treinamento de IA.',
                achievements: [
                    'Avaliação de qualidade de resposta, análise de edge cases e comportamentos inesperados',
                    'Criação de prompts otimizados e datasets de treinamento'
                ]
            },
            {
                company: 'Hope Construtora',
                role: 'Diretor Administrativo',
                period: '2015 – 2024',
                description: 'Nove anos liderando operações, equipes multidisciplinares, fornecedores e planejamento estratégico.',
                achievements: [
                    'Gestão de orçamento, contratos e processos ponta a ponta — a base da minha visão de negócio',
                    'Experiência direta com liderança de pessoas e resolução de conflitos operacionais'
                ]
            }
        ],
        skills: {
            'Linguagens': 'TypeScript, JavaScript, Python, SQL',
            'Frontend': 'React 18/19, Vite, Tailwind CSS, PWA',
            'Backend': 'Node.js, Express, Prisma, PostgreSQL, Socket.IO, Stripe, REST APIs',
            'IA & LLMs': 'OpenAI, Anthropic, Ollama, sistemas multi-agente, prompt engineering, LangChain',
            'Infra & Testes': 'Render, VPS (Nginx/Let\'s Encrypt), Cloudflare R2, Neon, Jest, Playwright'
        },
        certifications: [
            'Prompt Engineering — Especialização',
            'LangChain / LangGraph: Generative AI with LLMs',
            'Formação em Ciência de Dados',
            'Agentes de IA com MCP & Streamlit',
            'SQL com BigQuery',
            'Python 3'
        ],
        education: [
            {
                degree: 'Bacharelado em Engenharia de Software',
                institution: 'Universidade Cruzeiro do Sul',
                period: 'Em andamento (2º ano)'
            }
        ],
        footnote: 'Métricas de projetos verificáveis no código-fonte e em produção (julho/2026).'
    },
    'en': {
        filename: 'Gabriel_Gomes_Resume.pdf',
        header: {
            name: 'Gabriel Gomes',
            title: 'Full-Stack Product Engineer | SaaS & Applied AI',
            email: 'gabrielgomesdevbr@gmail.com',
            phone: '+55 11 94602-0901',
            location: 'São Paulo, Brazil',
            linkedin: 'linkedin.com/in/gabrielgomesdevbr',
            github: 'github.com/GabrielGomesDevBr'
        },
        sections: {
            summary: 'Professional Summary',
            experience: 'Professional Experience',
            skills: 'Technical Skills',
            certifications: 'Certifications',
            education: 'Education'
        },
        summaryText: 'Full-stack product engineer: I build, launch, and operate SaaS systems end to end — from the data model to the sales funnel. Creator of ABAplay, a multi-tenant platform in production with 4 paying clinics and 300+ patients (180K lines of code, 248 migrations), and LuminiPsi, a TypeScript SaaS with a full testing pyramid and Stripe billing. I use AI as a productivity lever with full ownership of architecture, operations, and support. 9-year background as an Administrative Director: I understand the business the software serves.',
        experience: [
            {
                company: 'ABAplay',
                role: 'Founder & Product Engineer',
                period: '2023 – Present',
                description: 'Multi-tenant SaaS for pediatric therapy clinics, running continuously in production since 2025 with paying customers. Responsible for product, code, infrastructure, sales, and support.',
                achievements: [
                    '4 paying clinics and 300+ patients with clinical follow-up on the platform',
                    '180K lines of code, 484 commits in 13 months, 248 versioned migrations',
                    'Multi-agent AI system (4 specialized agents) with per-clinic cost limits and LGPD audit trail',
                    'Multi-tenant isolation in every query; direct browser uploads to Cloudflare R2 via presigned URLs',
                    'Self-built acquisition machine: lead discovery (Playwright + Ollama), qualification from public health data (0–100 scoring), and outreach via official WhatsApp + email with 5 LLM agents (178 unit tests)'
                ]
            },
            {
                company: 'LuminiPsi',
                role: 'Founder & Product Engineer',
                period: '2026 – Present',
                description: 'Clinical management SaaS for psychologists, with regulatory compliance (CFP/LGPD) at the center of the product. In final QA for launch.',
                achievements: [
                    '64K lines of TypeScript in a monorepo; 24 API modules with Zod validation',
                    'Full testing pyramid: unit, integration (tenant isolation, RBAC, quotas), and e2e with Playwright',
                    'Stripe billing with idempotent webhooks, 4 plans, and add-ons; 8-role RBAC',
                    'Chose to remove AI from clinical content for professional ethics — deterministic, auditable automation'
                ]
            },
            {
                company: 'Alignerr · Outlier',
                role: 'Prompt Engineer',
                period: '2024',
                description: 'LLM evaluation and optimization at scale for international AI training platforms.',
                achievements: [
                    'Response quality evaluation, edge case and unexpected behavior analysis',
                    'Optimized prompt creation and training dataset development'
                ]
            },
            {
                company: 'Hope Construtora',
                role: 'Administrative Director',
                period: '2015 – 2024',
                description: 'Nine years leading operations, multidisciplinary teams, suppliers, and strategic planning.',
                achievements: [
                    'End-to-end budget, contract, and process management — the foundation of my business sense',
                    'Direct experience leading people and resolving operational conflicts'
                ]
            }
        ],
        skills: {
            'Languages': 'TypeScript, JavaScript, Python, SQL',
            'Frontend': 'React 18/19, Vite, Tailwind CSS, PWA',
            'Backend': 'Node.js, Express, Prisma, PostgreSQL, Socket.IO, Stripe, REST APIs',
            'AI & LLMs': 'OpenAI, Anthropic, Ollama, multi-agent systems, prompt engineering, LangChain',
            'Infra & Testing': 'Render, VPS (Nginx/Let\'s Encrypt), Cloudflare R2, Neon, Jest, Playwright'
        },
        certifications: [
            'Prompt Engineering — Specialization',
            'LangChain / LangGraph: Generative AI with LLMs',
            'Data Science Training',
            'AI Agents with MCP & Streamlit',
            'SQL with BigQuery',
            'Python 3'
        ],
        education: [
            {
                degree: 'B.Sc. in Software Engineering',
                institution: 'Universidade Cruzeiro do Sul',
                period: 'In progress (2nd year)'
            }
        ],
        footnote: 'Project metrics verifiable in source code and production (July 2026).'
    }
}

export function generateCV(language = 'pt-BR') {
    const data = cvData[language] || cvData['pt-BR']
    const doc = new jsPDF()

    // Cores da marca (pine / ink)
    const primaryColor = [18, 105, 91]
    const textDark = [19, 39, 35]
    const textLight = [107, 128, 124]

    let yPos = 18

    // Cabeçalho
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 42, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(23)
    doc.setFont('helvetica', 'bold')
    doc.text(data.header.name, 20, yPos)

    yPos += 9
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text(data.header.title, 20, yPos)

    yPos += 8
    doc.setFontSize(9)
    doc.text(`${data.header.email} | ${data.header.phone} | ${data.header.location}`, 20, yPos)
    yPos += 5
    doc.text(`${data.header.linkedin} | ${data.header.github}`, 20, yPos)

    yPos = 52

    const checkPage = (needed = 30) => {
        if (yPos > 285 - needed) {
            doc.addPage()
            yPos = 20
        }
    }

    const addSectionHeader = (title) => {
        checkPage(20)
        doc.setFillColor(...primaryColor)
        doc.rect(20, yPos - 1, 170, 0.6, 'F')
        doc.setTextColor(...primaryColor)
        doc.setFontSize(11)
        doc.setFont('helvetica', 'bold')
        doc.text(title.toUpperCase(), 20, yPos + 6)
        yPos += 12
    }

    // Resumo
    addSectionHeader(data.sections.summary)
    doc.setTextColor(...textDark)
    doc.setFontSize(9.5)
    doc.setFont('helvetica', 'normal')
    const summaryLines = doc.splitTextToSize(data.summaryText, 170)
    doc.text(summaryLines, 20, yPos)
    yPos += summaryLines.length * 4.4 + 8

    // Experiência
    addSectionHeader(data.sections.experience)

    data.experience.forEach((exp) => {
        checkPage(40)

        doc.setTextColor(...textDark)
        doc.setFontSize(11)
        doc.setFont('helvetica', 'bold')
        doc.text(exp.role, 20, yPos)

        doc.setFont('helvetica', 'normal')
        doc.setTextColor(...primaryColor)
        doc.text(exp.company, 20 + doc.getTextWidth(exp.role) + 5, yPos)

        doc.setTextColor(...textLight)
        doc.setFontSize(9)
        doc.text(exp.period, 190, yPos, { align: 'right' })

        yPos += 5
        doc.setTextColor(...textDark)
        doc.setFontSize(9)
        const descLines = doc.splitTextToSize(exp.description, 170)
        doc.text(descLines, 20, yPos)
        yPos += descLines.length * 4 + 2

        exp.achievements.forEach(achievement => {
            checkPage(12)
            const achLines = doc.splitTextToSize(`• ${achievement}`, 165)
            doc.text(achLines, 25, yPos)
            yPos += achLines.length * 4
        })

        yPos += 5
    })

    // Competências
    addSectionHeader(data.sections.skills)

    Object.entries(data.skills).forEach(([category, skills]) => {
        checkPage(12)
        doc.setTextColor(...textDark)
        doc.setFontSize(9.5)
        doc.setFont('helvetica', 'bold')
        doc.text(`${category}: `, 20, yPos)
        doc.setFont('helvetica', 'normal')
        const skillLines = doc.splitTextToSize(skills, 165 - doc.getTextWidth(`${category}: `))
        doc.text(skillLines, 20 + doc.getTextWidth(`${category}: `), yPos)
        yPos += skillLines.length * 4.4 + 1.5
    })

    yPos += 4

    // Certificações
    addSectionHeader(data.sections.certifications)
    doc.setTextColor(...textDark)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')

    data.certifications.forEach(cert => {
        checkPage(8)
        doc.text(`• ${cert}`, 25, yPos)
        yPos += 5
    })

    yPos += 4

    // Formação
    addSectionHeader(data.sections.education)

    data.education.forEach(edu => {
        checkPage(15)
        doc.setTextColor(...textDark)
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.text(edu.degree, 20, yPos)

        yPos += 5
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        doc.text(`${edu.institution} | ${edu.period}`, 20, yPos)
        yPos += 8
    })

    // Nota de verificação
    checkPage(12)
    yPos += 2
    doc.setTextColor(...textLight)
    doc.setFontSize(7.5)
    doc.setFont('helvetica', 'italic')
    doc.text(data.footnote, 20, yPos)

    doc.save(data.filename)
}
