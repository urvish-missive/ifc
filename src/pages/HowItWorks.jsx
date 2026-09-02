import { useState, useEffect } from 'react'
import HiwHeroSection from '../components/sections/how-it-works/HiwHeroSection'
import HiwJourneySection from '../components/sections/how-it-works/HiwJourneySection'
import HiwPartiesSection from '../components/sections/how-it-works/HiwPartiesSection'
import HiwComparisonSection from '../components/sections/how-it-works/HiwComparisonSection'
import HiwClosingCta from '../components/sections/how-it-works/HiwClosingCta'

export default function HowItWorks() {
  const [activeParty, setActiveParty] = useState(null)

  useEffect(() => {
    // Trigger hero reveal
    const timer = setTimeout(() => {
      const sectionEl = document.getElementById('top')
      if (sectionEl) sectionEl.classList.add('ready')
    }, 120)

    // Scroll to top on page load unless hash present
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <HiwHeroSection />
      <HiwJourneySection activeParty={activeParty} />
      <HiwPartiesSection onSelectParty={setActiveParty} />
      <HiwComparisonSection />
      <HiwClosingCta />
    </div>
  )
}
