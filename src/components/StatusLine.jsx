// Linha de status em estilo telemetria — elemento-assinatura do site.
// type: 'live' (verde pulsante) | 'signal' (âmbar fixo)
export default function StatusLine({ type = 'live', children, className = '', dark = false }) {
    return (
        <span className={`inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm ${dark ? 'text-engine-faint' : 'text-ink-faint'} ${className}`}>
            <span className={`status-dot status-dot--${type}`} aria-hidden="true" />
            <span>{children}</span>
        </span>
    )
}
