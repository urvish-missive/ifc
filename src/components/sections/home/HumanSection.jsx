import MascotIllustration from '../../ui/MascotIllustration'

export default function HumanSection() {
  return (
    <section className="human bg-[#EAEDE3] px-[var(--pad)] py-[clamp(50px,5.6vw,74px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="humancard relative max-w-[1010px] mx-auto bg-[#0C3436] rounded-[18px] grid grid-cols-1 md:grid-cols-[214px_minmax(0,1fr)] gap-[clamp(26px,3.6vw,64px)] items-center p-[clamp(34px,4vw,56px)_clamp(30px,4vw,60px)] shadow-[0_34px_70px_-40px_rgba(6,28,30,.6)] rv">
          {/* Figure with Mascot / Coordinator & Glow */}
          <div className="figure relative self-end h-[clamp(272px,29vw,392px)] flex items-end justify-center max-md:order-2 max-md:h-[270px] max-md:justify-center">
            <span
              className="glow absolute left-1/2 bottom-[6%] w-[130%] max-w-full h-[62%] -translate-x-1/2 pointer-events-none"
              style={{ background: 'radial-gradient(50% 50% at 50% 60%, rgba(224, 161, 57, .16), transparent 70%)' }}
              aria-hidden="true"
            />
            <MascotIllustration variant="trust" className="h-full w-auto drop-shadow-[0_10px_24px_rgba(0,0,0,.42)]" />
          </div>

          {/* Text Content */}
          <div className="content max-md:order-1">
            <span className="label font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] inline-flex items-center gap-3">
              <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
              Human when it matters
            </span>
            <h2 className="mt-5 text-[clamp(25px,2.7vw,37px)] font-display font-bold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] max-w-[17ch]">
              Software where it is faster. A person where it counts.
            </h2>
            <p className="lede mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[46ch]">
              We build software so your documents are organized, your cases are tracked and your turnarounds are watched. But when you call at midnight because a hospital will not accept a pre-authorisation, you speak to a named coordinator who knows your file.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
