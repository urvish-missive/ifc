const CASE_ROWS = [
  { cls: 'done', time: 'D0 · 23:41', title: 'QR scanned at admission', sub: 'Requested by a family member, not the policyholder' },
  { cls: 'done', time: 'D0 · 23:44', title: 'Case opened, owner assigned', sub: 'Health claims desk' },
  { cls: 'done', time: 'D0 · 23:52', title: 'Hospital desk contacted', sub: 'Insurance coordination started with the admission team' },
  { cls: 'done', time: 'D1 · 08:15', title: 'Checklist issued, 7 documents', sub: 'ID, policy copy, admission note, prescriptions, investigations, estimate, consent' },
  { cls: 'now', time: 'D1 · 14:02', title: 'Submitted to insurer or TPA', sub: 'Handoff logged. Decision authority: insurer. 1FC continues follow-up.' },
  { cls: 'pend', time: '··', title: 'Decision received', sub: 'Recorded against the case and explained to the family' },
  { cls: 'pend', time: '··', title: 'Post-discharge closure', sub: 'Balance items, follow-up, case closed' },
]

export default function AhaSection() {
  return (
    <section id="case" className="bg-[#0C3436] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)] overflow-hidden relative">
      {/* Radial glow */}
      <div className="absolute pointer-events-none -z-10 right-[-12%] top-[-20%] w-[60%] h-[140%]" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(224,161,57,.13), transparent 70%)' }} />

      <div className="max-w-[var(--maxw)] mx-auto grid grid-cols-1 lg:grid-cols-[.92fr_1.08fr] gap-[clamp(30px,4vw,64px)] lg:items-center relative">
        {/* Left: copy */}
        <div className="rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] mb-6">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            07 / The thing nobody else gives you
          </span>
          <h2 className="text-[clamp(30px,3.7vw,48px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1]">
            At 11:41pm you do not want an app.<br className="max-sm:hidden" /> You want a case number.
          </h2>
          <p className="mt-6 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[58ch]">
            The scan happens at the admission desk. Within minutes there is a case, an owner and a checklist, and every party can see the same version of what is happening. The insurer still decides the claim. But you stop being the messenger between four organisations at the worst possible hour.
          </p>

          {/* Handoff note */}
          <div className="mt-4 border border-dashed border-[rgba(246,247,241,.22)] rounded-[8px] p-3 font-[13px] text-[#9DB4AC] flex gap-2.5 items-start">
            <span aria-hidden="true" className="text-[#9DB4AC] mt-px">•</span>
            <span><b className="text-[#F6F7F1] font-semibold">Where our control ends, we say so.</b> The case record marks the exact point a decision leaves 1FC and sits with the insurer or TPA, and keeps tracking it from the outside.</span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#access" className="inline-flex items-center gap-2 rounded-[9px] bg-[#E0A139] px-6 py-[15px] text-[15px] font-semibold text-[#20160A] border border-transparent transition hover:-translate-y-0.5 hover:bg-[#EDB253]">
              Get early access &rarr;
            </a>
          </div>
        </div>

        {/* Right: case card */}
        <div className="rv">
          <div className="case rounded-[14px] overflow-hidden shadow-[0_30px_70px_-30px_rgba(0,0,0,.6)]">
            {/* Card header */}
            <div className="flex items-center justify-between gap-3 px-[18px] py-[14px] border-b border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.45)] flex-wrap row-gap-2">
              <span className="font-mono text-[12.5px] tracking-[0.08em]">CASE · 1FC-H-000412<span className="max-sm:hidden"> · CASHLESS</span></span>
              <span className="pill pill-live">
                <span className="dot" />
                Day 2
              </span>
            </div>

            {/* Card rows */}
            <div className="case-body px-[18px] py-[18px]">
              {CASE_ROWS.map(({ cls, time, title, sub }) => (
                <div key={title} className={`grid grid-cols-[56px_16px_1fr] sm:grid-cols-[78px_20px_1fr] gap-[9px] sm:gap-3 items-start py-[9px] sm:py-[11px] border-b border-dashed border-[rgba(246,247,241,.09)] last:border-0 ${cls}`}>
                  <span className={`font-mono text-[10.5px] sm:text-[11.5px] text-[#7A948D] pt-0.5 ${cls === 'pend' ? 'opacity-[.42]' : ''}`}>{time}</span>
                  <span className="flex justify-center pt-1.5"><i /></span>
                  <span className={`${cls === 'pend' ? 'opacity-[.42]' : ''}`}>
                    <strong className="block text-[14px] sm:text-[14.5px] font-semibold">{title}</strong>
                    <span className="block text-[13px] text-[#9DB4AC] leading-[1.45] max-sm:hidden">{sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Card footer */}
            <div className="case-foot flex items-center gap-3 px-[18px] py-[14px] border-t border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.35)] font-mono text-[10.5px] tracking-[.06em] uppercase text-[#9DB4AC]">
              <span className="owner flex items-center gap-2 text-[#F6F7F1] normal-case tracking-normal font-sans text-[13px]">
                <span className="avatar w-6 h-6 rounded-full bg-[#E0A139] text-[#20160a] grid place-items-center text-[10.5px] font-bold font-sans">RK</span>
                Named coordinator
              </span>
              <span className="ml-auto normal-case tracking-normal">Illustrative target workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
