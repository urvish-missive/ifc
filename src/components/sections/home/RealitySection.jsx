import { useState, useEffect, useRef } from 'react'

const STAT_SIGNALS = [
  { to: 3.26, dec: 2, unit: 'crore', label: 'health insurance claims were filed with Indian insurers in FY 2023-24.' },
  { to: 82.46, dec: 2, unit: '%', label: 'of them were settled. Around 11% were repudiated and about 6% were still pending at the year end.' },
  { to: 69, dec: 0, unit: '%', label: 'of general insurance grievances in FY 2024-25 were about claims: delays, underpayment or rejection.' },
]

const BAR_SEGMENTS = [
  { key: 'paid', w: '71.29%', col: '#8FCBA6', label: '₹71.29 paid' },
  { key: 'dis', w: '12.90%', col: '#EBBE72', label: '12.90' },
  { key: 'rep', w: '9.34%', col: '#DC8C74', label: '9.34' },
  { key: 'out', w: '6.48%', col: '#BFCBBE', label: '6.48' },
]

const LEGEND_ITEMS = [
  { key: 'paid', col: '#8FCBA6', label: 'Paid' },
  { key: 'dis', col: '#EBBE72', label: 'Disallowed' },
  { key: 'rep', col: '#DC8C74', label: 'Repudiated' },
  { key: 'out', col: '#BFCBBE', label: 'Outstanding' },
]

const REGULATORY_CLOCKS = [
  { num: '1', unit: 'hour', body: 'to grant cashless pre-authorisation once the hospital sends a complete request.' },
  { num: '3', unit: 'hours', body: 'to issue final authorisation at discharge, with the insurer bearing any extra hospital charge beyond that.' },
  { num: '60', unit: 'months', body: 'after which a health policy passes the moratorium and most claims can no longer be contested.' },
]

const RUPEE_DATA = {
  paid: {
    k: 'Paid',
    t: '₹83,493 crore reached the policyholder',
    a: '71.29% of the total amount claimed',
    p: 'Settled claims, cashless at the hospital or reimbursed afterwards. Around two thirds went through the cashless route, which only works if somebody chases the pre-authorisation while the patient is still at the admission desk.',
    f: 'Cashless depends on paperwork arriving complete and on time. That is coordination work, and it is the work we take off you.',
  },
  dis: {
    k: 'Disallowed',
    t: '₹15,100 crore was disallowed',
    a: '12.9% of the total amount claimed',
    p: 'Amounts struck off before any coverage judgement: non-payable consumables, items outside the policy schedule, proportionate deductions from room rent clauses, paperwork that did not match.',
    f: 'Most of this is decided by what the file looks like when it arrives. A checklist issued at admission, rather than a scramble at discharge, is the biggest lever a family has.',
  },
  rep: {
    k: 'Repudiated',
    t: '₹10,937 crore was repudiated',
    a: '9.34% of the total amount claimed',
    p: 'Claims reviewed and then denied, usually on waiting periods, disclosure of a pre-existing condition, or a policy exclusion. About 11% of claims by count were repudiated in the same year.',
    f: '1FC Insure cannot overturn a repudiation. It can make sure the terms were explained at purchase, the grounds are recorded on the case, and the family knows the grievance and ombudsman route.',
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
  const [counts, setCounts] = useState([0, 0, 0])

  useEffect(() => {
    const barObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setBarDrawn(true)
      },
      { threshold: 0.14 }
    )
    if (barRef.current) barObs.observe(barRef.current)

    // Run counters
    let countStarted = false
    const countObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countStarted) {
          countStarted = true
          const startTime = performance.now()
          const dur = 1150

          const tick = (now) => {
            const p = Math.min((now - startTime) / dur, 1)
            const e = 1 - Math.pow(1 - p, 3)
            setCounts(
              STAT_SIGNALS.map((s) => {
                const val = s.to * e
                return s.dec > 0 ? val.toFixed(s.dec) : Math.round(val).toString()
              })
            )
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.2 }
    )

    const sec = document.getElementById('reality')
    if (sec) countObs.observe(sec)

    return () => {
      barObs.disconnect()
      countObs.disconnect()
    }
  }, [])

  return (
    <section id="reality" className="bg-[#EAEDE3] text-[#0C3436] px-[var(--pad)] pb-[clamp(54px,6.2vw,80px)] pt-0">
      <div className="max-w-[var(--maxw)] mx-auto">
        <hr className="hair border-0 h-px bg-[#C9D2C2] mb-[clamp(48px,5.6vw,76px)]" />

        {/* Section Head */}
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Why this matters
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#0C3436]">
            A claim is where insurance either works or does not.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#43584E]">
            Of every ₹100 claimed on health insurance in India, ₹71.29 was paid. The rest was disallowed, repudiated or still outstanding at the year end. Much of that difference comes down to paperwork, timing and follow-up. Select a band to see what happened to it.
          </p>
        </div>

        {/* 3 Stat Signals */}
        <div className="signals mt-[clamp(32px,3.6vw,46px)] grid grid-cols-1 md:grid-cols-3 gap-[clamp(18px,2.4vw,30px)] max-md:gap-0">
          {STAT_SIGNALS.map((s, i) => (
            <div
              key={s.label}
              className="sig border-t border-[#B4C0AC] py-[clamp(22px,2.4vw,30px)] pr-[clamp(24px,2.4vw,32px)] max-md:pr-0 rv"
            >
              <div className="big font-display font-bold tracking-[-.042em] text-[clamp(34px,3.8vw,48px)] leading-none text-[#0C3436]">
                <span>{counts[i] || s.to}</span>
                <em className="not-italic text-[.52em] tracking-[-.01em] text-[#7A8C80] ml-1">{s.unit}</em>
              </div>
              <div className="lbl text-[14.6px] text-[#43584E] mt-3.5 leading-[1.55] max-w-[34ch]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reality Grid: Rupee Bar + Clocks */}
        <div className="reality-grid mt-[clamp(34px,4vw,52px)] grid grid-cols-1 lg:grid-cols-[1.25fr_.75fr] gap-[clamp(32px,5vw,80px)] items-start">
          {/* Left Column: Interactive Bar */}
          <div className="rv">
            <div
              ref={barRef}
              id="rupeeBar"
              role="group"
              aria-label="Health insurance claim amounts, FY 2023-24"
              className="bar flex h-[78px] rounded-[10px] overflow-hidden border border-[#B4C0AC] bg-[#DDE3D6]"
            >
              {BAR_SEGMENTS.map(({ key, w, col, label }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={activeSeg === key}
                  onClick={() => setActiveSeg(key)}
                  onMouseEnter={() => setActiveSeg(key)}
                  style={{
                    width: barDrawn ? w : '0%',
                    backgroundColor: col,
                    transition: 'width 1.05s cubic-bezier(.2,.7,.3,1)',
                  }}
                  className="seg relative flex items-end p-[9px_8px] overflow-hidden border-0 cursor-pointer hover:brightness-[1.06] focus-visible:brightness-[1.06] data-[pressed=true]:shadow-[inset_0_0_0_2px_#0C3436]"
                  data-pressed={activeSeg === key}
                >
                  <span className={`font-mono text-[10.5px] tracking-[.02em] text-[#0B2A21] whitespace-nowrap transition-opacity duration-400 delay-700 ${barDrawn ? 'opacity-100' : 'opacity-0'}`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="legend flex flex-wrap gap-[18px] mt-[18px]">
              {LEGEND_ITEMS.map(({ key, col, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveSeg(key)}
                  className="flex items-center gap-[9px] font-mono text-[10.5px] tracking-[.1em] uppercase text-[#7A8C80] font-medium cursor-pointer transition-colors hover:text-[#0C3436]"
                >
                  <i className="w-2.5 h-2.5 rounded-[2px] block" style={{ backgroundColor: col }} />
                  {label}
                </button>
              ))}
            </div>

            {/* Readout */}
            <div aria-live="polite" className="mt-[26px] border border-[#C9D2C2] rounded-[10px] p-[clamp(26px,3vw,38px)] bg-[#F2F4EC] min-h-[200px]">
              <div className="font-mono text-[10.5px] tracking-[.16em] uppercase text-[#7A8C80]">
                {RUPEE_DATA[activeSeg].k}
              </div>
              <h3 className="text-[clamp(18px,1.75vw,22px)] font-display font-bold tracking-[-.02em] leading-[1.18] text-[#0C3436] mt-3 mb-1.5">
                {RUPEE_DATA[activeSeg].t}
              </h3>
              <div className="font-mono text-[13px] text-[#43584E] mb-4">
                {RUPEE_DATA[activeSeg].a}
              </div>
              <p className="text-[15.2px] text-[#43584E] leading-[1.62] max-w-none">
                {RUPEE_DATA[activeSeg].p}
              </p>
              <div className="mt-[18px] pt-4 border-t border-[#C9D2C2] text-[14.6px] text-[#0C3436]">
                <b className="font-mono text-[10.5px] tracking-[.14em] uppercase text-[#8A6113] block mb-[7px] font-medium">
                  Where 1FC Insure comes in
                </b>
                <span>{RUPEE_DATA[activeSeg].f}</span>
              </div>
            </div>

            <p className="mt-4 font-mono text-[10.5px] tracking-[.04em] text-[#8B9A8E] leading-[1.7]">
              IRDAI Annual Report 2023-24. Percentages are of claim amount, not claim count, and total 100.01% due to rounding in the source.
            </p>
          </div>

          {/* Right Column: Regulatory Clocks */}
          <div className="clocks border-l border-[#B4C0AC] pl-[clamp(28px,3.2vw,44px)] max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-9 rv">
            <span className="label font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80] inline-flex items-center gap-3">
              <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
              The clock is running
            </span>
            <h3 className="mt-[18px] mb-3.5 text-[clamp(18px,1.75vw,22px)] font-display font-bold tracking-[-.02em] leading-[1.18] text-[#0C3436]">
              The regulator has set the deadlines. Somebody still has to watch them.
            </h3>
            <p className="text-[15px] text-[#43584E] leading-[1.62]">
              The IRDAI Master Circular on Health Insurance Business, dated 29 May 2024, put hard time limits on the parts of a claim that used to drift.
            </p>

            {REGULATORY_CLOCKS.map(({ num, unit, body }) => (
              <div key={num} className="clock grid grid-cols-[84px_1fr] gap-5 py-[18px] border-t border-[#C9D2C2] first:mt-3">
                <div className="num font-display font-bold text-[28px] tracking-[-.03em] text-[#0C3436]">
                  {num}
                  <small className="block font-mono text-[10px] tracking-[.14em] uppercase text-[#7A8C80] font-normal mt-[3px]">
                    {unit}
                  </small>
                </div>
                <p className="text-[14.4px] text-[#43584E] leading-[1.55]">
                  {body}
                </p>
              </div>
            ))}

            <p className="src mt-5 font-mono text-[10.5px] tracking-[.04em] text-[#8B9A8E] leading-[1.7]">
              IRDAI Master Circular on Health Insurance Business, 29 May 2024. IRDAI Annual Report 2024-25.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
