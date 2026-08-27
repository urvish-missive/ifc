import React from 'react'

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="px-[var(--pad)] py-[clamp(46px,5.2vw,68px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            The 1FC group
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] rv">
            Part of 1FC.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#F6F7F1] max-w-[62ch] rv">
            1FC Insure is not a standalone insurance site. It sits inside a wider financial platform and shares its design language, engineering standards and service philosophy with the rest of the group.
          </p>
        </div>
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { self: false, nm: '1FCode', ds: 'The financial operating system the group is built on.' },
            { self: true,  nm: '1FC Insure', ds: 'Insurance broking, distribution and the case desk. You are here.' },
            { self: false, nm: 'Shared foundation', ds: 'One platform layer, one security model and one design system across every 1FC product.' },
          ].map(({ self: isSelf, nm, ds }) => (
            <div
              key={nm}
              className={`rounded-[10px] p-5 transition-all rv ${
                isSelf
                  ? 'border border-[#E0A139] bg-[rgba(224,161,57,.07)]'
                  : 'border border-[rgba(246,247,241,.13)] bg-[rgba(246,247,241,.03)] hover:-translate-y-0.5 hover:border-[rgba(246,247,241,.24)]'
              }`}
            >
              <div className={`font-display text-[17px] font-bold tracking-[-0.02em] ${isSelf ? 'text-[#E0A139]' : 'text-[#F6F7F1]'}`}>{nm}</div>
              <p className="mt-2 text-[13.4px] leading-[1.45] text-[#9DB4AC]">{ds}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
