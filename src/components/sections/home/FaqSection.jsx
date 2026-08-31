const FAQ_ITEMS = [
  { q: 'What exactly is 1FC Insure?', p: 'An insurance broking and POSP distribution business with a customer assistance layer built into it. You buy a policy through 1FC, and the same relationship handles service requests, hospitalisation coordination, claim assistance, documentation and renewals afterwards.' },
  { q: 'Is it an insurance company, a broker, or a platform?', p: 'A broker with a service platform behind it. 1FC does not underwrite risk and does not settle claims, because insurers do that. The platform exists so that the assistance we provide is owned, tracked and measurable rather than dependent on who happens to answer the phone.' },
  { q: 'How is this different from an insurance aggregator?', p: 'Aggregators are built to be excellent at the purchase, and their product effectively ends when the policy is issued. 1FC Insure treats the purchase as the beginning. The differentiating work is hospital coordination, document handling, claim follow-up and renewal continuity, with a case record so you can see it happening.' },
  { q: 'Who is it for?', p: 'Households where one adult holds the policies for parents, spouse and children and becomes the family\u2019s helpline. It is built for the person coordinating a hospital admission from another city at night. On the partner side, it is built for POSPs and advisors who need a service story, and for hospitals who would rather deal with one accountable counterpart than a different family every time.' },
  { q: 'Can you guarantee my claim gets approved?', p: 'No, and be wary of anyone who says otherwise. Approvals, exclusions, cashless eligibility and settlement are decided by the insurer and TPA under your policy terms. What 1FC takes responsibility for is that your case is complete, submitted properly, followed up and explained to you in plain language.' },
  { q: 'What happens to my documents and health information?', p: 'Documents attach to your case and are visible to the team handling it, under role-based access with audit trails on every action. Consent, retention and privacy controls are defined alongside compliance and legal, and published in full.' },
]

export default function FaqSection() {
  return (
    <section id="faq" className="px-[var(--pad)] pt-[clamp(46px,5.2vw,68px)]">
      <div className="max-w-[var(--maxw)] mx-auto pb-[clamp(46px,5.2vw,68px)]">
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Questions
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] rv">
            Reasonable doubts.
          </h2>
        </div>
        <div className="mt-[44px] border-t border-[rgba(246,247,241,.13)] faq rv">
          {FAQ_ITEMS.map(({ q, p }, i) => (
            <details key={q} open={i === 0 ? true : undefined} className="border-b border-[rgba(246,247,241,.13)]">
              <summary className="relative w-full cursor-pointer py-[22px] pr-10 text-left font-display font-semibold tracking-[-0.018em] text-[clamp(17px,1.9vw,21px)] text-[#F6F7F1] list-none [&::-webkit-details-marker]:hidden after:absolute after:right-1 after:top-1/2 after:-translate-y-1/2 after:font-mono after:text-[21px] after:text-[#7A948D] after:content-['+'] peer-open:after:content-['-']">
                {q}
              </summary>
              <p className="pb-6 text-[15.4px] leading-[1.55] text-[#9DB4AC] max-w-[76ch]">{p}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
