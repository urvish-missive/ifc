import { useState, useEffect } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

export default function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    need: 'health',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const mascot = document.getElementById('mascotCta')
    if (!mascot) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) mascot.classList.add('on')
      },
      { threshold: 0.1 }
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
    <section id="access" className="final bg-[#0C3436] px-[var(--pad)] py-[clamp(52px,5.8vw,78px)] overflow-hidden">
      <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_.92fr] gap-[clamp(34px,4.4vw,72px)] items-center relative">
        {/* Left Copy */}
        <div className="rv">
          <span className="label font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] inline-flex items-center gap-3">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Get started
          </span>
          <h2 className="mt-[22px] text-[clamp(30px,3.7vw,48px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#F6F7F1] max-w-[14ch]">
            Start your relationship with 1FC Insure.
          </h2>
          <p className="lede mt-[22px] text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[44ch]">
            Tell us where you are today. We will come back to you with advice, not a quote sheet, and stay with you from there.
          </p>
          <div className="hero-meta mt-9 pt-5 border-t border-[rgba(246,247,241,.24)] flex gap-[22px] flex-wrap font-mono text-[11px] tracking-[.07em] uppercase text-[#7A948D] max-w-[420px]">
            <span>No payment</span>
            <span>No policy required</span>
            <span>Leave any time</span>
          </div>
        </div>

        {/* Right Form */}
        <div className="formwrap relative rv">
          <span
            id="mascotCta"
            className="mascot mascot-cta absolute left-[-96px] bottom-[-30px] h-[250px] pointer-events-none z-[1] max-lg:hidden"
            aria-hidden="true"
          >
            <MascotIllustration variant="cta" className="h-full w-auto drop-shadow-[0_22px_30px_rgba(0,0,0,.5)]" />
          </span>

          <div className="formcard relative z-10 border border-[rgba(246,247,241,.24)] rounded-[16px] p-[clamp(28px,3.2vw,40px)] bg-[rgba(6,28,30,.55)]">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <h3 className="text-2xl text-[#F6F7F1] font-display font-bold">Request Received!</h3>
                <p className="text-[#9DB4AC] mt-3 leading-relaxed">
                  Thank you, <strong className="text-[#F6F7F1]">{formData.name}</strong>. A licensed advisor will reach out to <strong className="text-[#F6F7F1]">{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="fld mb-4">
                  <label htmlFor="fName" className="block font-mono text-[10px] tracking-[.16em] uppercase text-[#9DB4AC] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="fName"
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[9px] px-[15px] py-3.5 text-[#F6F7F1] font-sans text-[15px] placeholder:text-[#6E8781] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]"
                  />
                </div>

                <div className="two grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                  <div className="fld mb-0">
                    <label htmlFor="fPhone" className="block font-mono text-[10px] tracking-[.16em] uppercase text-[#9DB4AC] mb-2">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      id="fPhone"
                      placeholder="+91 98765 43210"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[9px] px-[15px] py-3.5 text-[#F6F7F1] font-sans text-[15px] placeholder:text-[#6E8781] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]"
                    />
                  </div>

                  <div className="fld mb-0">
                    <label htmlFor="fEmail" className="block font-mono text-[10px] tracking-[.16em] uppercase text-[#9DB4AC] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="fEmail"
                      placeholder="name@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[9px] px-[15px] py-3.5 text-[#F6F7F1] font-sans text-[15px] placeholder:text-[#6E8781] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]"
                    />
                  </div>
                </div>

                <div className="fld mb-4">
                  <label htmlFor="fNeed" className="block font-mono text-[10px] tracking-[.16em] uppercase text-[#9DB4AC] mb-2">
                    What are you looking for?
                  </label>
                  <select
                    id="fNeed"
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full bg-[rgba(246,247,241,.05)] border border-[rgba(246,247,241,.24)] rounded-[9px] px-[15px] py-3.5 text-[#F6F7F1] font-sans text-[15px] focus:border-[#E0A139] focus:outline-none focus:bg-[rgba(246,247,241,.07)]"
                  >
                    <option value="health" style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>Health insurance (for family or parents)</option>
                    <option value="term" style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>Term life insurance</option>
                    <option value="motor" style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>Motor or general insurance</option>
                    <option value="advice" style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>Not sure, need advice across lines</option>
                    <option value="partner" style={{ backgroundColor: '#061C1E', color: '#F6F7F1' }}>I am an agent, POSP or hospital partner</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center mt-2 inline-flex items-center gap-[9px] text-[15px] font-semibold px-6 py-[15px] rounded-[9px] bg-[#E0A139] text-[#20160A] border border-[#E0A139] transition hover:-translate-y-0.5 hover:bg-[#EDB253]"
                >
                  Get in touch with an advisor &rarr;
                </button>

                <p className="finenote text-[12.4px] text-[#7A948D] mt-4 leading-[1.5]">
                  No spam, no automated cold calling. A licensed advisor will reach out to understand your situation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
