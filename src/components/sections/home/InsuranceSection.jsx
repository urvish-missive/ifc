const COVER_LINES = [
  {
    cm: 'Health, we lead here',
    title: 'Cover for the family, including parents.',
    desc: 'Where service failure hurts most, and where the coordination we provide is worth the most to you.',
  },
  {
    cm: 'Life',
    title: 'Protection sized to what your family depends on.',
    desc: 'Advised against your actual obligations rather than a default sum assured.',
  },
  {
    cm: 'General',
    title: 'Motor, home and the rest of the everyday cover.',
    desc: 'Held in the same relationship, so renewals and claims run through the same people.',
  },
]

export default function InsuranceSection() {
  return (
    <section id="cover" className="bg-[#EAEDE3] text-[#0C3436] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Insurance through 1FC Insure
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#0C3436]">
            Cover chosen with advice, not a search bar.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#43584E]">
            1FC Insure is an insurance broking and POSP distribution business. You talk to a person, you get a recommendation you can question, and the relationship starts there rather than ending there.
          </p>
        </div>

        {/* 3 Columns of Cover */}
        <div className="cover mt-[clamp(30px,3.4vw,44px)] grid grid-cols-1 md:grid-cols-3 gap-[clamp(18px,2.4vw,32px)]">
          {COVER_LINES.map(({ cm, title, desc }) => (
            <div
              key={cm}
              className="cov border-t border-[#B4C0AC] py-[clamp(20px,2.2vw,26px)] pr-[clamp(22px,2.2vw,30px)] max-md:pr-0 rv"
            >
              <div className="cm font-mono text-[10px] tracking-[.17em] uppercase text-[#7A8C80] mb-3">
                {cm}
              </div>
              <h3 className="text-[clamp(18px,1.75vw,22px)] font-display font-bold tracking-[-.02em] leading-[1.18] text-[#0C3436]">
                {title}
              </h3>
              <p className="mt-2.5 text-[14.6px] text-[#43584E] leading-[1.55]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="coverfoot mt-[clamp(26px,3vw,38px)] pt-[22px] border-t border-[#C9D2C2] text-[15.4px] text-[#43584E] max-w-[66ch] rv">
          <b className="text-[#0C3436] font-semibold">Buying is where most companies finish.</b> For 1FC Insure it is the point at which the useful part begins.
        </p>
      </div>
    </section>
  )
}
