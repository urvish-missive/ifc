const PILLARS = [
  {
    title: 'The relationship does not end at purchase',
    desc: 'Advice, service, documentation, claim support and renewal all run through the same people, so you never start the story again with a stranger.',
  },
  {
    title: 'Honest about where our role ends',
    desc: 'We assist and coordinate. We do not underwrite risk and we do not decide claims. We will tell you the moment a decision passes to your insurer, and we keep following it.',
  },
  {
    title: 'Nothing depends on who picks up the phone',
    desc: 'Every request is recorded, owned and tracked, with turnaround visible internally. Good service becomes a system rather than a favour.',
  },
  {
    title: 'Your information is handled carefully',
    desc: 'Role-based access and audit trails across every team, with consent and privacy controls set alongside compliance and legal rather than added later.',
  },
]

export default function TrustSection() {
  return (
    <section id="trust" className="bg-[#061C1E] text-[#F6F7F1] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Why 1FC Insure
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#F6F7F1]">
            Because a policy document has never helped anyone at 2am.
          </h2>
        </div>

        <div className="pillars mt-[clamp(28px,3.2vw,42px)] grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(30px,4.4vw,72px)]">
          {PILLARS.map(({ title, desc }) => (
            <div
              key={title}
              className="pil py-[clamp(26px,2.8vw,34px)] border-t border-[rgba(246,247,241,.13)] rv"
            >
              <h4 className="font-display font-bold text-[20px] tracking-[-.022em] text-[#F6F7F1] mb-3">
                {title}
              </h4>
              <p className="text-[14.8px] text-[#9DB4AC] leading-[1.6]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
