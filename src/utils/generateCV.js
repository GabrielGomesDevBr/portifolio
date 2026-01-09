import { jsPDF } from 'jspdf'

export function generateCV() {
    const doc = new jsPDF()

    // Colors
    const primaryColor = [99, 102, 241] // Indigo
    const textDark = [15, 23, 42]
    const textMuted = [100, 116, 139]

    let y = 20

    // Helper functions
    const setColor = (color) => doc.setTextColor(color[0], color[1], color[2])
    const addLine = (height = 5) => { y += height }

    // ==================== HEADER ====================
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.rect(0, 0, 210, 45, 'F')

    // Name
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    doc.text('GABRIEL GOMES', 15, 22)

    // Title
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text('Engenheiro de Software | Full-Stack Developer | Especialista em IA', 15, 32)

    // Contact info
    doc.setFontSize(9)
    doc.text('gabrielgomesdevbr@gmail.com | (11) 94602-0901 | São Paulo - SP', 15, 40)

    y = 55

    // ==================== RESUMO PROFISSIONAL ====================
    setColor(primaryColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('RESUMO PROFISSIONAL', 15, y)

    // Line under title
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.setLineWidth(0.5)
    doc.line(15, y + 2, 195, y + 2)

    addLine(10)

    setColor(textDark)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')

    const resumo = 'Engenheiro de Software com especialização em Inteligência Artificial e Ciência de Dados. Experiência na criação de produtos digitais do conceito ao desenvolvimento, com foco em resolver problemas complexos através de soluções baseadas em LLMs e análise de dados. Background em gestão estratégica e liderança de projetos, combinando visão de negócio com habilidades técnicas para entregar produtos inovadores.'

    const resumoLines = doc.splitTextToSize(resumo, 180)
    doc.text(resumoLines, 15, y)
    y += resumoLines.length * 5 + 8

    // ==================== EXPERIÊNCIA PROFISSIONAL ====================
    setColor(primaryColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('EXPERIÊNCIA PROFISSIONAL', 15, y)
    doc.line(15, y + 2, 195, y + 2)
    addLine(10)

    // ABAplay
    setColor(textDark)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('ABAplay | Desenvolvedor Full Stack & Fundador', 15, y)
    addLine(5)

    setColor(textMuted)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.text('Abril 2024 – Presente | Projeto Próprio', 15, y)
    addLine(6)

    setColor(textDark)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)

    const abaplayDesc = [
        '• Desenvolvi plataforma SaaS completa para gestão terapêutica de crianças autistas',
        '• Sistema multi-tenant com 300+ pacientes e 4 clínicas em produção',
        '• Implementei SDR com IA na landing page para qualificação de leads',
        '• Stack: React, Node.js, PostgreSQL, Socket.IO, OpenAI API'
    ]
    abaplayDesc.forEach(line => {
        doc.text(line, 15, y)
        addLine(4.5)
    })
    addLine(3)

    // Alignerr
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Alignerr | Engenheiro de Prompts de IA (Freelance)', 15, y)
    addLine(5)

    setColor(textMuted)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.text('Abril 2025 – Junho 2025 | Remoto', 15, y)
    addLine(6)

    setColor(textDark)
    doc.setFont('helvetica', 'normal')
    const alignerrDesc = [
        '• Criei e otimizei prompts estratégicos para LLMs',
        '• Testes iterativos, ajustes finos e documentação de prompts'
    ]
    alignerrDesc.forEach(line => {
        doc.text(line, 15, y)
        addLine(4.5)
    })
    addLine(3)

    // Outlier
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Outlier | Engenheiro de Prompt e Especialista em IA (Freelance)', 15, y)
    addLine(5)

    setColor(textMuted)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.text('Junho 2023 – Abril 2024 | São Paulo, SP', 15, y)
    addLine(6)

    setColor(textDark)
    doc.setFont('helvetica', 'normal')
    const outlierDesc = [
        '• Otimizei modelos de linguagem (LLMs) e desenvolvi sistemas conversacionais',
        '• Colaborei com equipes multidisciplinares em soluções de IA'
    ]
    outlierDesc.forEach(line => {
        doc.text(line, 15, y)
        addLine(4.5)
    })
    addLine(3)

    // Hope
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Hope Construtora | Diretor Administrativo / Sócio', 15, y)
    addLine(5)

    setColor(textMuted)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.text('Fevereiro 2015 – Janeiro 2024 | São Paulo, SP (9 anos)', 15, y)
    addLine(6)

    setColor(textDark)
    doc.setFont('helvetica', 'normal')
    const hopeDesc = [
        '• Liderança estratégica e gestão de projetos de construção',
        '• Gerenciamento de equipes multidisciplinares'
    ]
    hopeDesc.forEach(line => {
        doc.text(line, 15, y)
        addLine(4.5)
    })
    addLine(6)

    // ==================== COMPETÊNCIAS TÉCNICAS ====================
    setColor(primaryColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('COMPETÊNCIAS TÉCNICAS', 15, y)
    doc.line(15, y + 2, 195, y + 2)
    addLine(10)

    setColor(textDark)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')

    const skills = [
        '• IA & LLMs: Prompt Engineering (GPT, Claude), LangChain, LangGraph, OpenAI API',
        '• Desenvolvimento: React, Node.js, Python, JavaScript, TypeScript, PostgreSQL, Supabase',
        '• Dados: Pandas, Numpy, Scikit-learn, BigQuery, PowerBI',
        '• DevOps: Git, GitHub, Render, Vercel, Streamlit'
    ]
    skills.forEach(line => {
        doc.text(line, 15, y)
        addLine(5)
    })
    addLine(4)

    // ==================== CERTIFICAÇÕES ====================
    setColor(primaryColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('CERTIFICAÇÕES', 15, y)
    doc.line(15, y + 2, 195, y + 2)
    addLine(10)

    setColor(textDark)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')

    const certs = [
        '• Prompt Engineering',
        '• LangChain / LangGraph: Create Generative AI Applications with LLMs',
        '• Formação em Ciência de Dados',
        '• Agentes de IA com MCP & Streamlit',
        '• SQL com BigQuery'
    ]
    certs.forEach(line => {
        doc.text(line, 15, y)
        addLine(4.5)
    })
    addLine(4)

    // ==================== FORMAÇÃO ====================
    setColor(primaryColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('FORMAÇÃO ACADÊMICA', 15, y)
    doc.line(15, y + 2, 195, y + 2)
    addLine(10)

    setColor(textDark)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text('• Engenharia de Software | Universidade Cruzeiro do Sul (Cursando)', 15, y)
    addLine(5)
    doc.text('• Engenharia Civil | UNINOVE (8º Semestre)', 15, y)
    addLine(8)

    // ==================== IDIOMAS & CONTATO ====================
    setColor(primaryColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('IDIOMAS & CONTATO', 15, y)
    doc.line(15, y + 2, 195, y + 2)
    addLine(10)

    setColor(textDark)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text('• Inglês: Intermediário | Espanhol: Básico', 15, y)
    addLine(5)
    doc.text('• LinkedIn: linkedin.com/in/gabrielgomesdevbr', 15, y)
    addLine(5)
    doc.text('• GitHub: github.com/GabrielGomesDevBr', 15, y)
    addLine(5)
    doc.text('• WhatsApp: (11) 94602-0901', 15, y)

    // Download
    doc.save('Gabriel_Gomes_CV.pdf')
}
