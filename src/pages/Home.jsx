import React, { useEffect } from 'react'
import HomeHero from '../components/sections/home/HomeHero'
import RealitySection from '../components/sections/home/RealitySection'
import IdeaSection from '../components/sections/home/IdeaSection'
import FiveThingsSection from '../components/sections/home/FiveThingsSection'
import FourStagesSection from '../components/sections/home/FourStagesSection'
import AhaSection from '../components/sections/home/AhaSection'
import CaseDeskSection from '../components/sections/home/CaseDeskSection'
import ServiceSection from '../components/sections/home/ServiceSection'
import TrustSection from '../components/sections/home/TrustSection'
import HumanSection from '../components/sections/home/HumanSection'
import TrustNewSection from '../components/sections/home/TrustNewSection'
import EcosystemSection from '../components/sections/home/EcosystemSection'
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
      { threshold: 0.14 },
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
      <RealitySection />
      <IdeaSection />
      <FiveThingsSection />
      <FourStagesSection />
      <AhaSection />
      <CaseDeskSection />
      <ServiceSection />
      <TrustSection />
      <HumanSection />
      <TrustNewSection />
      <EcosystemSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  )
}
