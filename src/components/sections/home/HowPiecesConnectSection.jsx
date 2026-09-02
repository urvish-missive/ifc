import { useEffect, useRef } from 'react'

export default function HowPiecesConnectSection() {
  const mapRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mapRef.current) {
          mapRef.current.classList.add('on')
        }
      },
      { threshold: 0.2 }
    )
    if (mapRef.current) obs.observe(mapRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="ecosystem" className="bg-[#061C1E] text-[#F6F7F1] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        {/* Header */}
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            How the pieces connect
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#F6F7F1]">
            1FC Insure sits between you and everyone you would otherwise have to chase.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE]">
            A claim involves at least three organisations who do not talk to each other on your behalf. We become the one line that runs through all of them.
          </p>
        </div>

        {/* Visual Flow Map */}
        <div ref={mapRef} id="ecomap" className="ecomap rv">
          {/* Top: You */}
          <div className="emrow">
            <div className="emnode you" style={{ '--d': '0ms' }}>
              <div className="en font-display font-bold text-[17px] tracking-[-.02em] text-[#E0A139]">
                You
              </div>
              <div className="ed text-[12.8px] text-[#9DB4AC] mt-1.5 leading-[1.45]">
                The person the whole thing is actually for
              </div>
            </div>
          </div>

          {/* Connector to Core */}
          <div className="emlink">
            <span className="lbl font-mono text-[10px] tracking-[.15em] uppercase text-[#7A948D] bg-[#061C1E] px-3 py-[3px] z-10">
              One call, any need
            </span>
          </div>

          {/* Center: 1FC Insure */}
          <div className="emcore border border-[rgba(246,247,241,.24)] rounded-[14px] p-5 lg:px-8 bg-[linear-gradient(180deg,rgba(18,73,75,.92),rgba(10,45,47,.92))] shadow-[0_26px_56px_-32px_rgba(0,0,0,.75)] text-center">
            <div className="cn font-display font-bold text-[clamp(19px,2vw,23px)] tracking-[-.024em] text-[#F6F7F1]">
              1FC Insure
            </div>
            <div className="cd text-[13.6px] text-[#9DB4AC] mt-1.5">
              Advice, documentation, coordination and follow-up, held in one place
            </div>
          </div>

          {/* Split Connections */}
          <div className="emsplit relative h-[78px] max-md:h-[54px]">
            <svg viewBox="0 0 800 78" preserveAspectRatio="none" className="w-full h-full max-md:hidden" aria-hidden="true">
              <path className="ln" vectorEffect="non-scaling-stroke" d="M400 0 L400 30 L200 30 L200 78" />
              <path className="ln" vectorEffect="non-scaling-stroke" d="M400 0 L400 30 L600 30 L600 78" />
            </svg>
            <span className="lbl l1 font-mono text-[10px] tracking-[.15em] uppercase text-[#7A948D] bg-[#061C1E] px-3 py-[3px] z-10">
              Papers and admission
            </span>
            <span className="lbl l2 font-mono text-[10px] tracking-[.15em] uppercase text-[#7A948D] bg-[#061C1E] px-3 py-[3px] z-10 max-md:hidden">
              Filing and follow-up
            </span>
          </div>

          {/* Bottom Row: Hospital + Insurer & TPA */}
          <div className="embottom grid grid-cols-1 md:grid-cols-2 gap-[clamp(18px,3vw,44px)] justify-items-center">
            <div className="emnode w-full" style={{ '--d': '340ms' }}>
              <div className="en font-display font-bold text-[17px] tracking-[-.02em] text-[#F6F7F1]">
                Hospital
              </div>
              <div className="ed text-[12.8px] text-[#9DB4AC] mt-1.5 leading-[1.45]">
                Where the paperwork starts, usually at the worst hour
              </div>
            </div>
            <div className="emnode w-full" style={{ '--d': '420ms' }}>
              <div className="en font-display font-bold text-[17px] tracking-[-.02em] text-[#F6F7F1]">
                Insurer and TPA
              </div>
              <div className="ed text-[12.8px] text-[#9DB4AC] mt-1.5 leading-[1.45]">
                Where the claim is assessed and decided
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="ecoline mt-[clamp(30px,3.6vw,46px)] text-center text-[15.6px] text-[#9DB4AC] max-w-[60ch] mx-auto rv">
          1FC Insure connects you with the insurer and the hospital, so the journey holds together.{' '}
          <b className="text-[#F6F7F1] font-semibold">You stay in the middle of it, not in the queue.</b>
        </p>
      </div>
    </section>
  )
}
