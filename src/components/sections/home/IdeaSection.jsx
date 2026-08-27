import React from 'react'

export default function IdeaSection() {
  return (
    <section id="idea" className="px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
          <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
          The idea
        </span>
        <div className="mt-[clamp(34px,4vw,54px)] grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-[clamp(34px,5vw,80px)] items-end">
          <div className="font-display font-bold tracking-[-.035em] leading-[1.03] text-[clamp(32px,5.4vw,66px)] max-w-[16ch] text-[#F6F7F1] rv">
            A policy is a promise. <span className="text-[#8fa79e]">A case is a commitment.</span>
          </div>
          <div className="rv">
            <p className="text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[60ch]">
              Aggregators end at checkout. Administrators begin at adjudication. The part in between, where insurance is actually experienced, belongs to nobody. 1FC Insure turns every moment of need into a case with an owner, a checklist, a status and a clock.
            </p>
            <div className="mt-6 border-l-2 border-[#E0A139] pl-[22px] py-1.5 max-w-[60ch] text-[16.5px] text-[#cfdacf]">
              1FC assists, coordinates and follows up. Coverage decisions, adjudication, approvals and settlement stay with the insurer and TPA under your policy terms. We do not blur that line, we make it navigable.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
