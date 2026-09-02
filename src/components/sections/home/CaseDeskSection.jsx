import { useState, useEffect, useRef } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

const STATES = ['Not started', 'With us', 'In progress', 'With insurer', 'Resolved']
const OWNERS = [
  'Waiting for someone to take this on',
  'Your coordinator, on this until it closes',
  'Your coordinator, on this until it closes',
  'Your coordinator, on this until it closes',
  'Resolved and explained by your coordinator',
]

const RAIL_STEPS = [
  'Something happens, and nothing is connected',
  'You tell 1FC Insure, and someone takes it on',
  'Documentation and hospital coordination',
  'With the insurer, and still being followed',
  'Guidance until it is resolved',
]

const CASE_ROWS = [
  { from: 1, time: '23:41', title: 'You tell us something happened', sub: 'A call, a message, or the hospital reaching us directly' },
  { from: 1, time: '23:44', title: 'A coordinator takes it on', sub: 'One named person, on this until it closes' },
  { from: 2, time: '23:52', title: 'We speak to the hospital', sub: 'Insurance coordination starts with the admission team' },
  { from: 2, time: '08:15', title: 'Your document list, in one message', sub: 'Collected once, kept with the claim' },
  { from: 3, time: '14:02', title: 'Filed with the insurer', sub: 'The decision is theirs. The following up stays ours.' },
  { from: 4, time: 'D3', title: 'The outcome, explained in plain language', sub: 'What was paid, what was not, and what to do next' },
]

const PANEL_NODES = [
  {
    from: 1,
    key: 'Your coordinator',
    val: 'Named, on the case',
    sub: 'Not a queue, not a rotation',
    delay: '640ms',
  },
  {
    from: 2,
    key: 'Hospital',
    val: 'Coordinated by us',
    sub: 'Documents listed once, 7 of 7 collected',
    hasDocbar: true,
    delay: '200ms',
  },
  {
    from: 3,
    key: 'Insurer or TPA',
    val: 'The decision sits here',
    sub: 'We keep following it up from the outside',
    warn: true,
    delay: '200ms',
  },
  {
    from: 4,
    key: 'You',
    val: 'Told what it means',
    sub: 'And what the next step is, if there is',
    good: true,
    delay: '200ms',
  },
]

export default function CaseDeskSection() {
  const [stage, setStage] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const TH = [0, 0.08, 0.31, 0.54, 0.77]
    const track = trackRef.current || document.getElementById('claims')

    function onScroll() {
      if (!track) return
      const r = track.getBoundingClientRect()
      const navH = 70
      const span = r.height - (window.innerHeight - navH)
      if (span <= 0) return
      const p = Math.min(Math.max((navH - r.top) / span, 0), 1)
      let n = 0
      for (let i = TH.length - 1; i >= 0; i--) {
        if (p >= TH[i]) {
          n = i
          break
        }
      }
      setStage(n)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    /* Unified single parent section container */
    <section
      id="claims"
      ref={trackRef}
      className="desk desk-track bg-[#09272A] relative"
    >
      {/* Sticky Inner Frame */}
      <div className="desk-sticky sticky top-[70px] h-[calc(100vh-70px)] min-h-[620px] flex flex-col justify-center overflow-hidden max-lg:static max-lg:h-auto max-lg:min-h-0 max-lg:overflow-visible max-lg:pt-6 max-lg:pb-12 w-full max-w-[var(--maxw)] mx-auto px-[var(--pad)]">

        {/* Header */}
        <div className="desk-head flex justify-between items-end gap-6 flex-wrap mb-[clamp(20px,2.6vw,34px)] pt-4 sm:pt-8 md:pt-12 max-lg:items-start max-lg:mb-[18px]">
          <div className='pt-5 sm:pt-10 md:pt-20'>
            <span className="label font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] inline-flex items-center gap-3">
              <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
              When you need to claim
            </span>
            <h2 className="mt-4 text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#F6F7F1] max-w-[19ch] max-lg:max-w-none max-lg:text-[clamp(24px,6.4vw,32px)] max-lg:mt-3.5">
              You should not have to work out what happens next.
            </h2>
          </div>
          <div className="desk-progress w-[120px] h-[3px] bg-[rgba(246,247,241,.13)] rounded-sm overflow-hidden flex-none max-lg:hidden" aria-hidden="true">
            <i
              id="deskBar"
              style={{ width: `${(stage / 4) * 100}%` }}
              className="block h-full bg-[#E0A139] transition-[width] duration-500 ease-[cubic-bezier(.2,.7,.3,1)]"
            />
          </div>
        </div>

        {/* Scene Grid */}
        <div id="deskScene" data-stage={stage} className="scene desk-scene relative grid items-center gap-[clamp(20px,2.6vw,40px)] max-lg:grid-cols-1 max-lg:gap-4">
          {/* Left Rail */}
          <ol className="rail" id="deskRail">
            {RAIL_STEPS.map((t, i) => (
              <li
                key={t}
                className={`${stage > i ? 'on' : ''} ${stage === i ? 'cur' : ''} cursor-pointer`}
                onClick={() => setStage(i)}
              >
                {t}
              </li>
            ))}
          </ol>

          {/* Center Field */}
          <div className="field relative min-h-[430px] flex items-center justify-center lg:pl-[clamp(0px,7.6vw,112px)] max-lg:min-h-[352px] max-lg:pl-0 max-sm:min-h-[392px]">
            {/* Floating fragment cards for Stage 0 */}
            <div className="frags absolute inset-[-4%_-44%_-4%_-10%] pointer-events-none max-lg:inset-0 max-sm:block" aria-hidden="true">
              <div className="frag f1">
                <b>Hospital admission desk</b>asks for the policy
              </div>
              <div className="frag f2">
                <b>Policy PDF</b>in an email from 2023
              </div>
              <div className="frag f3">
                <b>Insurer helpline</b>on hold, 11:47pm
              </div>
              <div className="frag f4">
                <b>TPA reference</b>nobody wrote down
              </div>
              <div className="frag f5">
                <b>Family group chat</b>five people, no answer
              </div>
            </div>

            {/* Case Card */}
            <div id="deskCard" className="deskcard case w-full max-w-[560px] rounded-[14px] bg-[linear-gradient(180deg,rgba(18,73,75,.95),rgba(10,45,47,.95))] border border-[rgba(246,247,241,.24)] shadow-[0_30px_70px_-30px_rgba(0,0,0,.78)] overflow-hidden">
              <div className="case-top flex items-center justify-between gap-3.5 px-[22px] py-4 border-b border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.45)]">
                <span id="deskId" className="case-id font-mono text-[12.5px] tracking-[0.08em]">CASE &middot; 1FC-H-000412</span>
                <span id="deskPill" className={`pill ${stage === 4 ? 'done' : 'pill-live'}`}>
                  <span className="dot" />
                  <span id="deskPillTxt">{STATES[stage]}</span>
                </span>
              </div>

              <div className="case-body px-[22px] py-3 max-sm:px-4 max-sm:py-1.5">
                {CASE_ROWS.map(({ from, time, title, sub }) => {
                  const isOn = stage >= from
                  const isCurrentActive = stage === from
                  return (
                    <div
                      key={title}
                      data-from={from}
                      className={`crow drow ${isOn ? 'on' : ''} ${stage === 4 || !isCurrentActive ? 'done' : 'now'}`}
                    >
                      <span className="t">{time}</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>{title}</strong>
                        <span>{sub}</span>
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="case-foot flex items-center gap-3.5 px-[22px] py-[15px] border-t border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.35)] font-mono text-[10.5px] tracking-[.07em] uppercase text-[#9DB4AC] flex-wrap">
                <span className="owner flex items-center gap-[9px] text-[#F6F7F1] normal-case tracking-normal font-sans text-[13.5px]">
                  <span className="avatar w-[26px] h-[26px] rounded-full bg-[#E0A139] text-[#20160a] grid place-items-center text-[10.5px] font-bold font-sans">RK</span>
                  <span id="deskOwner">{OWNERS[stage]}</span>
                </span>
              </div>
            </div>

            {/* Mascot Desk */}
            <span
              id="mascotDesk"
              className={`mascot mascot-desk absolute left-0 bottom-[-4px] pointer-events-none z-[3] ${stage >= 1 ? 'on' : ''}`}
              aria-hidden="true"
            >
              <MascotIllustration variant="desk" className="h-[220px] sm:h-[260px]" />
            </span>
          </div>

          {/* Right Panel */}
          <div className="panel">
            {PANEL_NODES.map(({ from, key, val, sub, hasDocbar, warn, good, delay }) => {
              const isOn = stage >= from
              return (
                <div
                  key={key}
                  data-from={from}
                  style={{ '--d': delay }}
                  className={`pnode ${warn ? 'warn' : ''} ${good ? 'good' : ''} ${isOn ? 'on' : ''}`}
                >
                  <div className="pk">{key}</div>
                  <div className="pv">
                    {val}
                    <small>{sub}</small>
                  </div>
                  {hasDocbar && (
                    <div className="docbar">
                      <i />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
