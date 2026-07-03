import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import GtmMachine from './components/GtmMachine'
import HowIWork from './components/HowIWork'
import Journey from './components/Journey'
import OtherProjects from './components/OtherProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-paper">
                <Header />
                <main>
                    <Hero />
                    <CaseStudies />
                    <GtmMachine />
                    <HowIWork />
                    <Journey />
                    <OtherProjects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    )
}

export default App
