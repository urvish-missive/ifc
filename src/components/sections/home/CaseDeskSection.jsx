import React, { useState, useEffect } from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

const STAGE_TITLES = ['Unassigned', 'Open', 'In progress', 'With insurer', 'Closed']
const STAGE_OWNERS = [
  'Waiting for an owner',
  'Owned by a named coordinator',
  'Owned by a named coordinator',
  'Owned by a named coordinator',
  'Closed by a named coordinator',
]

const RAIL_STEPS = [
  { s: 0, t: 'Something happens, and nothing is connected' },
  { s: 1, t: 'A case opens and takes an owner' },
  { s: 2, t: 'Documents and the hospital, handled' },
  { s: 3, t: 'Handed to the insurer, still tracked' },
  { s: 4, t: 'Closed, and remembered' },
]

const CASE_ROWS = [
  { at: 1, time: '23:41', title: 'Assistance requested', sub: 'Raised by a family member, not the policyholder' },
  { at: 1, time: '23:44', title: 'Case opened, owner assigned', sub: 'Health claims desk, named coordinator' },
  { at: 2, time: '23:52', title: 'Hospital desk contacted', sub: 'Coordination started with the admission team' },
  { at: 2, time: '08:15', title: 'Checklist issued, seven documents', sub: 'Collected once, attached to the case' },
  { at: 3, time: '14:02', title: 'Submitted to the insurer', sub: 'Decision authority passes here. Follow-up continues.' },
  { at: 4, time: 'D3', title: 'Outcome recorded and explained', sub: 'In plain language, against the case' },
]

const PANEL_NODES = [
  { at: 1, key: '', label: 'Coordinator', val: 'Named, on the case', sub: 'Not a queue, not a rotation' },
  { at: 2, key: '', label: 'Documents', val: '7 of 7 collected', sub: 'Uploaded once, reused everywhere', bar: true },
  { at: 3, key: 'warn', label: 'Boundary', val: 'Insurer decides', sub: '1FC keeps tracking from the outside' },
  { at: 4, key: 'good', label: 'History', val: 'Attached to the customer', sub: 'Renewal starts here, not from zero' },
]

export default function CaseDeskSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // On mobile/tablet, jump to final stage immediately so card + panel are fully revealed
    if (window.innerWidth < 1080) {
      setStage(4)
      return
    }

    const deskTrack = document.getElementById('deskTrack')
    const STAGE_THRESHOLDS = [0, 0.06, 0.24, 0.46, 0.70]

    function onDeskScroll() {
      if (!deskTrack) return
      const r = deskTrack.getBoundingClientRect()
      const navH = 72
      const span = r.height - (window.innerHeight - navH)
      if (span <= 0) return
      const p = Math.min(Math.max((navH - r.top) / span, 0), 1)
      let n = 0
      for (let i = STAGE_THRESHOLDS.length - 1; i >= 0; i--) {
        if (p >= STAGE_THRESHOLDS[i]) { n = i; break }
      }
      setStage(n)
    }

    window.addEventListener('scroll', onDeskScroll, { passive: true })
    window.addEventListener('resize', onDeskScroll, { passive: true })
    onDeskScroll()

    return () => {
      window.removeEventListener('scroll', onDeskScroll)
      window.removeEventListener('resize', onDeskScroll)
    }
  }, [])

  return (
    <section id="desk" className="bg-[#09272A]">
      <div id="deskTrack" className="desk-track relative">
        <div className="sticky top-[70px] h-[calc(100vh-70px)] min-h-[620px] flex items-center overflow-hidden max-sm:static max-sm:h-auto max-sm:min-h-0 max-sm:overflow-visible max-sm:py-8">
          <div className="w-full px-[var(--pad)] max-w-[var(--maxw)] mx-auto">
            {/* Desk header */}
            <div className="mb-[clamp(20px,2.6vw,34px)] flex flex-wrap items-end justify-between gap-3 max-sm:flex-col max-sm:gap-3">
              <div>
                <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D]">
                  <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
                  The case desk
                </span>
                <h2 className="mt-4 text-[clamp(27px,3.3vw,43px)] max-sm:text-[clamp(22px,5vw,32px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1]">
                  Watch one night turn into one case.
                </h2>
              </div>
              <div className="w-[120px] h-[3px] flex-none overflow-hidden rounded-sm bg-[rgba(246,247,241,.13)] max-sm:w-full max-sm:mt-2">
                <div style={{ width: `${(stage / 4) * 100}%`, transition: 'width .4s cubic-bezier(.2,.7,.3,1)' }} className="h-full bg-[#E0A139] rounded-sm" />
              </div>
            </div>

            {/* Scene */}
            <div id="deskScene" data-stage={stage} className="scene desk-scene relative grid items-center gap-[clamp(20px,2.6vw,40px)] max-sm:grid-cols-1 max-sm:gap-5">
              {/* Left rail */}
              <ol className="rail" id="deskRail">
                {RAIL_STEPS.map(({ s, t }) => (
                  <li
                    key={s}
                    className={`${stage > s ? 'on' : ''} ${stage === s ? 'cur' : ''} cursor-pointer`}
                    onClick={() => setStage(s)}
                  >
                    {t}
                  </li>
                ))}
              </ol>

              {/* Centre: field + card + mascot */}
              <div className="relative lg:pl-[clamp(0px,7.6vw,112px)]">
                {/* Fragment cards */}
                <div className="frags absolute inset-0 pointer-events-none z-1 max-sm:hidden">
                  <div className="frag f1"><b>Hospital admission desk</b>asks for the policy</div>
                  <div className="frag f2"><b>Policy PDF</b>in an email from 2023</div>
                  <div className="frag f3"><b>Insurer helpline</b>on hold, 11:47pm</div>
                  <div className="frag f4"><b>TPA reference</b>nobody wrote down</div>
                  <div className="frag f5"><b>Family group chat</b>five people, no answer</div>
                </div>

                {/* Case card */}
                <div className="deskcard case w-full max-w-[560px] rounded-[14px] overflow-hidden">
                  <div className="flex items-center justify-between gap-3 px-[18px] py-[14px] border-b border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.45)] flex-wrap row-gap-2">
                    <span className="font-mono text-[12.5px] tracking-[0.08em]">CASE &middot; 1FC-H-000412</span>
                    <span className={`pill ${stage === 4 ? 'done' : 'pill-live'}`}>
                      <span className="dot" />
                      {STAGE_TITLES[stage]}
                    </span>
                  </div>
                  <div className="case-body px-[18px] py-[6px_16px] max-sm:py-1.5">
                    {CASE_ROWS.map(({ at, time, title, sub }) => {
                      const isNow = at === stage
                      const isDone = stage >= at
                      return (
                        <div key={time} className={`crow drow ${isDone ? 'done on' : ''} ${isNow && !isDone ? 'now on' : ''}`}>
                          <span className="t">{time}</span>
                          <span className="m"><i /></span>
                          <span className="c">
                            <strong>{title}</strong>
                            <span className="max-sm:hidden">{sub}</span>
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="case-foot flex items-center gap-3 px-[18px] py-[14px] border-t border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.35)] font-mono text-[10.5px] tracking-[.06em] uppercase text-[#9DB4AC] flex-wrap">
                    <span className="owner flex items-center gap-2 text-[#F6F7F1] normal-case tracking-normal font-sans text-[13px]">
                      <span className="avatar w-6 h-6 rounded-full bg-[#E0A139] text-[#20160a] grid place-items-center text-[10.5px] font-bold font-sans">RK</span>
                      {STAGE_OWNERS[stage]}
                    </span>
                  </div>
                </div>

                {/* Mascot */}
                <span className={`mascot mascot-desk absolute left-0 bottom-[-4px] h-[190px] pointer-events-none z-[3] transition-opacity duration-[0.6s] transition-transform duration-[0.6s] max-sm:hidden ${stage >= 1 ? 'on' : ''}`} id="mascotDesk">
                  <MascotIllustration variant="desk" className="h-[240px] sm:h-[280px]" />
                </span>
              </div>

              {/* Right panel */}
              <div className="panel flex flex-col gap-3 max-sm:hidden">
                {PANEL_NODES.map(({ at, key, label, val, sub, bar }) => (
                  <div key={label} className={`pnode ${key} ${stage >= at ? 'on' : ''}`}>
                    <div className="pk">{label}</div>
                    <div className="pv">{val}<small>{sub}</small></div>
                    {bar && <div className="docbar"><i style={{ width: stage >= 2 ? '100%' : '0%', transitionDuration: '1.4s' }} /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
