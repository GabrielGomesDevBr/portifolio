import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioContext'
import { SiteLayout } from './components/SiteChrome'
import { AppErrorBoundary } from './components/AppErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const CasePage = lazy(() => import('./pages/CasePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function RouteFallback() {
  return <div className="route-fallback" role="status" aria-label="Carregando"><span /><span /><span /></div>
}

export function PortfolioRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
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
    </Suspense>
  )
}

export default function App() {
  return (
    <AppErrorBoundary>
      <PortfolioProvider>
        <PortfolioRoutes />
      </PortfolioProvider>
    </AppErrorBoundary>
  )
}
