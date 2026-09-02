const FAQ_ITEMS = [
  {
    q: 'What does 1FC Insure actually do for me?',
    p: 'Two things. It helps you choose and buy the right cover across health, life and general insurance. Then it stays involved: service requests, hospitalisation coordination, documentation, claim support and renewal all run through the same relationship, so you are not starting again with a call centre when something goes wrong.',
  },
  {
    q: 'What happens when I need to claim?',
    p: 'You tell us, by phone or message, or the hospital reaches us directly. A named coordinator takes ownership. We contact the hospital, send you a single list of the documents needed, help assemble the file, submit it, and keep following it up. When the decision comes back we explain it in plain language, including what was not paid and why.',
  },
  {
    q: 'Does 1FC Insure approve or pay claims?',
    p: 'No. Cover, approvals, exclusions, cashless eligibility and settlement are decided by your insurer and TPA under your policy terms. We are not the insurer and not a third party administrator. What we take responsibility for is that your claim is complete, filed properly, followed up and explained to you.',
  },
  {
    q: 'How is this different from an insurance broker or an aggregator?',
    p: 'Most of the industry is measured on how well it sells. Their product effectively ends when the policy is issued. Ours is designed around what happens after: coordination with the hospital, handling the paperwork, chasing the insurer and keeping the same people involved at renewal.',
  },
  {
    q: 'Who is it for?',
    p: "Households where one adult holds the policies for parents, spouse and children and quietly becomes the family's helpline. It is built for the person coordinating a hospital admission from another city, at night, without the policy document to hand.",
  },
  {
    q: 'What happens to my documents and health information?',
    p: 'Documents are attached to your case and visible only to the team handling it, under role-based access with an audit trail on every action. Consent, retention and privacy controls are set alongside compliance and legal, and published in full.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="light bg-[#EAEDE3] text-[#0C3436] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        {/* Header */}
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Questions
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#0C3436]">
            Reasonable doubts.
          </h2>
        </div>

        {/* Accordions */}
        <div className="faq mt-[44px] border-t border-[#C9D2C2] rv">
          {FAQ_ITEMS.map(({ q, p }, i) => (
            <details
              key={q}
              open={i === 0 ? true : undefined}
              className="border-b border-[#C9D2C2] group"
            >
              <summary className="relative w-full cursor-pointer py-[22px] pr-10 text-left font-display font-bold tracking-[-0.018em] text-[clamp(17px,1.9vw,21px)] text-[#0C3436] list-none [&::-webkit-details-marker]:hidden after:absolute after:right-1 after:top-1/2 after:-translate-y-1/2 after:font-mono after:text-[21px] after:text-[#7A8C80] after:content-['+'] group-open:after:content-['-']">
                {q}
              </summary>
              <p className="pb-6 text-[15.4px] leading-[1.55] text-[#43584E] max-w-[76ch]">
                {p}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
