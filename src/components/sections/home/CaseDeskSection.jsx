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

export default function CaseDeskSection() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
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
        if (p >= STAGE_THRESHOLDS[i]) {
          n = i
          break
        }
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
    <section className="desk" id="desk">
      <div className="desk-track" id="deskTrack">
        <div className="desk-sticky">
          <div className="desk-inner">
            <div className="desk-head">
              <div>
                <span className="label">The case desk</span>
                <h2>Watch one night turn into one case.</h2>
              </div>
              <div className="desk-progress" aria-hidden="true">
                <i id="deskBar" style={{ width: `${(stage / 4) * 100}%`, transition: 'width 0.3s' }} />
              </div>
            </div>

            <div className="scene desk-scene" id="deskScene" data-stage={stage}>
              {/* Left Interactive Rail Steps */}
              <ol className="rail" id="deskRail">
                <li
                  className={`${stage > 0 ? 'on' : ''} ${stage === 0 ? 'cur' : ''} cursor-pointer`}
                  onClick={() => setStage(0)}
                >
                  Something happens, and nothing is connected
                </li>
                <li
                  className={`${stage > 1 ? 'on' : ''} ${stage === 1 ? 'cur' : ''} cursor-pointer`}
                  onClick={() => setStage(1)}
                >
                  A case opens and takes an owner
                </li>
                <li
                  className={`${stage > 2 ? 'on' : ''} ${stage === 2 ? 'cur' : ''} cursor-pointer`}
                  onClick={() => setStage(2)}
                >
                  Documents and the hospital, handled
                </li>
                <li
                  className={`${stage > 3 ? 'on' : ''} ${stage === 3 ? 'cur' : ''} cursor-pointer`}
                  onClick={() => setStage(3)}
                >
                  Handed to the insurer, still tracked
                </li>
                <li
                  className={`${stage > 4 ? 'on' : ''} ${stage === 4 ? 'cur' : ''} cursor-pointer`}
                  onClick={() => setStage(4)}
                >
                  Closed, and remembered
                </li>
              </ol>

              <div className="field">
                {/* Scatter Fragments */}
                <div className="frags" aria-hidden="true">
                  <div className="frag f1"><b>Hospital admission desk</b>asks for the policy</div>
                  <div className="frag f2"><b>Policy PDF</b>in an email from 2023</div>
                  <div className="frag f3"><b>Insurer helpline</b>on hold, 11:47pm</div>
                  <div className="frag f4"><b>TPA reference</b>nobody wrote down</div>
                  <div className="frag f5"><b>Family group chat</b>five people, no answer</div>
                </div>

                {/* Dynamic Case Record Card */}
                <div className="deskcard case" id="deskCard">
                  <div className="case-top">
                    <span className="case-id" id="deskId">CASE &middot; 1FC-H-000412</span>
                    <span className={`pill pill-live ${stage === 4 ? 'done' : ''}`} id="deskPill">
                      <span className="dot" />
                      <span id="deskPillTxt">{STAGE_TITLES[stage]}</span>
                    </span>
                  </div>
                  <div className="case-body">
                    <div className={`crow drow ${stage >= 1 ? 'done on' : ''}`}>
                      <span className="t">23:41</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>Assistance requested</strong>
                        <span>Raised by a family member, not the policyholder</span>
                      </span>
                    </div>
                    <div className={`crow drow ${stage >= 1 ? 'done on' : ''}`}>
                      <span className="t">23:44</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>Case opened, owner assigned</strong>
                        <span>Health claims desk, named coordinator</span>
                      </span>
                    </div>
                    <div className={`crow drow ${stage >= 2 ? 'done on' : ''}`}>
                      <span className="t">23:52</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>Hospital desk contacted</strong>
                        <span>Coordination started with the admission team</span>
                      </span>
                    </div>
                    <div className={`crow drow ${stage >= 2 ? 'done on' : ''}`}>
                      <span className="t">08:15</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>Checklist issued, seven documents</strong>
                        <span>Collected once, attached to the case</span>
                      </span>
                    </div>
                    <div className={`crow drow ${stage >= 3 ? (stage > 3 ? 'done on' : 'now on') : ''}`}>
                      <span className="t">14:02</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>Submitted to the insurer</strong>
                        <span>Decision authority passes here. Follow-up continues.</span>
                      </span>
                    </div>
                    <div className={`crow drow ${stage >= 4 ? 'done on' : ''}`}>
                      <span className="t">D3</span>
                      <span className="m"><i /></span>
                      <span className="c">
                        <strong>Outcome recorded and explained</strong>
                        <span>In plain language, against the case</span>
                      </span>
                    </div>
                  </div>
                  <div className="case-foot">
                    <span className="owner">
                      <span className="avatar">RK</span>
                      <span id="deskOwner">{STAGE_OWNERS[stage]}</span>
                    </span>
                  </div>
                </div>

                <span className={`mascot mascot-desk ${stage >= 1 ? 'on' : ''}`} id="mascotDesk">
                  <MascotIllustration variant="desk" className="h-[240px] sm:h-[280px]" />
                </span>
              </div>

              {/* Right Side Panel Nodes */}
              <div className="panel">
                <div className={`pnode ${stage >= 1 ? 'on' : ''}`}>
                  <div className="pk">Coordinator</div>
                  <div className="pv">Named, on the case<small>Not a queue, not a rotation</small></div>
                </div>
                <div className={`pnode ${stage >= 2 ? 'on' : ''}`}>
                  <div className="pk">Documents</div>
                  <div className="pv">7 of 7 collected<small>Uploaded once, reused everywhere</small></div>
                  <div className="docbar"><i style={{ width: stage >= 2 ? '100%' : '0%' }} /></div>
                </div>
                <div className={`pnode warn ${stage >= 3 ? 'on' : ''}`}>
                  <div className="pk">Boundary</div>
                  <div className="pv">Insurer decides<small>1FC keeps tracking from the outside</small></div>
                </div>
                <div className={`pnode good ${stage >= 4 ? 'on' : ''}`}>
                  <div className="pk">History</div>
                  <div className="pv">Attached to the customer<small>Renewal starts here, not from zero</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
