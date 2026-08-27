import React, { useState, useEffect, useRef } from 'react'
import MascotIllustration from '../components/ui/MascotIllustration'

export default function Home() {
  // Signature Rupee Readout Data from IRDAI 2023-24 Report
  const [activeSeg, setActiveSeg] = useState('paid')
  const [barDrawn, setBarDrawn] = useState(false)
  const barRef = useRef(null)

  // Counter Values for Animated Signals
  const [counts, setCounts] = useState({
    claims: 0,
    settled: 0,
    avg: 0,
  })

  // Signature Case Desk Interactive Stage State (0..4)
  const [stage, setStage] = useState(0)

  // Final Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    status: 'I have health insurance and have never claimed',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Rupee Data map
  const rupeeData = {
    paid: {
      k: 'Paid',
      t: '₹83,493 crore reached the policyholder',
      a: '71.29% of the total amount claimed',
      p: 'Settled claims, cashless at the hospital or reimbursed afterwards. Around two thirds went through the cashless route, which only works if somebody chases the pre-authorisation while the patient is still at the admission desk.',
      f: 'Cashless depends on paperwork arriving complete and on time. That is a coordination job, and it is the job 1FC Insure owns.',
    },
    dis: {
      k: 'Disallowed',
      t: '₹15,100 crore was disallowed',
      a: '12.90% of the total amount claimed',
      p: 'Amounts struck off before any coverage judgement: non-payable consumables, items outside the policy schedule, proportionate deductions from room rent clauses, paperwork that did not match.',
      f: 'Most of this is decided by what the file looks like when it arrives. A checklist issued at admission, rather than a scramble at discharge, is the biggest lever a family has.',
    },
    rep: {
      k: 'Repudiated',
      t: '₹10,937 crore was repudiated',
      a: '9.34% of the total amount claimed',
      p: 'Claims reviewed and then denied, usually on waiting periods, disclosure of a pre-existing condition, or a policy exclusion. About 11% of claims by count were repudiated in the same year.',
      f: '1FC cannot overturn a repudiation. It can make sure the terms were explained at purchase, the grounds are recorded on the case, and the family knows the grievance and ombudsman route.',
    },
    out: {
      k: 'Outstanding',
      t: '₹7,585 crore was still outstanding',
      a: '6.48% of the total amount claimed',
      p: 'Claims neither paid nor denied at the close of the financial year. About 6% of claims by count were still pending on 31 March 2024.',
      f: 'This is the bucket a case desk exists for. A pending claim with a named owner, a clock and a follow-up log behaves very differently from one sitting in an inbox.',
    },
  }

  // Stage Meta Constants
  const STAGE_TITLES = [
    'Unassigned',
    'Open',
    'In progress',
    'With insurer',
    'Closed',
  ]
  const STAGE_OWNERS = [
    'Waiting for an owner',
    'Owned by a named coordinator',
    'Owned by a named coordinator',
    'Owned by a named coordinator',
    'Closed by a named coordinator',
  ]

  // IntersectionObserver for reveal elements & rupee bar animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            if (entry.target === barRef.current) {
              setBarDrawn(true)
            }
          }
        })
      },
      { threshold: 0.14 },
    )

    const rvElements = document.querySelectorAll('.rv')
    rvElements.forEach((el) => observer.observe(el))
    if (barRef.current) observer.observe(barRef.current)

    // Animated Count up for stats when in view
    let countStarted = false
    const countObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted) {
          countStarted = true
          let duration = 1200
          let startTime = null

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)

            setCounts({
              claims: (3.26 * ease).toFixed(2),
              settled: (82.46 * ease).toFixed(2),
              avg: Math.floor(31086 * ease),
            })

            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 },
    )

    const realityEl = document.getElementById('reality')
    if (realityEl) countObserver.observe(realityEl)

    // Scroll-driven stage advancement for the case desk section
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
      observer.disconnect()
      countObserver.disconnect()
      window.removeEventListener('scroll', onDeskScroll)
      window.removeEventListener('resize', onDeskScroll)
    }
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#061C1E] text-[#F6F7F1]">
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="label rv">Insurance broking with a case desk</span>
            <h1 className="rv">
              Buying the policy<br />
              is the <span className="em">easy half.</span>
            </h1>
            <p className="lede rv">
              1FC Insure exists for the other half. The 11pm admission, the document list nobody warned you about, the claim that has to be chased, the renewal that arrives as a cold call. One relationship. One case number. One team that answers.
            </p>
            <div className="hero-cta rv">
              <a className="btn btn-primary" href="#access">
                Request early access &rarr;
              </a>
              <a className="btn btn-ghost" href="#desk">
                Watch a case open
              </a>
            </div>
            <div className="hero-meta rv">
              <span>Health, life and general</span>
              <span>Broking and POSP</span>
              <span>Hospital coordination</span>
            </div>
          </div>

          <div className="stage rv">
            <div className="case">
              <div className="case-top">
                <span className="case-id">CASE &middot; 1FC-H-000412</span>
                <span className="pill pill-live">
                  <span className="dot" />
                  In progress
                </span>
              </div>
              <div className="case-body">
                <div className="crow done">
                  <span className="t">23:41</span>
                  <span className="m"><i /></span>
                  <span className="c">
                    <strong>Assistance requested</strong>
                    <span>Raised by a family member at the admission desk.</span>
                  </span>
                </div>
                <div className="crow done">
                  <span className="t">23:44</span>
                  <span className="m"><i /></span>
                  <span className="c">
                    <strong>Case opened, owner assigned</strong>
                    <span>Routed to the health claims desk.</span>
                  </span>
                </div>
                <div className="crow now">
                  <span className="t">23:52</span>
                  <span className="m"><i /></span>
                  <span className="c">
                    <strong>Hospital coordination underway</strong>
                    <span>Admission desk contacted, checklist issued to the family.</span>
                  </span>
                </div>
              </div>
              <div className="case-foot">
                <span className="owner">
                  <span className="avatar">RK</span>
                  Owned by a named coordinator
                </span>
              </div>
            </div>

            <span className="mascot mascot-hero float" id="mascotHero">
              <MascotIllustration variant="hero" className="h-[260px] sm:h-[300px]" />
            </span>
          </div>
        </div>
      </section>

      {/* ---------- REALITY & SIGNALS ---------- */}
      <section className="band light" id="reality">
        <div className="wrap">
          <div className="head rv">
            <span className="label">The reality</span>
            <h2>Of every &#8377;100 claimed on health insurance, &#8377;71.29 was paid.</h2>
            <p className="lede">
              Indian insurers received health claims worth about &#8377;1.17 lakh crore in FY 2023-24 and paid &#8377;83,493 crore of it. The remainder was disallowed, repudiated or still outstanding at the year end. Select a band to see where it went.
            </p>
          </div>

          <div className="signals">
            <div className="sig rv">
              <div className="big">
                <span className="count">{counts.claims || '3.26'}</span>
                <em>crore</em>
              </div>
              <div className="lbl">health insurance claims were filed with Indian insurers in FY 2023-24.</div>
            </div>
            <div className="sig rv">
              <div className="big">
                <span className="count">{counts.settled || '82.46'}</span>
                <em>%</em>
              </div>
              <div className="lbl">of them were settled. Around 11% were repudiated and about 6% were still pending at the year end.</div>
            </div>
            <div className="sig rv">
              <div className="big">
                &#8377;<span className="count">{counts.avg ? counts.avg.toLocaleString('en-IN') : '31,086'}</span>
              </div>
              <div className="lbl">was the average amount paid per claim. Roughly two thirds were settled cashless, the rest reimbursed after the family paid first.</div>
            </div>
          </div>

          <div className="reality-grid">
            <div className="rv">
              {/* Rupee Bar */}
              <div className={`bar ${barDrawn ? 'drawn' : ''}`} id="rupeeBar" ref={barRef} role="group" aria-label="Health insurance claim amounts, FY 2023-24">
                <button
                  type="button"
                  className="seg seg-paid"
                  style={{ width: barDrawn ? '71.29%' : '0%' }}
                  aria-pressed={activeSeg === 'paid'}
                  onClick={() => setActiveSeg('paid')}
                  onMouseEnter={() => setActiveSeg('paid')}
                >
                  <span>&#8377;71.29 paid</span>
                </button>
                <button
                  type="button"
                  className="seg seg-dis"
                  style={{ width: barDrawn ? '12.90%' : '0%' }}
                  aria-pressed={activeSeg === 'dis'}
                  onClick={() => setActiveSeg('dis')}
                  onMouseEnter={() => setActiveSeg('dis')}
                >
                  <span>12.90</span>
                </button>
                <button
                  type="button"
                  className="seg seg-rep"
                  style={{ width: barDrawn ? '9.34%' : '0%' }}
                  aria-pressed={activeSeg === 'rep'}
                  onClick={() => setActiveSeg('rep')}
                  onMouseEnter={() => setActiveSeg('rep')}
                >
                  <span>9.34</span>
                </button>
                <button
                  type="button"
                  className="seg seg-out"
                  style={{ width: barDrawn ? '6.48%' : '0%' }}
                  aria-pressed={activeSeg === 'out'}
                  onClick={() => setActiveSeg('out')}
                  onMouseEnter={() => setActiveSeg('out')}
                >
                  <span>6.48</span>
                </button>
              </div>

              <div className="legend">
                <b className="cursor-pointer" onClick={() => setActiveSeg('paid')}><i className="bg-[#8FCBA6]" />Paid</b>
                <b className="cursor-pointer" onClick={() => setActiveSeg('dis')}><i className="bg-[#EBBE72]" />Disallowed</b>
                <b className="cursor-pointer" onClick={() => setActiveSeg('rep')}><i className="bg-[#DC8C74]" />Repudiated</b>
                <b className="cursor-pointer" onClick={() => setActiveSeg('out')}><i className="bg-[#BFCBBE]" />Outstanding</b>
              </div>

              {/* Dynamic Interactive Readout */}
              <div className="readout" id="readout" aria-live="polite">
                <div className="k">{rupeeData[activeSeg].k}</div>
                <h3>{rupeeData[activeSeg].t}</h3>
                <div className="amt">{rupeeData[activeSeg].a}</div>
                <p>{rupeeData[activeSeg].p}</p>
                <div className="fc">
                  <b>What a case desk changes</b>
                  <span>{rupeeData[activeSeg].f}</span>
                </div>
              </div>

              <p className="src mt-4">
                IRDAI Annual Report 2023-24. Percentages are of claim amount, not claim count, and total 100.01% due to rounding in the source.
              </p>
            </div>

            {/* Regulatory Clocks Widget */}
            <div className="clocks rv">
              <span className="label">Why now</span>
              <h3>The regulator has set the clocks. Somebody still has to run them.</h3>
              <p>
                The IRDAI Master Circular on Health Insurance Business, dated 29 May 2024, replaced 55 earlier circulars and put hard deadlines on the parts of a claim that used to drift.
              </p>
              <div className="clock">
                <div className="num">
                  1<small>hour</small>
                </div>
                <p>to grant cashless pre-authorisation once the hospital sends a complete request.</p>
              </div>
              <div className="clock">
                <div className="num">
                  3<small>hours</small>
                </div>
                <p>to issue final authorisation at discharge, with the insurer bearing any extra hospital charge beyond that.</p>
              </div>
              <div className="clock">
                <div className="num">
                  69<small>per cent</small>
                </div>
                <p>of general insurance grievances in FY 2024-25 were about claims: delays, underpayment or rejection.</p>
              </div>
              <p className="src mt-5">
                IRDAI Master Circular on Health Insurance Business, 29 May 2024. IRDAI Annual Report 2024-25.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- IDEA & BOUNDARY ---------- */}
      <section className="idea" id="idea">
        <div className="wrap">
          <span className="label rv">The idea</span>
          <div className="idea-split">
            <div className="statement rv">
              A policy is a promise. <span className="dim">A case is a commitment.</span>
            </div>
            <div className="rv">
              <p className="lede">
                Aggregators end at checkout. Administrators begin at adjudication. The part in between, where insurance is actually experienced, belongs to nobody. 1FC Insure turns every moment of need into a case with an owner, a checklist, a status and a clock.
              </p>
              <div className="boundary mt-6">
                1FC assists, coordinates and follows up. Coverage decisions, adjudication, approvals and settlement stay with the insurer and TPA under your policy terms. We do not blur that line, we make it navigable.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SIGNATURE CASE DESK INTERACTIVE STAGE ---------- */}
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

      {/* ---------- WHAT YOU GET / CAPABILITIES ---------- */}
      <section className="band light" id="service">
        <div className="wrap">
          <div className="head rv">
            <span className="label">What you get</span>
            <h2>Four things a family actually holds.</h2>
          </div>
          <div className="caplist">
            <div className="caprow rv">
              <div>
                <div className="rt">Customer record</div>
                <h3>One place where your cover actually lives.</h3>
              </div>
              <div>
                <p>
                  Policies, family members, contact history and past cases sit in a single customer record, so the team that picks up your call already knows what you hold and what happened last time.
                </p>
              </div>
            </div>
            <div className="caprow rv">
              <div>
                <div className="rt">Case desk</div>
                <h3>Every request becomes a case, not a phone call.</h3>
              </div>
              <div>
                <p>
                  A service request, a claim intimation and a hospital coordination call all open the same object, with an owner, a status, a document set and a full history. Nothing lives in a thread only one person can see.
                </p>
                <div className="chipset">
                  <span className="chip">named owner</span>
                  <span className="chip">live status</span>
                  <span className="chip">document checklist</span>
                  <span className="chip">turnaround clock</span>
                </div>
              </div>
            </div>
            <div className="caprow rv">
              <div>
                <div className="rt">Hospitalisation</div>
                <h3>Someone on the phone who has done this before.</h3>
              </div>
              <div>
                <p>
                  Hospital-facing coordination and documentation support, insurer and TPA follow-up, and ambulance assistance where that service is available under the applicable 1FC service model.
                </p>
              </div>
            </div>
            <div className="caprow rv">
              <div>
                <div className="rt">Renewal</div>
                <h3>Renewal as continuity, not a cold call.</h3>
              </div>
              <div>
                <p>
                  Reminders, advice and renewal support from the same relationship, across health, life and general insurance, handled by the people who handled your claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST PILLARS ---------- */}
      <section className="band" id="trust">
        <div className="wrap">
          <div className="head rv">
            <span className="label">Why 1FC Insure</span>
            <h2>Built to be accountable for the part that is usually nobody's job.</h2>
          </div>
          <div className="pillars">
            <div className="pil rv">
              <h4>Built on 1FC infrastructure</h4>
              <p>
                1FC Insure shares engineering standards, design language and platform thinking with 1FCode, the group's financial operating system. It is not a brochure with a contact form behind it.
              </p>
            </div>
            <div className="pil rv">
              <h4>One relationship, whole lifecycle</h4>
              <p>
                Advisory, distribution, operations, claims, hospital coordination and renewals work from one customer record, so you never have to explain your situation twice.
              </p>
            </div>
            <div className="pil rv">
              <h4>Clear about where our role ends</h4>
              <p>
                We assist and coordinate. We do not underwrite risk and we do not adjudicate claims. The case marks the exact point a decision passes to the insurer, and keeps tracking it.
              </p>
            </div>
            <div className="pil rv">
              <h4>Secure by design</h4>
              <p>
                Role-based access and audit trails across every team, with consent and privacy controls defined alongside compliance and legal rather than added afterwards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HUMAN SECTION ---------- */}
      <section className="human">
        <div className="wrap">
          <div className="humancard rv">
            <div className="figure">
              <span className="glow" aria-hidden="true" />
              <MascotIllustration variant="trust" className="h-[220px] sm:h-[260px] mx-auto" />
            </div>
            <div className="content">
              <span className="label">Human when it matters</span>
              <h2>A person owns your case. It says so on the case.</h2>
              <p className="lede">
                The technology exists so that nothing falls through and every turnaround becomes visible. The part that actually calms a family at midnight is a name, a number and somebody who has done this before.
              </p>
              <div className="assigncard">
                <span className="avatar">RK</span>
                <span>
                  <span className="ak">Assigned to</span>
                  <span className="av">Health claims desk, named coordinator</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE 1FC GROUP ---------- */}
      <section className="band" id="ecosystem">
        <div className="wrap">
          <div className="head rv">
            <span className="label">The 1FC group</span>
            <h2>Part of 1FC.</h2>
            <p className="lede mt-4">
              1FC Insure is not a standalone insurance site. It sits inside a wider financial platform and shares its design language, engineering standards and service philosophy with the rest of the group.
            </p>
          </div>
          <div className="eco">
            <div className="enode rv">
              <div className="nm">1FCode</div>
              <div className="ds">The financial operating system the group is built on.</div>
            </div>
            <div className="enode self rv">
              <div className="nm">1FC Insure</div>
              <div className="ds">Insurance broking, distribution and the case desk. You are here.</div>
            </div>
            <div className="enode rv">
              <div className="nm">Shared foundation</div>
              <div className="ds">One platform layer, one security model and one design system across every 1FC product.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ACCORDION ---------- */}
      <section className="band" id="faq">
        <div className="wrap">
          <div className="head rv">
            <span className="label">Questions</span>
            <h2>Reasonable doubts.</h2>
          </div>
          <div className="faq rv">
            <details open>
              <summary>What exactly is 1FC Insure?</summary>
              <p>
                An insurance broking and POSP distribution business with a customer assistance layer built into it. You buy a policy through 1FC, and the same relationship handles service requests, hospitalisation coordination, claim assistance, documentation and renewals afterwards.
              </p>
            </details>
            <details>
              <summary>Is it an insurance company, a broker, or a platform?</summary>
              <p>
                A broker with a service platform behind it. 1FC does not underwrite risk and does not settle claims, because insurers do that. The platform exists so that the assistance we provide is owned, tracked and measurable rather than dependent on who happens to answer the phone.
              </p>
            </details>
            <details>
              <summary>How is this different from an insurance aggregator?</summary>
              <p>
                Aggregators are built to be excellent at the purchase, and their product effectively ends when the policy is issued. 1FC Insure treats the purchase as the beginning. The differentiating work is hospital coordination, document handling, claim follow-up and renewal continuity, with a case record so you can see it happening.
              </p>
            </details>
            <details>
              <summary>Who is it for?</summary>
              <p>
                Households where one adult holds the policies for parents, spouse and children and becomes the family's helpline. It is built for the person coordinating a hospital admission from another city at night. On the partner side, it is built for POSPs and advisors who need a service story, and for hospitals who would rather deal with one accountable counterpart than a different family every time.
              </p>
            </details>
            <details>
              <summary>Can you guarantee my claim gets approved?</summary>
              <p>
                No, and be wary of anyone who says otherwise. Approvals, exclusions, cashless eligibility and settlement are decided by the insurer and TPA under your policy terms. What 1FC takes responsibility for is that your case is complete, submitted properly, followed up and explained to you in plain language.
              </p>
            </details>
            <details>
              <summary>What happens to my documents and health information?</summary>
              <p>
                Documents attach to your case and are visible to the team handling it, under role-based access with audit trails on every action. Consent, retention and privacy controls are defined alongside compliance and legal, and published in full.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA FORM ---------- */}
      <section className="final" id="access">
        <div className="wrap final-in">
          <div className="rv">
            <span className="label">Early access</span>
            <h2 className="mt-5">Join the first release.</h2>
            <p className="lede mt-5 max-w-[42ch]">
              The first group we onboard gets a customer record, a named coordinator and the case desk from day one.
            </p>
            <div className="hero-meta border-t-[color:var(--line-d2)] max-w-[420px]">
              <span>No payment</span>
              <span>No policy required</span>
              <span>Leave any time</span>
            </div>
          </div>

          <div className="formwrap rv">
            <span className="mascot mascot-cta on" id="mascotCta">
              <MascotIllustration variant="cta" className="h-[210px] sm:h-[250px]" />
            </span>

            <div className="formcard">
              {formSubmitted ? (
                <div className="py-8 text-center">
                  <h3 className="text-2xl text-[#F6F7F1]">Request Received!</h3>
                  <p className="text-[#9DB4AC] mt-3">
                    Thank you, <strong>{formData.name}</strong>. We will reply on WhatsApp at <strong>{formData.phone}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="fld">
                    <label htmlFor="nm">Name</label>
                    <input
                      id="nm"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="two">
                    <div className="fld">
                      <label htmlFor="ph">Mobile or WhatsApp</label>
                      <input
                        id="ph"
                        type="tel"
                        placeholder="+91"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="pc">Pincode</label>
                      <input
                        id="pc"
                        type="text"
                        placeholder="395007"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="fld">
                    <label htmlFor="st">Where are you today?</label>
                    <select
                      id="st"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="I have health insurance and have never claimed">
                        I have health insurance and have never claimed
                      </option>
                      <option value="I have health insurance and a claim went badly">
                        I have health insurance and a claim went badly
                      </option>
                      <option value="I am buying health insurance soon">
                        I am buying health insurance soon
                      </option>
                      <option value="I manage policies for my parents">
                        I manage policies for my parents
                      </option>
                      <option value="I am a POSP, agent, hospital or insurer">
                        I am a POSP, agent, hospital or insurer
                      </option>
                    </select>
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Request early access
                  </button>

                  <p className="finenote">
                    We will reply on WhatsApp. Requesting early access does not create an insurance policy, cover or any commitment from 1FC.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
