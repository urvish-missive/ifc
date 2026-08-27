import React from 'react'
import MascotIllustration from '../../ui/MascotIllustration'

export default function HumanSection() {
  return (
    <section className="bg-[#EAEDE3] px-[var(--pad)] py-[clamp(50px,5.6vw,74px)]">
      <div className="max-w-[1010px] mx-auto">
        <div className="relative grid items-center gap-[clamp(26px,3.6vw,64px)] rounded-[18px] bg-[#0C3436] p-[clamp(34px,4vw,56px)] shadow-[0_34px_70px_-40px_rgba(6,28,30,.6)] sm:grid-cols-[214px_minmax(0,1fr)] overflow-visible rv">
          {/* Figure */}
          <div className="relative self-end h-[clamp(272px,29vw,392px)] flex items-end justify-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 bottom-[6%] -z-10 w-[130%] max-w-full h-[62%] -translate-x-1/2"
              style={{ background: 'radial-gradient(50% 50% at 50% 60%, rgba(224,161,57,.16), transparent 70%)' }}
            />
            <MascotIllustration variant="trust" className="h-[220px] sm:h-[260px] mx-auto" />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D]">
              <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
              Human when it matters
            </span>
            <h2 className="mt-5 max-w-[17ch] text-[clamp(25px,2.7vw,37px)] font-display font-semibold tracking-[-0.02em] text-[#F6F7F1]">
              A person owns your case. It says so on the case.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#9DB4AC]">
              The technology exists so that nothing falls through and every turnaround becomes visible. The part that actually calms a family at midnight is a name, a number and somebody who has done this before.
            </p>
            {/* Assignment card */}
            <div className="mt-6 inline-flex items-center gap-3.5 border border-[rgba(246,247,241,.24)] rounded-[11px] p-[13px_18px] bg-[rgba(6,28,30,.42)] text-[#F6F7F1] w-fit">
              <span className="w-6 h-6 rounded-full bg-[#E0A139] grid place-items-center text-[10.5px] font-bold text-[#20160a] font-sans">RK</span>
              <span>
                <span className="block font-mono text-[9.5px] tracking-[.16em] uppercase text-[#7A948D]">Assigned to</span>
                <span className="block mt-0.5 text-[14px] text-[#F6F7F1]">Health claims desk, named coordinator</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
