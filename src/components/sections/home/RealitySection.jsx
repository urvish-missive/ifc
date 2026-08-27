import React, { useState, useEffect, useRef } from 'react'

const RUPEE_DATA = {
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

export default function RealitySection() {
  const [activeSeg, setActiveSeg] = useState('paid')
  const [barDrawn, setBarDrawn] = useState(false)
  const barRef = useRef(null)
  const [counts, setCounts] = useState({ claims: 0, settled: 0, avg: 0 })

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

    return () => {
      observer.disconnect()
      countObserver.disconnect()
    }
  }, [])

  return (
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
              <div className="k">{RUPEE_DATA[activeSeg].k}</div>
              <h3>{RUPEE_DATA[activeSeg].t}</h3>
              <div className="amt">{RUPEE_DATA[activeSeg].a}</div>
              <p>{RUPEE_DATA[activeSeg].p}</p>
              <div className="fc">
                <b>What a case desk changes</b>
                <span>{RUPEE_DATA[activeSeg].f}</span>
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
  )
}
