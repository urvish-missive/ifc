import { useEffect, useRef } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

const HERO_CARD_ROWS = [
  { time: '23:41', cls: 'done', title: 'You told us something happened', sub: 'Raised by a family member at the admission desk.' },
  { time: '23:44', cls: 'done', title: 'Someone took it on', sub: 'A named coordinator now owns this from end to end.' },
  { time: '23:52', cls: 'now', title: 'We are talking to the hospital', sub: 'Papers listed, coordination underway. You do not have to chase it.' },
]

export default function HomeHero() {
  const mascotRef = useRef(null)

  useEffect(() => {
    let raf = null
    const handleMouseMove = (ev) => {
      if (!mascotRef.current || window.innerWidth < 1041) return
      const x = (ev.clientX / window.innerWidth - 0.5) * 11
      const y = (ev.clientY / window.innerHeight - 0.5) * 6
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (mascotRef.current) {
            mascotRef.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
          }
          raf = null
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-[clamp(48px,5.8vw,78px)] pb-[clamp(40px,4.4vw,62px)]">
      {/* Radial ambient background */}
      <div
        className="absolute pointer-events-none -z-10"
        style={{
          inset: '-30% -10% auto -10%',
          height: '130%',
          background:
            'radial-gradient(56% 54% at 18% 4%, rgba(18, 73, 75, .6), transparent 70%), radial-gradient(40% 40% at 95% 2%, rgba(224, 161, 57, .09), transparent 70%)',
        }}
      />

      <div className="max-w-[var(--maxw)] mx-auto px-[var(--pad)] relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-center gap-[clamp(28px,3.2vw,52px)]">
        {/* Left Column */}
        <div>
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Suraksha hi nahi, sache saath ka vaada
          </span>
          <h1 className="mt-6 text-[clamp(33px,4.2vw,56px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#F6F7F1] rv">
            Insurance that stays with you<br />
            <span className="text-[#E0A139]">beyond the policy.</span>
          </h1>
          <p className="mt-6 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[48ch] rv">
            You can buy insurance almost anywhere. With 1FC Insure you also get someone who stays involved after it is bought: when a claim starts, when the hospital wants papers, when nobody will tell you what happens next.
          </p>

          <div className="flex gap-3 mt-[34px] flex-wrap rv">
            <a
              href="#access"
              className="inline-flex items-center gap-[9px] text-[15px] font-semibold px-6 py-[15px] rounded-[9px] bg-[#E0A139] text-[#20160A] border border-[#E0A139] transition hover:-translate-y-0.5 hover:bg-[#EDB253]"
            >
              Start with 1FC Insure &rarr;
            </a>
            <a
              href="#claims"
              className="inline-flex items-center gap-[9px] text-[15px] font-semibold px-6 py-[15px] rounded-[9px] bg-transparent text-[#F6F7F1] border border-[rgba(246,247,241,.24)] transition hover:-translate-y-0.5 hover:border-[#F6F7F1]"
            >
              See what happens when you claim
            </a>
          </div>

          {/* Contrast cards: Side-by-side with equal height on desktop */}
          <div className="contrast-grid mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-[580px] items-stretch rv">
            <div className="flex flex-col justify-between p-4 rounded-[12px] border border-[rgba(246,247,241,.12)] bg-[rgba(6,28,30,.45)] shadow-sm">
              <div>
                <span className="font-mono text-[10px] tracking-[.18em] uppercase text-[#7A948D] block mb-2 font-medium">
                  Usually
                </span>
                <p className="text-[14px] text-[#9DB4AC] leading-[1.5] m-0">
                  Buy a policy. Receive a PDF. Work the rest out yourself.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 rounded-[12px] border border-[rgba(224,161,57,.35)] bg-[linear-gradient(180deg,rgba(18,73,75,.5),rgba(10,45,47,.5))] shadow-[0_8px_20px_-10px_rgba(0,0,0,.5)]">
              <div>
                <span className="font-mono text-[10px] tracking-[.18em] uppercase text-[#E0A139] block mb-2 font-medium">
                  With 1FC Insure
                </span>
                <p className="text-[14px] text-[#F6F7F1] leading-[1.5] m-0">
                  Get covered. Something happens. <b className="text-[#E0A139] font-semibold">Someone is already with you.</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Card + Mascot */}
        <div className="relative lg:pl-[clamp(0px,8.4vw,124px)] max-sm:pt-0 max-sm:mt-6">
          <div className="case relative z-10 rounded-[14px] bg-[linear-gradient(180deg,rgba(18,73,75,.95),rgba(10,45,47,.95))] border border-[rgba(246,247,241,.24)] shadow-[0_30px_70px_-30px_rgba(0,0,0,.78)] overflow-hidden rv">
            {/* Card Top */}
            <div className="case-top flex items-center justify-between gap-3.5 px-[22px] py-4 border-b border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.45)]">
              <span className="case-id font-mono text-[12.5px] tracking-[0.08em]">CASE &middot; 1FC-H-000412</span>
              <span className="pill pill-live font-mono text-[10.5px] tracking-[.13em] uppercase px-[11px] py-[5px] rounded-full border border-[rgba(224,161,57,.45)] text-[#E0A139] bg-[rgba(224,161,57,.09)] inline-flex items-center gap-[7px]">
                <span className="dot w-1.5 h-1.5 rounded-full bg-[#E0A139] animate-[pulse_2.2s_infinite]" />
                With you
              </span>
            </div>

            {/* Card Body */}
            <div className="case-body px-[22px] py-3">
              {HERO_CARD_ROWS.map(({ time, cls, title, sub }) => (
                <div
                  key={title}
                  className={`crow ${cls} grid grid-cols-[82px_22px_1fr] max-sm:grid-cols-[58px_18px_1fr] gap-4 max-sm:gap-2.5 items-start py-[13px] border-b border-dashed border-[rgba(246,247,241,.09)] last:border-0`}
                >
                  <span className="t font-mono text-[11.5px] max-sm:text-[10.5px] text-[#7A948D] pt-0.5">{time}</span>
                  <span className="m flex justify-center pt-1.5">
                    <i className={`w-[9px] h-[9px] rounded-full border-[1.5px] border-[#7A948D] transition-all duration-400 ${cls === 'done' ? 'bg-[#7FC49A] border-[#7FC49A]' : cls === 'now' ? 'bg-[#E0A139] border-[#E0A139] shadow-[0_0_0_4px_rgba(224,161,57,.16)]' : ''}`} />
                  </span>
                  <span className="c">
                    <strong className="block text-[14.5px] font-semibold">{title}</strong>
                    <span className="block text-[13px] text-[#9DB4AC] leading-[1.5] mt-0.5">{sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Card Foot */}
            <div className="case-foot flex items-center gap-3.5 px-[22px] py-[15px] border-t border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.35)] font-mono text-[10.5px] tracking-[.07em] uppercase text-[#9DB4AC] flex-wrap">
              <span className="owner flex items-center gap-[9px] text-[#F6F7F1] normal-case tracking-normal font-sans text-[13.5px]">
                <span className="avatar w-[26px] h-[26px] rounded-full bg-[#E0A139] text-[#20160a] grid place-items-center text-[10.5px] font-bold font-sans">RK</span>
                Your coordinator, on this until it closes
              </span>
            </div>
          </div>

          {/* Hero Mascot */}
          <span
            ref={mascotRef}
            className="mascot mascot-hero absolute left-[-20px] bottom-[-8px] h-[clamp(202px,20vw,292px)] pointer-events-none z-[3] max-sm:hidden"
            aria-hidden="true"
          >
            <MascotIllustration variant="hero" className="h-full w-auto drop-shadow-[0_24px_30px_rgba(0,0,0,.45)]" />
          </span>
        </div>
      </div>
    </section>
  )
}
