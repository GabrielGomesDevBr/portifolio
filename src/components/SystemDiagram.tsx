import { useEffect, useState, type CSSProperties } from 'react'
import { AlertCircle, Check, FileCheck2, RefreshCw } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { usePortfolio } from '../context/PortfolioContext'

type DiagramStep = {
  id: number
  labelPt: string
  labelEn: string
  detailPt: string
  detailEn: string
}

const steps: DiagramStep[] = [
  { id: 0, labelPt: 'Assinatura', labelEn: 'Subscription', detailPt: 'Regra de preço calculada pelo produto', detailEn: 'Product-owned pricing rule' },
  { id: 1, labelPt: 'Cobrança', labelEn: 'Charge', detailPt: 'Asaas gera e envia a fatura', detailEn: 'Asaas creates and sends the invoice' },
  { id: 2, labelPt: 'Webhook', labelEn: 'Webhook', detailPt: 'Evento autenticado e idempotente', detailEn: 'Authenticated, idempotent event' },
  { id: 3, labelPt: 'Acesso + NFS-e', labelEn: 'Access + invoice', detailPt: 'Acesso liberado e nota emitida', detailEn: 'Access restored and service invoice issued' },
]

export function SystemDiagram({ interactive = false }: { interactive?: boolean }) {
  const { locale } = usePortfolio()
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced || interactive) return
    const interval = window.setInterval(() => setActive((value) => (value + 1) % steps.length), 1800)
    return () => window.clearInterval(interval)
  }, [interactive, reduced])

  const label = (step: DiagramStep) => locale === 'pt-BR' ? step.labelPt : step.labelEn
  const detail = (step: DiagramStep) => locale === 'pt-BR' ? step.detailPt : step.detailEn

  return (
    <div className="system-diagram" aria-label={locale === 'pt-BR' ? 'Fluxo financeiro entre dois produtos e o Asaas' : 'Financial flow between two products and Asaas'}>
      <div className="system-diagram__products">
        <div className="diagram-product diagram-product--aba">
          <span>01</span>
          <strong>ABAplay</strong>
          <small>JavaScript · seats</small>
        </div>
        <div className="diagram-product diagram-product--lumini">
          <span>02</span>
          <strong>LuminiPsi</strong>
          <small>TypeScript · tiers</small>
        </div>
      </div>

      <div className="diagram-rail" aria-hidden="true">
        <span className="diagram-rail__line" />
        <span className="diagram-rail__pulse" style={{ '--diagram-step': active } as CSSProperties} />
      </div>

      <ol className="diagram-steps">
        {steps.map((step) => (
          <li key={step.id} className={step.id <= active ? 'is-active' : ''}>
            {interactive ? (
              <button onClick={() => setActive(step.id)} aria-pressed={active === step.id}>
                <DiagramIcon id={step.id} />
                <span><strong>{label(step)}</strong><small>{detail(step)}</small></span>
              </button>
            ) : (
              <div>
                <DiagramIcon id={step.id} />
                <span><strong>{label(step)}</strong><small>{detail(step)}</small></span>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="diagram-safety">
        <span><Check aria-hidden="true" /> idempotency</span>
        <span><RefreshCw aria-hidden="true" /> retry-safe</span>
        <span><AlertCircle aria-hidden="true" /> ops alerts</span>
        <span><FileCheck2 aria-hidden="true" /> NFS-e</span>
      </div>
    </div>
  )
}

function DiagramIcon({ id }: { id: number }) {
  return <span className="diagram-step-icon">{String(id + 1).padStart(2, '0')}</span>
}
