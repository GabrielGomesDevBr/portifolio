import { ArrowRight, ArrowUpRight, Boxes, Braces, CloudCog, Database, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { track } from '../lib/analytics'
import { siteUrl } from '../lib/site'
import { ActionLink, Eyebrow, MetricGrid, Reveal, SectionHeading, Tags } from '../components/Primitives'
import { SystemDiagram } from '../components/SystemDiagram'
import type { CaseStudy } from '../content'

export default function HomePage() {
  const { content, localizePath, locale } = usePortfolio()

  usePageMeta({
    title: content.seo.title,
    description: content.seo.description,
    locale,
    canonical: siteUrl(localizePath('/')),
  })

  return (
    <>
      <section className="hero">
        <div className="hero__grid container">
          <div className="hero__copy">
            <Reveal>
              <div className="availability"><span className="live-dot" aria-hidden="true" />{content.home.status}</div>
            </Reveal>
            <Reveal delay={70}>
              <Eyebrow>{content.home.eyebrow}</Eyebrow>
              <h1 aria-label={`${content.home.titleTop} ${content.home.titleAccent}`}>
                <span>{content.home.titleTop}</span>
                <em>{content.home.titleAccent}</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="hero__description">{content.home.description}</p>
              <div className="hero__actions">
                <ActionLink
                  to="#contact"
                  onClick={() => track('click_project_contact', { source: 'hero' })}
                >
                  {content.home.primaryCta}
                </ActionLink>
                <ActionLink to="#work" variant="secondary">{content.home.secondaryCta}</ActionLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="hero__visual-wrap">
            <HeroSystem />
          </Reveal>
        </div>
        <div className="container hero__metrics">
          <MetricGrid metrics={content.home.metrics} />
          <p className="verified-line"><ShieldCheck aria-hidden="true" />{content.common.verified}</p>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <SectionHeading
            eyebrow={content.home.workEyebrow}
            title={content.home.workTitle}
            intro={content.home.workIntro}
          />
          <div className="selected-work">
            <ProductFeature study={content.cases.abaplay} href={localizePath('/work/abaplay')} />
            <ProductFeature study={content.cases.luminipsi} href={localizePath('/work/luminipsi')} reverse />
          </div>
        </div>
      </section>

      <section className="section engine-section">
        <div className="container">
          <div className="engine-section__copy">
            <SectionHeading
              eyebrow={content.home.systemEyebrow}
              title={content.home.systemTitle}
              intro={content.home.systemText}
              inverse
            />
            <ActionLink to={localizePath('/systems/asaas-billing')} variant="inverse">
              {content.home.systemCta}
            </ActionLink>
          </div>
          <Reveal className="engine-section__diagram">
            <SystemDiagram />
          </Reveal>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <SectionHeading
            eyebrow={content.home.capabilitiesEyebrow}
            title={content.home.capabilitiesTitle}
          />
          <div className="capability-list">
            {content.home.capabilities.map((capability, index) => (
              <Reveal key={capability.number} className="capability-row" delay={index * 55}>
                <span className="capability-row__number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <Tags items={capability.tags} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="container">
          <div className="process-section__intro">
            <SectionHeading
              eyebrow={content.home.processEyebrow}
              title={content.home.processTitle}
              intro={content.home.processIntro}
            />
          </div>
          <ol className="process-track">
            {content.home.process.map((step, index) => (
              <Reveal key={step.number} as="li" className="process-step" delay={index * 70}>
                <div className="process-step__top">
                  <span>{step.number}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <small>{step.artifact}</small>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview__grid">
          <Reveal className="about-preview__portrait">
            <img src="/profile.jpg" alt="Gabriel Gomes" width="1023" height="1024" loading="lazy" />
            <div className="about-preview__stamp">9y / ops<br />3y / product</div>
          </Reveal>
          <div className="about-preview__copy">
            <SectionHeading
              eyebrow={content.home.aboutEyebrow}
              title={content.home.aboutTitle}
              intro={content.home.aboutText}
              inverse
            />
            <ActionLink to={localizePath('/about')} variant="secondary">{content.home.aboutCta}</ActionLink>
          </div>
        </div>
      </section>

      <section className="section automation-section">
        <div className="container automation-section__inner">
          <div className="automation-section__heading">
            <SectionHeading
              eyebrow={content.home.automationEyebrow}
              title={content.home.automationTitle}
              intro={content.home.automationIntro}
            />
          </div>
          <ol className="automation-pipeline">
            {content.home.automations.map((automation, index) => (
              <Reveal key={automation.tool} as="li" className="automation-card" delay={index * 80}>
                <div className="automation-card__top">
                  <span>0{index + 1}</span>
                  <small>{automation.stage}</small>
                  {index < content.home.automations.length - 1 && <ArrowRight aria-hidden="true" />}
                </div>
                <h3>{automation.tool}</h3>
                <p>{automation.text}</p>
                <Tags items={automation.facts} inverse />
              </Reveal>
            ))}
          </ol>
          <Reveal className="automation-conclusion">
            <span aria-hidden="true">↳</span>
            <p>{content.home.automationConclusion}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function HeroSystem() {
  return (
    <div className="hero-system" aria-label="Produto conectado a interface, dados, infraestrutura e operação">
      <div className="hero-system__topbar">
        <span>product_system.live</span>
        <div><i /><i /><i /></div>
      </div>
      <div className="hero-system__canvas">
        <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
        <div className="hero-core">
          <span>GG</span>
          <small>product<br />engineer</small>
        </div>
        <SystemNode className="node--interface" icon={<Braces />} label="Interface" value="React" />
        <SystemNode className="node--data" icon={<Database />} label="Dados" value="PostgreSQL" />
        <SystemNode className="node--infra" icon={<CloudCog />} label="Operação" value="Docker / VPS" />
        <SystemNode className="node--product" icon={<Boxes />} label="Produto" value="SaaS / Billing" />
      </div>
      <div className="hero-system__log">
        <span><i className="signal-ok" /> deploy_healthy</span>
        <span><i className="signal-live" /> customers_live</span>
        <span><i className="signal-ok" /> billing_synced</span>
      </div>
    </div>
  )
}

function SystemNode({ className, icon, label, value }: { className: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className={`hero-node ${className}`}>
      {icon}
      <span><small>{label}</small><strong>{value}</strong></span>
    </div>
  )
}

function ProductFeature({ study, href, reverse = false }: { study: CaseStudy; href: string; reverse?: boolean }) {
  const { content } = usePortfolio()

  return (
    <Reveal className={`product-feature product-feature--${study.key} ${reverse ? 'product-feature--reverse' : ''}`}>
      <div className="product-feature__content">
        <div className="product-feature__meta">
          <span>Case {study.number}</span>
          <span><i className="live-dot" />{study.status}</span>
        </div>
        <p className="product-feature__category">{study.category}</p>
        <h3>{study.name}</h3>
        <h4>{study.title}</h4>
        <p>{study.summary}</p>
        <div className="product-feature__proofs">
          {study.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
          ))}
        </div>
        <Link to={href} onClick={() => track('view_case', { case: study.key })}>
          {content.common.exploreCase}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <div className="product-feature__media">
        <ProductShowcase study={study} />
      </div>
    </Reveal>
  )
}

function ProductShowcase({ study }: { study: CaseStudy }) {
  const mobile = study.media.filter((item) => item.kind === 'mobile')

  if (study.key === 'abaplay') {
    const desktop = study.media.find((item) => item.kind === 'desktop')!

    return (
      <div className="product-showcase product-showcase--abaplay">
        <figure className="browser-device">
          <div className="browser-device__bar">
            <span /><span /><span />
            <small>app.abaplay.app.br</small>
          </div>
          <img src={desktop.src} alt={desktop.alt} width="1024" height="516" loading="lazy" decoding="async" />
          <figcaption>{desktop.caption}</figcaption>
        </figure>
        {mobile.slice(0, 2).map((item, index) => (
          <PhoneDevice
            key={item.src}
            item={item}
            className={`phone-device--aba-${index + 1}`}
            width={index === 0 ? 515 : 512}
            height={1024}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="product-showcase product-showcase--luminipsi">
      {mobile.slice(0, 3).map((item, index) => (
        <PhoneDevice
          key={item.src}
          item={item}
          className={`phone-device--lumini-${index + 1}`}
          width={index === 1 ? 869 : 870}
          height={index === 1 ? 1751 : 1749}
        />
      ))}
    </div>
  )
}

function PhoneDevice({
  item,
  className,
  width,
  height,
}: {
  item: CaseStudy['media'][number]
  className: string
  width: number
  height: number
}) {
  return (
    <figure className={`phone-device ${className}`}>
      <div className="phone-device__speaker" aria-hidden="true" />
      <img src={item.src} alt={item.alt} width={width} height={height} loading="lazy" decoding="async" />
      <figcaption>{item.caption}</figcaption>
    </figure>
  )
}
