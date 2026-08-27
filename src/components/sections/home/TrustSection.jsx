import React from 'react'

export default function TrustSection() {
  return (
    <section id="trust" className="px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Why 1FC Insure
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] rv">
            Built to be accountable for the part that is usually nobody&apos;s job.
          </h2>
        </div>
        <div className="mt-[clamp(28px,3.2vw,42px)] grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[clamp(30px,4.4vw,72px)]">
          {[
            { h: 'Built on 1FC infrastructure', p: '1FC Insure shares engineering standards, design language and platform thinking with 1FCode, the group\u2019s financial operating system. It is not a brochure with a contact form behind it.' },
            { h: 'One relationship, whole lifecycle', p: 'Advisory, distribution, operations, claims, hospital coordination and renewals work from one customer record, so you never have to explain your situation twice.' },
            { h: 'Clear about where our role ends', p: 'We assist and coordinate. We do not underwrite risk and we do not adjudicate claims. The case marks the exact point a decision passes to the insurer, and keeps tracking it.' },
            { h: 'Secure by design', p: 'Role-based access and audit trails across every team, with consent and privacy controls defined alongside compliance and legal rather than added afterwards.' },
          ].map(({ h, p }) => (
            <div key={h} className="py-[clamp(26px,2.8vw,34px)] border-t border-[rgba(246,247,241,.13)] rv">
              <h4 className="mb-3 font-display text-[20px] tracking-[-0.022em] text-[#F6F7F1]">{h}</h4>
              <p className="text-[14.8px] leading-[1.6] text-[#9DB4AC]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
