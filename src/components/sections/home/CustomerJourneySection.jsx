const JOURNEY_STEPS = [
  {
    jl: 'Choose',
    title: 'Work out what you actually need.',
    desc: 'Advice across health, life and general insurance, with the reasoning explained rather than assumed.',
    isLast: false,
  },
  {
    jl: 'Get covered',
    title: 'Buy it through 1FC Insure.',
    desc: 'Policy placed, records held, family members and renewal dates kept in one customer record.',
    isLast: false,
  },
  {
    jl: 'Need help',
    title: 'A hospitalisation, a claim, a question.',
    desc: 'Anything from a document request to a midnight admission. One number, whatever it is.',
    isLast: false,
  },
  {
    jl: '1FC Insure is with you',
    title: 'Someone handles it alongside you.',
    desc: 'Guidance, documentation, coordination with the hospital and follow-up with the insurer, until it is resolved.',
    isLast: true,
  },
]

export default function CustomerJourneySection() {
  return (
    <section id="journey" className="bg-[#EAEDE3] text-[#0C3436] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            How it works
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#0C3436]">
            One relationship, from choosing cover to the day you use it.
          </h2>
        </div>

        {/* 4 Steps Journey */}
        <div className="journey mt-[clamp(34px,4vw,50px)] grid grid-cols-1 md:grid-cols-4 relative">
          {JOURNEY_STEPS.map(({ jl, title, desc, isLast }) => (
            <div
              key={jl}
              className={`jstep ${isLast ? 'last' : ''} pr-[clamp(20px,3vw,48px)] max-md:pr-0 max-md:pl-[30px] max-md:pb-[30px] last:max-md:pb-0 relative rv`}
            >
              <span className="jdot">
                <i />
              </span>
              <div className={`jl font-mono text-[10px] tracking-[.17em] uppercase mt-5 mb-2.5 ${isLast ? 'text-[#8A6113]' : 'text-[#7A8C80]'}`}>
                {jl}
              </div>
              <h3 className="text-[clamp(18px,1.75vw,22px)] font-display font-bold tracking-[-.02em] leading-[1.18] text-[#0C3436]">
                {title}
              </h3>
              <p className="mt-2.5 text-[14.4px] text-[#43584E] leading-[1.55]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
