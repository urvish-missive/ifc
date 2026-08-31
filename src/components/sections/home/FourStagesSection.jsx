const STEPS = [
  { num: '01', label: 'ADVISE', h: 'Understand, then place', p: "Advisory and distribution across health, life and general insurance, through 1FC's broking and POSP network." },
  { num: '02', label: 'ONBOARD', h: 'Get your ID and QR', p: 'A customer profile, a unique 1FC ID and a QR that becomes the access point to every service request afterwards.' },
  { num: '03', label: 'ASSIST', h: 'Open a case, not a ticket queue', p: 'Hospitalisation, claims, documentation, endorsements. One case, one owner, tracked to closure.' },
  { num: '04', label: 'RENEW', h: 'Continue, do not restart', p: 'Renewal handled inside the same relationship, with the case history already known.' },
]

export default function FourStagesSection() {
  return (
    <section id="how" className="bg-[#09272A] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        {/* Header */}
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            How it works
          </span>
          <div className="mt-[clamp(34px,4vw,54px)]">
            <h2 className="text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] rv">
              Four stages.<br className="max-sm:hidden" /> One relationship.
            </h2>
            <p className="mt-[20px] text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[58ch] rv">
              The same team follows you across all four. That is the entire design decision. Everything else is a consequence of it.
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="mt-[52px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[rgba(246,247,241,.13)]">
          {STEPS.map(({ num, label, h, p }, i) => (
            <div
              key={num}
              className={`py-[26px] px-[clamp(14px,2vw,26px)] border-b border-[rgba(246,247,241,.13)] sm:border-b-0 sm:border-r ${i % 2 === 1 ? 'sm:border-r-0' : ''} lg:border-r last:lg:border-r-0 rv`}
            >
              <div className="font-mono text-[11px] tracking-[.14em] text-[#E0A139]">
                {num} · {label}
              </div>
              <h3 className="mt-3.5 mb-2.5 text-[clamp(18px,1.75vw,22px)] font-semibold tracking-[-0.02em] leading-[1.18] text-[#F6F7F1]">
                {h}
              </h3>
              <p className="text-[14.6px] text-[#9DB4AC] leading-[1.55]">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
