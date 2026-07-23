import { usePortfolio } from '../context/PortfolioContext'
import { ActionLink, Eyebrow } from '../components/Primitives'

export default function NotFoundPage() {
  const { locale, localizePath } = usePortfolio()
  return (
    <section className="not-found container">
      <Eyebrow>404 / route_not_found</Eyebrow>
      <h1>{locale === 'pt-BR' ? 'Essa rota ainda não virou produto.' : 'This route has not become a product yet.'}</h1>
      <p>{locale === 'pt-BR' ? 'Volte para o início e explore os sistemas que já estão em operação.' : 'Return home and explore the systems already in operation.'}</p>
      <ActionLink to={localizePath('/')}>{locale === 'pt-BR' ? 'Voltar ao início' : 'Back home'}</ActionLink>
    </section>
  )
}
