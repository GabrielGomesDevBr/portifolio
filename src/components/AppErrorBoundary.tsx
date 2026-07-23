import { Component, type ErrorInfo, type ReactNode } from 'react'

type State = { failed: boolean }

export class AppErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    window.dispatchEvent(new CustomEvent('portfolio:error', {
      detail: { message: error.message, componentStack: info.componentStack },
    }))
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="fatal-error">
          <span>system_recovery</span>
          <h1>Algo saiu do fluxo esperado.</h1>
          <p>A interface foi interrompida com segurança. Recarregue a página para tentar novamente.</p>
          <button onClick={() => window.location.reload()}>Recarregar</button>
        </main>
      )
    }

    return this.props.children
  }
}

