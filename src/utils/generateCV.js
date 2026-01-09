import jsPDF from 'jspdf'

const cvData = {
    'pt-BR': {
        filename: 'Gabriel_Gomes_Curriculo.pdf',
        header: {
            name: 'Gabriel Gomes',
            title: 'Engenheiro de Software | Especialista em IA',
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
        summaryText: 'Engenheiro de Software com especialização em Inteligência Artificial e Ciência de Dados. Experiência na criação de produtos digitais do conceito ao desenvolvimento, com foco em resolver problemas complexos através de soluções baseadas em LLMs. Desenvolvedor do ABAplay, plataforma SaaS multi-tenant que atende 300+ pacientes em 4 clínicas. Background de 9 anos em gestão como Diretor Administrativo.',
        experience: [
            {
                company: 'ABAplay',
                role: 'Fundador & Desenvolvedor Full-Stack',
                period: '2023 - Presente',
                description: 'Plataforma SaaS multi-tenant para clínicas de terapia infantil. Sistema completo com gestão de pacientes, sessões ABA, chat em tempo real, relatórios automatizados e integração com IA.',
                achievements: [
                    '300+ pacientes ativos em produção',
                    '4 clínicas utilizando a plataforma',
                    'Arquitetura multi-tenant com isolamento por clinic_id',
                    'Chat em tempo real com Socket.IO'
                ]
            },
            {
                company: 'Alignerr',
                role: 'Prompt Engineer',
                period: '2024',
                description: 'Otimização de modelos de linguagem e desenvolvimento de sistemas conversacionais inteligentes para projetos de IA.',
                achievements: [
                    'Refinamento de prompts para modelos GPT',
                    'Avaliação e feedback de respostas de IA',
                    'Desenvolvimento de datasets de treinamento'
                ]
            },
            {
                company: 'Outlier AI',
                role: 'Prompt Engineer',
                period: '2024',
                description: 'Trabalho com modelos de linguagem avançados, focando em qualidade de resposta e alinhamento com expectativas humanas.',
                achievements: [
                    'Avaliação de outputs de modelos de IA',
                    'Criação de prompts otimizados',
                    'Análise de edge cases e comportamentos inesperados'
                ]
            },
            {
                company: 'Hope Construtora',
                role: 'Diretor Administrativo',
                period: '2015 - 2024',
                description: 'Gestão completa de operações administrativas, equipes e projetos na área de construção civil.',
                achievements: [
                    '9 anos de experiência em liderança',
                    'Gestão de equipes multidisciplinares',
                    'Planejamento estratégico e operacional'
                ]
            }
        ],
        skills: {
            'IA & LLMs': 'Prompt Engineering, OpenAI API, LangChain, Agentes de IA, Ollama',
            'Frontend': 'React, Next.js, TypeScript, Tailwind CSS, JavaScript',
            'Backend': 'Node.js, Express, Python, Socket.IO, REST APIs',
            'Database': 'PostgreSQL, Supabase, Firebase, SQL',
            'DevOps': 'Git, Render, Vercel, Linux'
        },
        certifications: [
            'Prompt Engineering - Especialização',
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
                period: 'Em andamento'
            }
        ]
    },
    'en': {
        filename: 'Gabriel_Gomes_Resume.pdf',
        header: {
            name: 'Gabriel Gomes',
            title: 'Software Engineer | AI Specialist',
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
        summaryText: 'Software Engineer specialized in Artificial Intelligence and Data Science. Experience building digital products from concept to deployment, focused on solving complex problems through LLM-based solutions. Developer of ABAplay, a multi-tenant SaaS platform serving 300+ patients across 4 clinics. 9 years of management experience as Administrative Director.',
        experience: [
            {
                company: 'ABAplay',
                role: 'Founder & Full-Stack Developer',
                period: '2023 - Present',
                description: 'Multi-tenant SaaS platform for pediatric therapy clinics. Complete system with patient management, ABA sessions, real-time chat, automated reports, and AI integration.',
                achievements: [
                    '300+ active patients in production',
                    '4 clinics using the platform',
                    'Multi-tenant architecture with clinic_id isolation',
                    'Real-time chat with Socket.IO'
                ]
            },
            {
                company: 'Alignerr',
                role: 'Prompt Engineer',
                period: '2024',
                description: 'Optimization of language models and development of intelligent conversational systems for AI projects.',
                achievements: [
                    'GPT model prompt refinement',
                    'AI response evaluation and feedback',
                    'Training dataset development'
                ]
            },
            {
                company: 'Outlier AI',
                role: 'Prompt Engineer',
                period: '2024',
                description: 'Working with advanced language models, focusing on response quality and human expectation alignment.',
                achievements: [
                    'AI model output evaluation',
                    'Optimized prompt creation',
                    'Edge case and unexpected behavior analysis'
                ]
            },
            {
                company: 'Hope Construction',
                role: 'Administrative Director',
                period: '2015 - 2024',
                description: 'Complete management of administrative operations, teams, and projects in the construction industry.',
                achievements: [
                    '9 years of leadership experience',
                    'Multidisciplinary team management',
                    'Strategic and operational planning'
                ]
            }
        ],
        skills: {
            'AI & LLMs': 'Prompt Engineering, OpenAI API, LangChain, AI Agents, Ollama',
            'Frontend': 'React, Next.js, TypeScript, Tailwind CSS, JavaScript',
            'Backend': 'Node.js, Express, Python, Socket.IO, REST APIs',
            'Database': 'PostgreSQL, Supabase, Firebase, SQL',
            'DevOps': 'Git, Render, Vercel, Linux'
        },
        certifications: [
            'Prompt Engineering - Specialization',
            'LangChain / LangGraph: Generative AI with LLMs',
            'Data Science Training',
            'AI Agents with MCP & Streamlit',
            'SQL with BigQuery',
            'Python 3'
        ],
        education: [
            {
                degree: 'Bachelor in Software Engineering',
                institution: 'Cruzeiro do Sul University',
                period: 'In Progress'
            }
        ]
    }
}

export function generateCV(language = 'pt-BR') {
    const data = cvData[language] || cvData['pt-BR']
    const doc = new jsPDF()

    // Colors
    const primaryColor = [99, 102, 241] // Indigo
    const textDark = [30, 41, 59]
    const textLight = [100, 116, 139]

    let yPos = 20

    // Header with gradient effect
    doc.setFillColor(...primaryColor)
    doc.rect(0, 0, 210, 45, 'F')

    // Name
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(data.header.name, 20, yPos)

    // Title
    yPos += 10
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(data.header.title, 20, yPos)

    // Contact info
    yPos += 8
    doc.setFontSize(9)
    doc.text(`${data.header.email} | ${data.header.phone} | ${data.header.location}`, 20, yPos)
    yPos += 5
    doc.text(`${data.header.linkedin} | ${data.header.github}`, 20, yPos)

    yPos = 55

    // Helper function for section headers
    const addSectionHeader = (title) => {
        doc.setFillColor(...primaryColor)
        doc.rect(20, yPos - 1, 170, 0.5, 'F')
        doc.setTextColor(...primaryColor)
        doc.setFontSize(12)
        doc.setFont('helvetica', 'bold')
        doc.text(title.toUpperCase(), 20, yPos + 6)
        yPos += 12
    }

    // Summary
    addSectionHeader(data.sections.summary)
    doc.setTextColor(...textDark)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    const summaryLines = doc.splitTextToSize(data.summaryText, 170)
    doc.text(summaryLines, 20, yPos)
    yPos += summaryLines.length * 5 + 8

    // Experience
    addSectionHeader(data.sections.experience)

    data.experience.forEach((exp, index) => {
        // Check if we need a new page
        if (yPos > 250) {
            doc.addPage()
            yPos = 20
        }

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

        // Achievements
        exp.achievements.forEach(achievement => {
            doc.text(`• ${achievement}`, 25, yPos)
            yPos += 4
        })

        yPos += 4
    })

    // Check if we need a new page for skills
    if (yPos > 220) {
        doc.addPage()
        yPos = 20
    }

    // Skills
    addSectionHeader(data.sections.skills)

    Object.entries(data.skills).forEach(([category, skills]) => {
        doc.setTextColor(...textDark)
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.text(`${category}: `, 20, yPos)
        doc.setFont('helvetica', 'normal')
        doc.text(skills, 20 + doc.getTextWidth(`${category}: `), yPos)
        yPos += 6
    })

    yPos += 4

    // Certifications
    addSectionHeader(data.sections.certifications)
    doc.setTextColor(...textDark)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')

    data.certifications.forEach(cert => {
        doc.text(`• ${cert}`, 25, yPos)
        yPos += 5
    })

    yPos += 4

    // Education
    addSectionHeader(data.sections.education)

    data.education.forEach(edu => {
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

    // Save
    doc.save(data.filename)
}
