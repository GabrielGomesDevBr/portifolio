import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('public routes', () => {
  it('renders the Portuguese home and its primary proof', async () => {
    renderRoute('/')
    expect(await screen.findByRole('heading', { level: 1, name: /Produtos digitais que entram em operação/i })).toBeInTheDocument()
    expect(screen.getAllByText('300+').length).toBeGreaterThan(0)
  })

  it('renders an English case through a direct localized URL', async () => {
    renderRoute('/en/work/luminipsi')
    expect(await screen.findByRole('heading', { level: 1, name: /Clinical compliance treated as product/i })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')
  })

  it('opens and closes the accessible mobile menu with Escape', async () => {
    const user = userEvent.setup()
    renderRoute('/')
    const open = await screen.findByRole('button', { name: 'Abrir menu' })
    await user.click(open)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(open).toHaveFocus()
  })

  it('renders a useful not-found route', async () => {
    renderRoute('/rota-inexistente')
    expect(await screen.findByRole('heading', { level: 1, name: /Essa rota ainda não virou produto/i })).toBeInTheDocument()
  })
})

