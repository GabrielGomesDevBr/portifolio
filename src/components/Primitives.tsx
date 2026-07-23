import { createElement, useRef, type CSSProperties, type ReactNode } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Metric } from '../content'

export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}) {
  const ref = useRef<HTMLElement>(null)
  const visible = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduced = useReducedMotion()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return createElement(
    as,
    { ref, className: `reveal ${visible && !reduced ? 'is-visible' : ''} ${className}`, style },
    children,
  )
}

export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <p className={`eyebrow ${inverse ? 'eyebrow--inverse' : ''}`}>{children}</p>
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  inverse = false,
}: {
  eyebrow: string
  title: string
  intro?: string
  inverse?: boolean
}) {
  return (
    <Reveal className={`section-heading ${inverse ? 'section-heading--inverse' : ''}`}>
      <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  )
}

type ActionLinkProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text' | 'inverse'
  external?: boolean
  onClick?: () => void
  className?: string
}

export function ActionLink({
  to,
  children,
  variant = 'primary',
  external = false,
  onClick,
  className = '',
}: ActionLinkProps) {
  const classes = `action-link action-link--${variant} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {external ? <ArrowUpRight aria-hidden="true" /> : <ArrowDownRight aria-hidden="true" />}
    </>
  )

  if (external) {
    return (
      <a className={classes} href={to} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <Link className={classes} to={to} onClick={onClick}>
      {content}
    </Link>
  )
}

export function MetricGrid({ metrics, inverse = false }: { metrics: Metric[]; inverse?: boolean }) {
  return (
    <dl className={`metric-grid ${inverse ? 'metric-grid--inverse' : ''}`}>
      {metrics.filter((metric) => metric.public).map((metric, index) => (
        <Reveal key={`${metric.value}-${metric.label}`} delay={index * 60} className="metric">
          <dd>{metric.value}</dd>
          <dt>{metric.label}</dt>
          {metric.detail && <dd className="metric__detail">{metric.detail}</dd>}
        </Reveal>
      ))}
    </dl>
  )
}

export function Tags({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className={`tag-list ${inverse ? 'tag-list--inverse' : ''}`} aria-label="Tecnologias">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
