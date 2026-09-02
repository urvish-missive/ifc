import { useEffect } from 'react'
import HomeHero from '../components/sections/home/HomeHero'
import IdeaSection from '../components/sections/home/IdeaSection'
import InsuranceSection from '../components/sections/home/InsuranceSection'
import RealitySection from '../components/sections/home/RealitySection'
import CaseDeskSection from '../components/sections/home/CaseDeskSection'
import HowPiecesConnectSection from '../components/sections/home/HowPiecesConnectSection'
import CustomerJourneySection from '../components/sections/home/CustomerJourneySection'
import TrustSection from '../components/sections/home/TrustSection'
import HumanSection from '../components/sections/home/HumanSection'
import GroupSection from '../components/sections/home/GroupSection'
import FaqSection from '../components/sections/home/FaqSection'
import FinalCtaSection from '../components/sections/home/FinalCtaSection'

export default function Home() {
  // IntersectionObserver for reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )

    const rvElements = document.querySelectorAll('.rv')
    rvElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#061C1E] text-[#F6F7F1]">
      <HomeHero />
      <IdeaSection />
      <InsuranceSection />
      <RealitySection />
      <CaseDeskSection />
      <HowPiecesConnectSection />
      <CustomerJourneySection />
      <TrustSection />
      <HumanSection />
      <GroupSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  )
}
