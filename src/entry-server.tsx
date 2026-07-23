import { renderToString } from 'react-dom/server'
import { Route, Routes, StaticRouter } from 'react-router'
import { PortfolioProvider } from './context/PortfolioContext'
import { SiteLayout } from './components/SiteChrome'
import HomePage from './pages/HomePage'
import CasePage from './pages/CasePage'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import NotFoundPage from './pages/NotFoundPage'
import { getStaticRouteMeta, publicRoutes } from './content/routes'

function ServerRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work/abaplay" element={<CasePage caseKey="abaplay" />} />
        <Route path="work/luminipsi" element={<CasePage caseKey="luminipsi" />} />
        <Route path="systems/asaas-billing" element={<CasePage caseKey="billing" />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="en" element={<HomePage />} />
        <Route path="en/work/abaplay" element={<CasePage caseKey="abaplay" />} />
        <Route path="en/work/luminipsi" element={<CasePage caseKey="luminipsi" />} />
        <Route path="en/systems/asaas-billing" element={<CasePage caseKey="billing" />} />
        <Route path="en/about" element={<AboutPage />} />
        <Route path="en/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export function render(path: string) {
  return renderToString(
    <StaticRouter location={path}>
      <PortfolioProvider>
        <ServerRoutes />
      </PortfolioProvider>
    </StaticRouter>,
  )
}

export { getStaticRouteMeta, publicRoutes }

