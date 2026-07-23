import { CheckCircle2 } from 'lucide-react'
import { usePortfolio } from '../context/PortfolioContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { ActionLink, Eyebrow, Reveal, SectionHeading } from '../components/Primitives'
import { siteUrl } from '../lib/site'

export default function AboutPage() {
  const { content, localizePath, locale } = usePortfolio()

  usePageMeta({
    title: `${content.about.title} | Gabriel Gomes`,
    description: content.about.intro,
    locale,
    canonical: siteUrl(localizePath('/about')),
  })

  return (
    <article className="about-page">
      <header className="about-hero">
        <div className="container about-hero__grid">
          <Reveal className="about-hero__copy">
            <Eyebrow>{content.about.eyebrow}</Eyebrow>
            <h1>{content.about.title}</h1>
            <p>{content.about.intro}</p>
          </Reveal>
          <Reveal className="about-hero__portrait" delay={100}>
            <img src="/profile.jpg" alt="Gabriel Gomes" width="1023" height="1024" />
            <span>São Paulo · BR<br />Product / Engineering</span>
          </Reveal>
        </div>
      </header>

      <section className="section about-narrative">
        <div className="container about-narrative__grid">
          <Reveal className="about-narrative__label">
            <Eyebrow>{locale === 'pt-BR' ? 'Contexto' : 'Context'}</Eyebrow>
            <span>2015 → 2026</span>
          </Reveal>
          <div className="about-narrative__text">
            {content.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 60}><p>{paragraph}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section principle-section">
        <div className="container">
          <SectionHeading eyebrow="Operating principles" title={content.about.principlesTitle} />
          <div className="principle-grid">
            {content.about.principles.map((principle, index) => (
              <Reveal key={principle.title} className="principle-card" delay={index * 60}>
                <CheckCircle2 aria-hidden="true" />
                <span>0{index + 1}</span>
                <h2>{principle.title}</h2>
                <p>{principle.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <SectionHeading eyebrow="2015 — today" title={content.about.timelineTitle} />
          <ol className="timeline">
            {content.about.timeline.map((item, index) => (
              <Reveal key={`${item.period}-${item.org}`} as="li" className="timeline__item" delay={index * 55}>
                <time>{item.period}</time>
                <i aria-hidden="true" />
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.org}</strong>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="about-resume-link">
            <ActionLink to={localizePath('/resume')} variant="secondary">
              {content.contact.resumeCta}
            </ActionLink>
          </div>
        </div>
      </section>
    </article>
  )
}
