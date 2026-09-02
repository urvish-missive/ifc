export default function IdeaSection() {
  return (
    <section id="idea" className="idea bg-[#09272A] px-[var(--pad)] py-[clamp(60px,6.8vw,94px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
          <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
          The idea
        </span>
        <div className="idea-split mt-[clamp(34px,4vw,54px)] grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-[clamp(34px,5vw,80px)] items-end">
          <div className="statement font-display font-bold tracking-[-.036em] leading-[1.04] text-[clamp(31px,4.9vw,62px)] max-w-[17ch] text-[#F6F7F1] rv">
            You can buy insurance anywhere.{' '}
            <span className="dim text-[#89A197]">
              With 1FC Insure, someone is with you when you need it.
            </span>
          </div>
          <div className="rv">
            <p className="text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[60ch]">
              Most of the industry is built for the twenty minutes of buying. Almost none of it is built for the years afterwards, which is the only part you will actually remember. 1FC Insure is built the other way round.
            </p>
            <div className="boundary border-l-2 border-[#E0A139] pl-[clamp(22px,2.4vw,32px)] py-1 mt-[26px] text-[16px] text-[#CBD8CE]">
              We help you choose cover, then stay on the file: documentation, coordination with the hospital, follow-up with the insurer. Cover and claim decisions are made by your insurer and TPA under your policy terms. Our job is to make sure you are never the one working it out alone.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
