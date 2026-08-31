import { useState, useEffect, useRef } from 'react'

const STAT_SIGNALS = [
  { key: 'claims', unit: 'crore', label: 'health insurance claims were filed with Indian insurers in FY 2023-24.' },
  { key: 'settled', unit: '%', label: 'of them were settled. Around 11% were repudiated and about 6% were still pending at the year end.' },
  { key: 'avg', unit: '', label: 'was the average amount paid per claim. Roughly two thirds were settled cashless, the rest reimbursed after the family paid first.' },
]

const BAR_SEGMENTS = [
  { key: 'paid', w: 58, col: '#8fcba6', label: '\u20B971.29 paid' },
  { key: 'dis', w:20, col: '#ebbe72', label: '12.90' },
  { key: 'rep', w: 12, col: '#dc8c74', label: '9.34' },
  { key: 'out', w: 10, col: '#bfcbbe', label: '6.48' },
]

const LEGEND_ITEMS = [
  { key: 'paid', col: '#8fcba6', label: 'Paid' },
  { key: 'dis', col: '#ebbe72', label: 'Disallowed' },
  { key: 'rep', col: '#dc8c74', label: 'Repudiated' },
  { key: 'out', col: '#bfcbbe', label: 'Outstanding' },
]

const REGULATORY_CLOCKS = [
  { n: '1', unit: 'hour', body: 'to grant cashless pre-authorisation once the hospital sends a complete request.' },
  { n: '3', unit: 'hours', body: 'to issue final authorisation at discharge, with the insurer bearing any extra hospital charge beyond that.' },
  { n: '69', unit: 'per cent', body: 'of general insurance grievances in FY 2024-25 were about claims: delays, underpayment or rejection.' },
]

const RUPEE_DATA = {
  paid: {
    k: 'Paid',
    t: '\u20B983,493 crore reached the policyholder',
    a: '71.29% of the total amount claimed',
    p: 'Settled claims, cashless at the hospital or reimbursed afterwards. Around two thirds went through the cashless route, which only works if somebody chases the pre-authorisation while the patient is still at the admission desk.',
    f: 'Cashless depends on paperwork arriving complete and on time. That is a coordination job, and it is the job 1FC Insure owns.',
  },
  dis: {
    k: 'Disallowed',
    t: '\u20B915,100 crore was disallowed',
    a: '12.90% of the total amount claimed',
    p: 'Amounts struck off before any coverage judgement: non-payable consumables, items outside the policy schedule, proportionate deductions from room rent clauses, paperwork that did not match.',
    f: 'Most of this is decided by what the file looks like when it arrives. A checklist issued at admission, rather than a scramble at discharge, is the biggest lever a family has.',
  },
  rep: {
    k: 'Repudiated',
    t: '\u20B910,937 crore was repudiated',
    a: '9.34% of the total amount claimed',
    p: 'Claims reviewed and then denied, usually on waiting periods, disclosure of a pre-existing condition, or a policy exclusion. About 11% of claims by count were repudiated in the same year.',
    f: '1FC cannot overturn a repudiation. It can make sure the terms were explained at purchase, the grounds are recorded on the case, and the family knows the grievance and ombudsman route.',
  },
  out: {
    k: 'Outstanding',
    t: '\u20B97,585 crore was still outstanding',
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
    // Only watch the bar for draw animation — .rv reveal is handled by Home.jsx
    const barObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarDrawn(true) },
      { threshold: 0.14 },
    )
    if (barRef.current) barObs.observe(barRef.current)

    // Count-up animation
    let countStarted = false
    const countObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted) {
          countStarted = true
          let startTime = null
          const step = (ts) => {
            if (!startTime) startTime = ts
            const p = Math.min((ts - startTime) / 1200, 1)
            const e = 1 - Math.pow(1 - p, 3)
            setCounts({
              claims: (3.26 * e).toFixed(2),
              settled: (82.46 * e).toFixed(2),
              avg: Math.floor(31086 * e),
            })
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById('reality')
    if (el) countObserver.observe(el)

    return () => { barObs.disconnect(); countObserver.disconnect() }
  }, [])

  return (
    <section id="reality" className="bg-[#EAEDE3] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="mx-auto max-w-[var(--maxw)]">
        {/* Header */}
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            The reality
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#0C3436] rv">
            Of every &#8377;100 claimed on health insurance, &#8377;71.29 was paid.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#43584E] rv">
            Indian insurers received health claims worth about &#8377;1.17 lakh crore in FY 2023-24 and paid &#8377;83,493 crore of it. The remainder was disallowed, repudiated or still outstanding at the year end. Select a band to see where it went.
          </p>
        </div>

        {/* Stat signals */}
        <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-[clamp(14px,2vw,22px)]">
          {STAT_SIGNALS.map(({ key, unit, label }) => {
            const val = key === 'claims' ? (counts.claims || '3.26')
              : key === 'settled' ? (counts.settled || '82.46')
              : `\u20B9${counts.avg ? counts.avg.toLocaleString('en-IN') : '31,086'}`
            return (
              <div key={label} className="border-t border-[#B4C0AC] py-[clamp(22px,2.4vw,30px)] pr-[clamp(24px,2.4vw,32px)] sm:pr-0 rv">
                <div className="font-display text-[clamp(34px,3.8vw,48px)] font-bold leading-none tracking-[-.042em] text-[#0C3436]">
                  {val}<em className="not-italic text-[.52em] tracking-[-.01em] text-[#7A8C80] ml-1">{unit}</em>
                </div>
                <p className="mt-3.5 text-[14.6px] text-[#43584E] leading-[1.55] max-w-[34ch]">{label}</p>
              </div>
            )
          })}
        </div>

        {/* Reality grid: rupee bar + clocks */}
        <div className="mt-[clamp(34px,4vw,52px)] grid grid-cols-1 gap-11 lg:grid-cols-[1.25fr_.75fr] lg:gap-[clamp(32px,5vw,80px)]">
          <div className="rv">
            {/* Rupee bar */}
            <div
              ref={barRef}
              role="group"
              aria-label="Health insurance claim amounts, FY 2023-24"
              className="flex h-[76px] rounded-[8px] overflow-hidden border border-[#B4C0AC] bg-[#dde3d6]"
            >
              {BAR_SEGMENTS.map(({ key, w, col, label }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={activeSeg === key}
                  onClick={() => setActiveSeg(key)}
                  onMouseEnter={() => setActiveSeg(key)}
                  style={{ width: barDrawn ? `${w}%` : '0%', backgroundColor: col, transition: 'width 1.1s cubic-bezier(.2,.7,.3,1)' }}
                  className="flex items-end px-[6px] py-2 border-0 cursor-pointer relative overflow-hidden hover:brightness-[1.06] focus-visible:brightness-[1.06] data-[pressed=true]:shadow-[inset_0_0_0_2px_#0C3436]"
                  data-pressed={activeSeg === key}
                >
                  <span className={`font-mono text-[10.5px] tracking-[.02em] text-[#0b2a21] whitespace-nowrap transition-opacity duration-400 delay-800 ${barDrawn ? 'opacity-100' : 'opacity-0'}`}>{label}</span>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-4">
              {LEGEND_ITEMS.map(({ key, col, label }) => (
                <button key={key} type="button" onClick={() => setActiveSeg(key)} className="flex items-center gap-2 cursor-pointer font-mono text-[11px] tracking-[.08em] uppercase text-[#5b7268] font-medium transition-colors hover:text-[#0C3436]">
                  <span className="w-[10px] h-[10px] rounded-[2px] block" style={{ backgroundColor: col }} />
                  {label}
                </button>
              ))}
            </div>

            {/* Readout */}
            <div aria-live="polite" className="mt-[26px] border border-[#C9D2C2] rounded-[10px] p-[clamp(20px,2.6vw,28px)] bg-[#f2f4ec] min-h-[186px]">
              <div className="font-mono text-[11px] tracking-[.14em] uppercase text-[#7a8c80]">{RUPEE_DATA[activeSeg].k}</div>
              <h3 className="mt-2.5 mb-1 text-[clamp(18px,1.75vw,22px)] font-display font-semibold tracking-[-0.02em] leading-[1.18] text-[#0C3436]">{RUPEE_DATA[activeSeg].t}</h3>
              <div className="mb-3.5 font-mono text-[14px] text-[#42574e]">{RUPEE_DATA[activeSeg].a}</div>
              <p className="text-[15.2px] text-[#42574e] leading-[1.55]">{RUPEE_DATA[activeSeg].p}</p>
              <div className="mt-4 pt-3.5 border-t border-[#C9D2C2] text-[14.6px] text-[#0C3436]">
                <b className="block font-mono text-[10.5px] tracking-[.13em] uppercase text-[#8a6113] font-medium mb-1.5">What a case desk changes</b>
                {RUPEE_DATA[activeSeg].f}
              </div>
            </div>
            <p className="mt-4 font-mono text-[10.5px] tracking-[.04em] text-[#8B9A8E] leading-[1.7]">
              IRDAI Annual Report 2023-24. Percentages are of claim amount, not claim count, and total 100.01% due to rounding in the source.
            </p>
          </div>

          {/* Regulatory clocks */}
          <div className="border border-[#B4C0AC] rounded-[10px] p-[clamp(20px,2.6vw,30px)] bg-[#f2f4ec] rv">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80]">
              <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
              Why now
            </span>
            <h3 className="mt-[18px] mb-3.5 text-[clamp(18px,1.75vw,22px)] font-display font-semibold tracking-[-0.02em] leading-[1.18] text-[#0C3436]">
              The regulator has set the clocks. Somebody still has to run them.
            </h3>
            <p className="text-[15px] text-[#43584E]">
              The IRDAI Master Circular on Health Insurance Business, dated 29 May 2024, replaced 55 earlier circulars and put hard deadlines on the parts of a claim that used to drift.
            </p>
            {REGULATORY_CLOCKS.map(({ n, unit, body }, i) => (
              <div key={i} className="grid grid-cols-[76px_1fr] gap-3.5 py-3.5 border-t border-[#C9D2C2] first:border-0">
                <div className="font-display text-[26px] font-bold tracking-[-0.03em] text-[#0C3436]">
                  {n}<small className="block font-mono text-[10px] tracking-[.12em] uppercase text-[#7a8c80] font-normal mt-0.5">{unit}</small>
                </div>
                <p className="text-[14.6px] text-[#42574e] leading-[1.55]">{body}</p>
              </div>
            ))}
            <p className="mt-5 font-mono text-[10.5px] tracking-[.04em] text-[#8B9A8E] leading-[1.7]">
              IRDAI Master Circular on Health Insurance Business, 29 May 2024. IRDAI Annual Report 2024-25.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
