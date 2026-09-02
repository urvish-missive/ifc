import { useState, useEffect, useRef } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

const STEPS = [
  {
    t: 'Where you start',
    b: 'A policy bought at some point, sitting in an email. You are covered for something, and you could not say exactly what.',
    you: 'Covered, unclear how',
    fc: 'Your record and your people',
    hosp: 'Admission and papers',
    ins: 'Decides the claim',
  },
  {
    t: 'The first conversation is not a quote',
    b: 'We go through what you already hold and where it leaves you exposed, including the disclosures most people rush and most claims later turn on.',
    you: 'We know what you hold',
  },
  {
    t: 'Cover, placed with advice',
    b: 'Health leads, because that is where service failure hurts most. Life and general sit in the same relationship rather than scattering across four apps.',
    you: 'Covered, and it is explained',
  },
  {
    t: 'One record, held by us',
    b: 'Policies, family members, renewal dates and documents live in one file. There is nothing for you to log into and no reference number to keep safe.',
    fc: 'Your record and your people',
  },
  {
    t: 'Something happens',
    b: 'Eleven at night. A parent is being admitted. This is the moment insurance either works or it does not.',
    you: 'A parent is being admitted',
  },
  {
    t: 'You tell us. That is your whole job.',
    b: 'One call or one message. You do not have to know which team to ask, which form applies, or what the correct word for your problem is.',
    fc: 'Case open',
  },
  {
    t: 'One person, not a queue',
    b: 'Service usually means whoever is free, then whoever is free next, and the explaining starts again each time. Here the case goes to one named coordinator and stays with them.',
    fc: 'Owned by Rakesh K.',
  },
  {
    t: 'We hold the lines you would be holding',
    b: 'Hospital insurance desk, insurer intimation, the document list in one message, the filing and the follow-up. Two organisations, and the same person still owns your case.',
    fc: 'Coordinating both sides',
    hosp: 'Coordinated by us',
    ins: 'Claim filed with them',
  },
  {
    t: 'The answer comes back, in plain language',
    b: 'The insurer makes the decision. Your coordinator goes through it with you line by line, then speaks to the hospital billing desk so you are not working it out at a counter.',
    you: 'Told what it means',
    ins: 'Decision made',
  },
  {
    t: 'And it stays with you',
    b: 'Nothing is thrown away when the case closes. It sits on your record, so the next call starts where this one finished and renewal becomes a conversation rather than a reminder email.',
    you: 'Known, not starting over',
    fc: 'Still your people',
    hosp: 'On your record',
    ins: 'On your record',
  },
]

const N = STEPS.length
const W = [0.55, 1, 1, 1, 1, 1, 1.9, 1.35, 1.6, 1.7]
let TOT = 0
W.forEach((x) => { TOT += x })
const EDGE = []
let ci = 0
W.forEach((x) => { EDGE.push(ci / TOT); ci += x })
EDGE.push(1)

function stateFromProgress(p) {
  if (p <= 0) return 0
  if (p >= 1) return N - 1
  for (let k = N - 1; k >= 0; k--) {
    if (p >= EDGE[k]) return k
  }
  return 0
}

function progressForState(n) {
  if (n <= 0) return 0
  return EDGE[n] + (EDGE[n + 1] - EDGE[n]) * 0.3
}

const NODE_IN = { you: 0, health: 2, life: 2, general: 2, fc: 3, hosp: 4, ins: 7 }
const WIRE_IN = { health: 2, life: 2, general: 2, fc: 3, hosp: 7, ins: 7, own: 6 }
const HOT = { 5: ['fc'], 7: ['hosp', 'ins'] }
const COOL = { 8: ['ins', 'fc'] }

export default function HiwJourneySection({ activeParty }) {
  const [step, setStep] = useState(0)
  const [isSwapping, setIsSwapping] = useState(false)
  const trackRef = useRef(null)

  // Derive dynamic node subtitle text
  const getSub = (key, fallback) => {
    for (let k = step; k >= 0; k--) {
      if (STEPS[k][key]) return STEPS[k][key]
    }
    return fallback
  }

  const getBounds = () => {
    if (!trackRef.current) return null
    const r = trackRef.current.getBoundingClientRect()
    const navH = 70
    const span = r.height - (window.innerHeight - navH)
    return { top: r.top + window.pageYOffset, nav: navH, span }
  }

  const scrollToStep = (targetStep) => {
    if (targetStep < 0 || targetStep >= N) return
    const b = getBounds()
    setIsSwapping(true)
    setTimeout(() => {
      setStep(targetStep)
      setIsSwapping(false)
    }, 140)

    if (b && b.span > 0) {
      window.scrollTo({
        top: b.top - b.nav + b.span * progressForState(targetStep),
        behavior: 'smooth',
      })
    }
  }

  // Scroll listener that updates state based on position
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          ticking = false
          const b = getBounds()
          if (b && b.span > 0) {
            const p = (window.pageYOffset - (b.top - b.nav)) / b.span
            const newStep = stateFromProgress(Math.min(Math.max(p, 0), 1))
            setStep((prev) => (prev !== newStep ? newStep : prev))
          }
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Keyboard navigation when stage is focused
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault()
      scrollToStep(Math.min(N - 1, step + 1))
    }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault()
      scrollToStep(Math.max(0, step - 1))
    }
  }

  const current = STEPS[step]

  return (
    <section className="exhibit bg-[var(--paper)] pt-[clamp(30px,4vw,60px)] max-md:pt-6" id="journey">
      <div
        ref={trackRef}
        id="jtrack"
        className="jtrack relative h-[calc((100vh-var(--navh))+392vh)] max-md:h-[calc((100vh-var(--navh))+368vh)]"
        data-done={step > 0 ? '1' : '0'}
      >
        <div className="jsticky sticky top-[var(--navh)] h-[calc(100vh-var(--navh))] min-h-[580px] max-md:min-h-0 flex items-center justify-center overflow-hidden">
          <div className="jsticky-in w-full mx-auto px-[var(--pad)]">
            
            {/* The Stage */}
            <div
              className={`jstg relative w-full h-[clamp(348px,30vw,430px)] max-md:h-[clamp(310px,46vh,370px)] bg-[#E4E9DC] border border-[var(--line-l2)] rounded-[18px] max-md:rounded-[14px] overflow-hidden ${
                activeParty ? 'focus' : ''
              }`}
              id="stage"
              data-state={step}
              tabIndex={0}
              role="group"
              aria-label="Walkthrough of the 1FC Insure customer journey. Click next or use arrow keys."
              onKeyDown={handleKeyDown}
            >
              {/* Desktop SVG Wires */}
              <svg className="wires wsvg-d w-full h-full" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className={`w wd ${step >= WIRE_IN.health ? 'on' : ''} ${HOT[step]?.includes('health') ? 'hot' : ''} ${COOL[step]?.includes('health') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M419 191 L267 109"
                />
                <path
                  className={`w wd ${step >= WIRE_IN.life ? 'on' : ''} ${HOT[step]?.includes('life') ? 'hot' : ''} ${COOL[step]?.includes('life') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M500 191 L500 81"
                />
                <path
                  className={`w wd ${step >= WIRE_IN.general ? 'on' : ''} ${HOT[step]?.includes('general') ? 'hot' : ''} ${COOL[step]?.includes('general') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M581 191 L733 109"
                />
                <path
                  className={`w wd ${step >= WIRE_IN.fc ? 'on' : ''} ${HOT[step]?.includes('fc') ? 'hot' : ''} ${COOL[step]?.includes('fc') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M500 279 L500 360"
                />
                <path
                  className={`w wd ${step >= WIRE_IN.hosp ? 'on' : ''} ${HOT[step]?.includes('hosp') ? 'hot' : ''} ${COOL[step]?.includes('hosp') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M377 446 L283 479"
                />
                <path
                  className={`w wd ${step >= WIRE_IN.ins ? 'on' : ''} ${HOT[step]?.includes('ins') ? 'hot' : ''} ${COOL[step]?.includes('ins') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M623 446 L717 479"
                />
                <path
                  className={`w own wd ${step >= WIRE_IN.own ? 'on' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M615 281 L744 337"
                />
                <circle className={`wdot wd ${step >= WIRE_IN.own ? 'on' : ''}`} cx="744" cy="337" r="5" />
              </svg>

              {/* Mobile SVG Wires */}
              <svg className="wires wsvg-m w-full h-full" viewBox="0 0 380 520" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className={`w wm ${step >= WIRE_IN.health ? 'on' : ''} ${HOT[step]?.includes('health') ? 'hot' : ''} ${COOL[step]?.includes('health') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M161 136 L92 64"
                />
                <path
                  className={`w wm ${step >= WIRE_IN.life ? 'on' : ''} ${HOT[step]?.includes('life') ? 'hot' : ''} ${COOL[step]?.includes('life') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M190 136 L190 64"
                />
                <path
                  className={`w wm ${step >= WIRE_IN.general ? 'on' : ''} ${HOT[step]?.includes('general') ? 'hot' : ''} ${COOL[step]?.includes('general') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M219 136 L288 64"
                />
                <path
                  className={`w wm ${step >= WIRE_IN.fc ? 'on' : ''} ${HOT[step]?.includes('fc') ? 'hot' : ''} ${COOL[step]?.includes('fc') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M190 196 L190 266"
                />
                <path
                  className={`w wm ${step >= WIRE_IN.hosp ? 'on' : ''} ${HOT[step]?.includes('hosp') ? 'hot' : ''} ${COOL[step]?.includes('hosp') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M169 326 L111 409"
                />
                <path
                  className={`w wm ${step >= WIRE_IN.ins ? 'on' : ''} ${HOT[step]?.includes('ins') ? 'hot' : ''} ${COOL[step]?.includes('ins') ? 'cool' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M211 326 L269 409"
                />
                <path
                  className={`w own wm ${step >= WIRE_IN.own ? 'on' : ''}`}
                  vectorEffect="non-scaling-stroke"
                  d="M272 200 L296 244"
                />
                <circle className={`wdot wm ${step >= WIRE_IN.own ? 'on' : ''}`} cx="296" cy="244" r="4.5" />
              </svg>

              {/* History ring (Step 10 / index 9) */}
              <div className={`hist ${step >= 9 ? 'on' : ''}`} aria-hidden="true">
                <span>History kept</span>
              </div>

              {/* Cover Nodes (Health, Life, General) */}
              <div className={`node small jcov n-health ${step >= NODE_IN.health ? 'on' : ''} ${activeParty === 'you' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">Health</div>
                  <div className="ns">We lead here</div>
                </div>
              </div>
              <div className={`node small jcov n-life ${step >= NODE_IN.life ? 'on' : ''} ${activeParty === 'you' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">Life</div>
                  <div className="ns">Placed with you</div>
                </div>
              </div>
              <div className={`node small jcov n-general ${step >= NODE_IN.general ? 'on' : ''} ${activeParty === 'you' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">General</div>
                  <div className="ns">Motor and home</div>
                </div>
              </div>

              {/* Core Nodes: You, 1FC Insure, Hospital, Insurer & TPA */}
              <div className={`node you n-you ${step >= NODE_IN.you ? 'on' : ''} ${activeParty === 'you' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">You</div>
                  <div className="ns">{getSub('you', 'Covered, unclear how')}</div>
                </div>
              </div>

              <div className={`node core n-fc ${step >= NODE_IN.fc ? 'on' : ''} ${activeParty === 'fc' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">1FC Insure</div>
                  <div className="ns">{getSub('fc', 'Your record and your people')}</div>
                </div>
              </div>

              <div className={`node small jdim n-hosp ${step >= NODE_IN.hosp ? 'on' : ''} ${activeParty === 'hosp' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">Hospital</div>
                  <div className="ns">{getSub('hosp', 'Admission and papers')}</div>
                </div>
              </div>

              <div className={`node small jdim n-ins ${step >= NODE_IN.ins ? 'on' : ''} ${activeParty === 'ins' ? 'lit' : ''}`}>
                <div className="nb">
                  <div className="nt">Insurer and TPA</div>
                  <div className="ns">{getSub('ins', 'Decides the claim')}</div>
                </div>
              </div>

              {/* Floating Chips (Step 2 / index 1) */}
              <span className={`jchip ch1 ${step === 1 ? 'on' : ''}`} style={{ '--d': '60ms' }}>Who is covered</span>
              <span className={`jchip ch2 ${step === 1 ? 'on' : ''}`} style={{ '--d': '180ms' }}>What you already hold</span>
              <span className={`jchip ch3 ${step === 1 ? 'on' : ''}`} style={{ '--d': '300ms' }}>Gaps and waiting periods</span>
              <span className={`jchip ch4 ${step === 1 ? 'on' : ''}`} style={{ '--d': '420ms' }}>What must be disclosed</span>

              {/* Handoff Queue (Step 7 / index 6) */}
              <div className={`hq ${step === 6 ? 'on' : ''}`} aria-hidden="true">
                <span className="hl">Usually</span>
                <div className="hqrow">
                  <i className="anon" />
                  <i className="anon" />
                  <i className="anon" />
                  <span className="hqtok" />
                </div>
                <span className="hc">The case moves between whoever is free. You explain it again each time.</span>
              </div>

              {/* Coordinator Mascot & Owner Tag (Step 7+ / index 6+) */}
              <span className={`coord ${step >= 6 ? 'on' : ''}`} aria-hidden="true">
                <MascotIllustration variant="trust" className="h-full w-auto" />
              </span>

              <div className={`otag ${step >= 6 ? 'on' : ''}`} aria-hidden="true">
                <span className="av">RK</span>
                <span className="ot">Coordinator<b>Rakesh K.</b></span>
              </div>
            </div>

            {/* Console */}
            <div className="console mt-[clamp(14px,1.8vw,22px)]">
              {/* Top: Step count & 10 ticks */}
              <div className="ctop flex items-center gap-4">
                <div className="ccount font-mono text-[11px] tracking-[.16em] text-[var(--ink-3)] whitespace-nowrap flex-none">
                  <b>{step + 1 < 10 ? `0${step + 1}` : step + 1}</b> / 10
                </div>

                <div className="ctrack grid grid-cols-10 gap-[5px] flex-1">
                  {STEPS.map((s, idx) => (
                    <button
                      key={s.t}
                      type="button"
                      aria-label={`Go to step ${idx + 1} of 10: ${s.t}`}
                      onClick={() => scrollToStep(idx)}
                      className={`h-1.5 rounded-[2px] transition-all cursor-pointer ${
                        idx < step
                          ? 'seen bg-[#9BB29E]'
                          : idx === step
                          ? 'cur bg-[var(--amber)] scale-y-150'
                          : 'bg-[var(--line-l2)]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Title, Body, and Buttons */}
              <div className="jrow grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[clamp(16px,2.4vw,48px)] items-end mt-[clamp(12px,1.8vw,22px)]">
                <div className="ctext">
                  <h3 className={`text-[clamp(19px,2.2vw,28px)] font-display font-bold tracking-[-.028em] text-[var(--ink)] m-0 leading-[1.2] transition-opacity duration-200 ${isSwapping ? 'swap opacity-0' : 'opacity-100'}`}>
                    {current.t}
                  </h3>
                  <p className={`text-[15px] text-[var(--ink-2)] leading-[1.55] mt-2 max-w-[58ch] min-h-[2.9em] transition-opacity duration-200 ${isSwapping ? 'swap opacity-0' : 'opacity-100'}`}>
                    {current.b}
                  </p>
                </div>

                <div className="cbtns flex items-center gap-2 max-lg:w-full">
                  <button
                    type="button"
                    disabled={step === 0}
                    onClick={() => scrollToStep(step - 1)}
                    className="btn-line bg-transparent border border-[var(--line-l2)] text-[var(--ink)] rounded-[9px] px-4 py-2.5 text-[14px] font-semibold cursor-pointer transition hover:border-[var(--ink)] disabled:opacity-35 disabled:cursor-default"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (step === N - 1) {
                        const el = document.getElementById('access')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        scrollToStep(step + 1)
                      }
                    }}
                    className="btn-go flex-1 lg:flex-none inline-flex items-center justify-center bg-[var(--ink)] text-[var(--cream)] border border-[var(--ink)] rounded-[9px] px-5 py-2.5 text-[14.5px] font-semibold cursor-pointer whitespace-nowrap transition hover:bg-[#0F4143] hover:-translate-y-[2px]"
                  >
                    {step === N - 1 ? 'Start with 1FC Insure' : 'What happens next'}
                    <span className="arw ml-2 inline-block transition-transform duration-200">&rarr;</span>
                  </button>
                </div>
              </div>

              <div className="scrollhint mt-2.5 max-md:mt-1.5 font-mono text-[9px] tracking-[.14em] uppercase text-[var(--ink-3)] max-md:hidden">
                {step === 0 ? 'Scroll to step through, or use the controls' : ''}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
