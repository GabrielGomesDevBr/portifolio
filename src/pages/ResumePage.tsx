import { Download, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { track } from '../lib/analytics'
import { Eyebrow, Reveal, Tags } from '../components/Primitives'
import { siteUrl } from '../lib/site'

export default function ResumePage() {
  const { content, localizePath, locale } = usePortfolio()
  const [generating, setGenerating] = useState(false)

  usePageMeta({
    title: `${content.resume.title} | Gabriel Gomes`,
    description: content.resume.summary,
    locale,
    canonical: siteUrl(localizePath('/resume')),
  })

  const generatePdf = async () => {
    setGenerating(true)
    try {
      const { generateResumePdf } = await import('../utils/generateResumePdf')
      await generateResumePdf(content)
      track('download_resume', { locale })
    } finally {
      setGenerating(false)
    }
  }

  return (
    <article className="resume-page">
      <header className="resume-intro container">
        <Reveal>
          <Eyebrow>{content.resume.eyebrow}</Eyebrow>
          <h1>{content.resume.title}</h1>
          <p>{content.resume.intro}</p>
          <div className="resume-actions no-print">
            <button onClick={() => window.print()}><Printer aria-hidden="true" />{content.resume.print}</button>
            <button onClick={generatePdf} disabled={generating}>
              <Download aria-hidden="true" />{generating ? '…' : content.resume.download}
            </button>
          </div>
        </Reveal>
      </header>

      <section className="resume-sheet container">
        <header className="resume-sheet__header">
          <div>
            <span className="resume-monogram">GG</span>
            <h2>Gabriel Gomes</h2>
            <p>{content.resume.title}</p>
          </div>
          <ul>
            <li><Mail aria-hidden="true" />gabrielgomesdevbr@gmail.com</li>
            <li><Phone aria-hidden="true" />+55 11 94602-0901</li>
            <li><MapPin aria-hidden="true" />São Paulo, SP</li>
          </ul>
        </header>

        <div className="resume-sheet__section">
          <Eyebrow>{content.resume.summaryTitle}</Eyebrow>
          <p className="resume-summary">{content.resume.summary}</p>
        </div>

        <div className="resume-sheet__section">
          <Eyebrow>{content.resume.experienceTitle}</Eyebrow>
          <div className="resume-experience">
            {content.about.timeline.filter((item) => !item.role.includes('Engenharia de Software') && !item.role.includes('Software Engineering')).map((item) => (
              <article key={`${item.period}-${item.org}`}>
                <time>{item.period}</time>
                <div><h3>{item.role}</h3><strong>{item.org}</strong><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-sheet__columns">
          <section>
            <Eyebrow>{content.resume.skillsTitle}</Eyebrow>
            <Tags items={['TypeScript', 'JavaScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'Playwright', 'OpenAI', 'Asaas']} />
          </section>
          <section>
            <Eyebrow>{content.resume.educationTitle}</Eyebrow>
            <h3>{locale === 'pt-BR' ? 'Bacharelado em Engenharia de Software' : 'B.Sc. in Software Engineering'}</h3>
            <p>Universidade Cruzeiro do Sul · {locale === 'pt-BR' ? 'em andamento' : 'in progress'}</p>
          </section>
        </div>
      </section>
    </article>
  )
}
