export default function HiwHeroSection() {
  return (
    <section className="jopen relative min-h-[calc(100vh-var(--navh))] max-md:min-h-0 flex items-center bg-[var(--paper)] py-[clamp(44px,6vw,96px)] max-md:pt-6 max-md:pb-2 overflow-hidden text-center px-[var(--pad)]" id="top">
      <div className="open-in max-w-[var(--maxw)] mx-auto w-full" id="openIn">
        <div className="kicker kicker-anim font-mono text-[11px] tracking-[.24em] uppercase text-[var(--ink-3)]">
          How it works
        </div>

        <h1 className="mt-[clamp(18px,2.6vw,38px)] text-[clamp(36px,8.4vw,104px)] font-display font-bold leading-[.98] tracking-[-.042em] text-[var(--ink)]">
          <span className="reveal-line">
            <span>Something happens.</span>
          </span>
          <span className="reveal-line q">
            <span className="text-[#9AAB9D]">What happens next?</span>
          </span>
        </h1>

        <p className="sub sub-anim mt-[clamp(20px,2.6vw,36px)] max-md:mt-3 mx-auto max-w-[44ch] text-[clamp(15px,1.5vw,19px)] max-md:text-[14.5px] text-[var(--ink-2)] leading-[1.6]">
          Every insurance company can sell you a policy. The difference shows up on the
          day you have to use it. Keep scrolling and watch one relationship build
          itself, step by step.
        </p>

        <div className="go go-anim mt-[clamp(24px,3vw,44px)] max-md:mt-3.5 inline-flex">
          <a
            href="#journey"
            className="btn-go inline-flex items-center rounded-[9px] bg-[var(--ink)] text-[var(--cream)] border border-[var(--ink)] px-[21px] py-[13px] max-md:px-4 max-md:py-2.5 text-[15px] max-md:text-[13.5px] font-semibold transition hover:bg-[#0F4143] hover:-translate-y-[2px]"
          >
            Walk through it <span className="arw ml-2 inline-block transition-transform duration-200">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
