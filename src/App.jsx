import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import PartnersHub from './pages/PartnersHub'
import PartnerDetail from './pages/PartnerDetail'
import ToolsHub from './pages/ToolsHub'
import CoverCalculator from './pages/CoverCalculator'
import EmergencyReadiness from './pages/EmergencyReadiness'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Core */}
        <Route index element={<Home />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="about" element={<About />} />

        {/* Partners */}
        <Route path="partners" element={<PartnersHub />} />
        <Route path="partners/:slug" element={<PartnerDetail />} />

        {/* Tools (Beta / next phase) */}
        <Route path="tools" element={<ToolsHub />} />
        <Route path="tools/cover-calculator" element={<CoverCalculator />} />
        <Route path="tools/emergency-readiness" element={<EmergencyReadiness />} />

        {/* Contact */}
        <Route path="contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
