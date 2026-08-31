import { useState, useEffect } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

export default function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    status: 'I have health insurance and have never claimed',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const mascot = document.getElementById('mascotCta')
    if (!mascot) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) mascot.classList.add('on') },
      { threshold: 0.1 },
    )
    obs.observe(mascot)
    return () => obs.disconnect()
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setFormSubmitted(true)
  }

  return (
    <section id="access" className="bg-[#0C3436] px-[var(--pad)] py-[clamp(52px,5.8vw,78px)] overflow-hidden">
      <div className="mx-auto max-w-[var(--maxw)] grid grid-cols-1 lg:grid-cols-[1fr_.92fr] gap-9 lg:gap-[clamp(34px,4.4vw,72px)] items-center relative">
        {/* Left copy */}
        <div className="rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Early access
          </span>
          <h2 className="mt-5 text-[clamp(30px,3.7vw,48px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] max-w-[14ch]">
            Join the first release.
          </h2>
          <p className="mt-5 max-w-[42ch] text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#9DB4AC]">
            The first group we onboard gets a customer record, a named coordinator and the case desk from day one.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 border-t border-[rgba(246,247,241,.24)] pt-5 font-mono text-[11px] tracking-[.06em] uppercase text-[#7A948D]">
            <span>No payment</span>
            <span>No policy required</span>
            <span>Leave any time</span>
          </div>
        </div>

        {/* Right form */}
        <div className="relative">
          <span id="mascotCta" className="mascot-cta absolute left-[-96px] bottom-[-30px] h-[250px] pointer-events-none z-10 hidden lg:block">
            <MascotIllustration variant="cta" className="h-full w-auto drop-shadow-[0_22px_30px_rgba(0,0,0,.5)]" />
          </span>
          <div className="relative z-20 border border-[rgba(246,247,241,.24)] rounded-[16px] p-[clamp(28px,3.2vw,40px)] bg-[rgba(6,28,30,.55)]">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <h3 className="text-2xl text-[#F6F7F1] font-display">Request Received!</h3>
                <p className="text-[#9DB4AC] mt-3">
                  Thank you, <strong className="text-[#F6F7F1]">{formData.name}</strong>. We will reply on WhatsApp at <strong className="text-[#F6F7F1]">{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="nm" className="block font-mono text-[10.5px] tracking-[.14em] uppercase text-[#9DB4AC] mb-[7px]">Name</label>
                  <input id="nm" type="text" placeholder="Your full name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[8px] px-[14px] py-[13px] text-[#F6F7F1] font-sans text-[15px] placeholder:text-[#6e8781] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    <label htmlFor="ph" className="block font-mono text-[10.5px] tracking-[.14em] uppercase text-[#9DB4AC] mb-[7px]">Mobile or WhatsApp</label>
                    <input id="ph" type="tel" placeholder="+91" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[8px] px-[14px] py-[13px] text-[#F6F7F1] font-sans text-[15px] placeholder:text-[#6e8781] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]" />
                  </div>
                  <div>
                    <label htmlFor="pc" className="block font-mono text-[10.5px] tracking-[.14em] uppercase text-[#9DB4AC] mb-[7px]">Pincode</label>
                    <input id="pc" type="text" placeholder="395007" value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[8px] px-[14px] py-[13px] text-[#F6F7F1] font-sans text-[15px] placeholder:text-[#6e8781] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="st" className="block font-mono text-[10.5px] tracking-[.14em] uppercase text-[#9DB4AC] mb-[7px]">Where are you today?</label>
                  <select id="st" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[8px] px-[14px] py-[13px] text-[#F6F7F1] font-sans text-[15px] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]">
                    <option style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>I have health insurance and have never claimed</option>
                    <option style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>I have health insurance and a claim went badly</option>
                    <option style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>I am buying health insurance soon</option>
                    <option style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>I manage policies for my parents</option>
                    <option style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>I am a POSP, agent, hospital or insurer</option>
                  </select>
                </div>
                <button type="submit" className="w-full justify-center mt-2 inline-flex items-center gap-2 rounded-[9px] bg-[#E0A139] px-6 py-[15px] text-[15px] font-semibold text-[#20160A] border border-[#E0A139] transition hover:-translate-y-0.5 hover:bg-[#EDB253]">
                  Request early access
                </button>
                <p className="font-mono text-[12.4px] text-[#7A948D] mt-3.5 leading-[1.5]">
                  We will reply on WhatsApp. Requesting early access does not create an insurance policy, cover or any commitment from 1FC.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
