import type { PortfolioContent } from '../content'

export async function generateResumePdf(content: PortfolioContent) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const dark: [number, number, number] = [7, 17, 14]
  const green: [number, number, number] = [22, 165, 121]
  const muted: [number, number, number] = [82, 101, 94]
  let y = 18

  doc.setFillColor(...dark)
  doc.rect(0, 0, 210, 48, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.text('Gabriel Gomes', 18, y)
  y += 9
  doc.setTextColor(98, 230, 182)
  doc.setFontSize(11)
  doc.text(content.resume.title, 18, y)
  y += 7
  doc.setTextColor(220, 232, 227)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.text('gabrielgomesdevbr@gmail.com  ·  +55 11 94602-0901  ·  São Paulo, SP', 18, y)
  y = 60

  const section = (title: string) => {
    doc.setTextColor(...green)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(title.toUpperCase(), 18, y)
    doc.setDrawColor(...green)
    doc.line(18, y + 2, 192, y + 2)
    y += 10
  }

  section(content.resume.summaryTitle)
  doc.setTextColor(...dark)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  const summary = doc.splitTextToSize(content.resume.summary, 174)
  doc.text(summary, 18, y)
  y += summary.length * 4.5 + 9

  section(content.resume.experienceTitle)
  for (const item of content.about.timeline.slice(0, 4)) {
    if (y > 262) {
      doc.addPage()
      y = 20
    }
    doc.setTextColor(...dark)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text(item.role, 18, y)
    doc.setTextColor(...green)
    doc.text(item.org, 192, y, { align: 'right' })
    y += 5
    doc.setTextColor(...muted)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text(item.period, 18, y)
    y += 5
    doc.setTextColor(...dark)
    const lines = doc.splitTextToSize(item.text, 174)
    doc.text(lines, 18, y)
    y += lines.length * 4 + 7
  }

  section(content.resume.skillsTitle)
  doc.setTextColor(...dark)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text('TypeScript · JavaScript · React · Node.js · Express · Prisma · PostgreSQL', 18, y)
  y += 5
  doc.text('Docker · CI/CD · Playwright · Cloudflare R2 · OpenAI · Asaas · Webhooks', 18, y)
  y += 12

  section(content.resume.educationTitle)
  doc.setTextColor(...dark)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text(content.locale === 'pt-BR' ? 'Bacharelado em Engenharia de Software' : 'B.Sc. in Software Engineering', 18, y)
  y += 5
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.text(`Universidade Cruzeiro do Sul · ${content.locale === 'pt-BR' ? 'em andamento' : 'in progress'}`, 18, y)

  doc.save(content.locale === 'pt-BR' ? 'Gabriel_Gomes_Curriculo.pdf' : 'Gabriel_Gomes_Resume.pdf')
}
