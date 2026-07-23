import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'
import type { CaseKey } from '../content'
import { usePageMeta } from '../hooks/usePageMeta'
import { track } from '../lib/analytics'
import { siteUrl } from '../lib/site'
import { ActionLink, Eyebrow, MetricGrid, Reveal, Tags } from '../components/Primitives'
import { SystemDiagram } from '../components/SystemDiagram'

export default function CasePage({ caseKey }: { caseKey: CaseKey }) {
  const { content, localizePath, locale } = usePortfolio()
  const study = content.cases[caseKey]
  const next: CaseKey = caseKey === 'abaplay' ? 'luminipsi' : caseKey === 'luminipsi' ? 'billing' : 'abaplay'
  const nextStudy = content.cases[next]
  const nextPath = next === 'billing' ? '/systems/asaas-billing' : `/work/${nextStudy.slug}`

  usePageMeta({
    title: `${study.name} — ${study.title} | Gabriel Gomes`,
    description: study.summary,
    locale,
    image: `/og/${caseKey === 'billing' ? 'billing' : caseKey}-og.png`,
    imageAlt: caseKey === 'billing'
      ? 'Infraestrutura de billing e NFS-e por Gabriel Gomes'
      : `${study.name} — case de produto SaaS por Gabriel Gomes`,
    canonical: siteUrl(localizePath(caseKey === 'billing' ? '/systems/asaas-billing' : `/work/${study.slug}`)),
  })

  return (
    <article className={`case-page case-page--${caseKey}`} style={{ '--case-accent': study.accent } as React.CSSProperties}>
      <header className="case-hero">
        <div className="container">
          <Reveal>
            <Link className="back-link" to={`${localizePath('/')}#work`}>
              <ArrowLeft aria-hidden="true" />{content.common.backToWork}
            </Link>
          </Reveal>
          <div className="case-hero__grid">
            <Reveal className="case-hero__copy" delay={60}>
              <Eyebrow>Case {study.number} · {study.category}</Eyebrow>
              <p className="case-status"><span className="live-dot" />{study.status}</p>
              <h1>{study.title}</h1>
              <p className="case-hero__summary">{study.summary}</p>
              <div className="case-hero__actions">
                {study.link && (
                  <ActionLink
                    to={study.link}
                    external
                    onClick={() => track('open_project', { case: caseKey })}
                  >
                    {study.linkLabel ?? content.common.visitProduct}
                  </ActionLink>
                )}
                <a className="case-anchor" href="#case-story">
                  {locale === 'pt-BR' ? 'Ler a história' : 'Read the story'}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <Reveal className="case-hero__facts" delay={120}>
              <dl>
                <div><dt>{locale === 'pt-BR' ? 'Produto' : 'Product'}</dt><dd>{study.name}</dd></div>
                <div><dt>{locale === 'pt-BR' ? 'Papel' : 'Role'}</dt><dd>{study.role}</dd></div>
                <div><dt>{locale === 'pt-BR' ? 'Período' : 'Period'}</dt><dd>{study.period}</dd></div>
              </dl>
              <Tags items={study.stack} />
            </Reveal>
          </div>
          <MetricGrid metrics={study.metrics} />
        </div>
      </header>

      {caseKey === 'billing' ? (
        <section className="case-system-scene">
          <div className="container">
            <Reveal className="case-system-scene__header">
              <Eyebrow inverse>{locale === 'pt-BR' ? 'Arquitetura interativa' : 'Interactive architecture'}</Eyebrow>
              <h2>{locale === 'pt-BR' ? 'Siga um pagamento até a nota.' : 'Follow a payment all the way to the invoice.'}</h2>
              <p>{locale === 'pt-BR' ? 'Selecione uma etapa para ver como estado, isolamento e resiliência se conectam.' : 'Select a step to see how state, isolation, and resilience connect.'}</p>
            </Reveal>
            <SystemDiagram interactive />
          </div>
        </section>
      ) : (
        <CaseGallery caseKey={caseKey} />
      )}

      <section id="case-story" className="case-story">
        <div className="container">
          {study.chapters.map((chapter, index) => (
            <Reveal key={chapter.title} className="case-chapter">
              <div className="case-chapter__index">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <i />
              </div>
              <div className="case-chapter__heading">
                <Eyebrow>{chapter.eyebrow}</Eyebrow>
                <h2>{chapter.title}</h2>
              </div>
              <div className="case-chapter__body">
                <p>{chapter.body}</p>
                {chapter.bullets && (
                  <ul>
                    {chapter.bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" />{bullet}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-closing">
        <div className="container case-closing__grid">
          <Reveal>
            <ShieldCheck aria-hidden="true" />
            <Eyebrow inverse>{locale === 'pt-BR' ? 'O que este case prova' : 'What this case proves'}</Eyebrow>
            <h2>{study.closingTitle}</h2>
            <p>{study.closingText}</p>
          </Reveal>
          <Reveal className="case-closing__next" delay={80}>
            <span>{content.common.nextCase}</span>
            <Link to={localizePath(nextPath)}>
              {nextStudy.name}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <small>{nextStudy.category}</small>
          </Reveal>
        </div>
      </section>
    </article>
  )
}

function CaseGallery({ caseKey }: { caseKey: 'abaplay' | 'luminipsi' }) {
  const { content, locale } = usePortfolio()
  const study = content.cases[caseKey]

  return (
    <section className={`case-gallery case-gallery--${caseKey}`}>
      <div className="container">
        <Reveal className="case-gallery__heading">
          <Eyebrow>{locale === 'pt-BR' ? 'Produto em uso' : 'Product in use'}</Eyebrow>
          <h2>{locale === 'pt-BR' ? 'A complexidade fica no sistema. O fluxo continua claro.' : 'Complexity stays in the system. The workflow stays clear.'}</h2>
        </Reveal>
        <div className="case-gallery__grid">
          {study.media.map((media, index) => (
            <Reveal
              key={media.src}
              className={`case-media case-media--${media.kind} case-media--${index + 1}`}
              delay={(index % 3) * 70}
            >
              <div>
                <img
                  src={media.src}
                  alt={media.alt}
                  width={media.kind === 'desktop' ? 1600 : 870}
                  height={media.kind === 'desktop' ? 900 : 1749}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
              <p><span>0{index + 1}</span>{media.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
