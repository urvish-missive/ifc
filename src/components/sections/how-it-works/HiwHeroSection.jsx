export default function HiwHeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] max-md:min-h-0 flex items-center bg-[var(--paper)] py-[clamp(44px,6vw,96px)] max-md:pt-9 max-md:pb-5 overflow-hidden" id="top">
      <div className="max-w-[var(--maxw)] mx-auto px-[var(--pad)] w-full text-center" id="openIn">
        <div className="hiw-kicker font-mono text-[11px] tracking-[.24em] uppercase text-[var(--ink-3)]">
          How it works
        </div>

        <h1 className="mt-[clamp(18px,2.6vw,38px)] text-[clamp(36px,8.4vw,104px)] font-display font-bold leading-[.98] tracking-[-.042em] text-[var(--ink)]">
          <span className="hiw-reveal-line block overflow-hidden">
            <span className="hiw-reveal-text block">
              Something happens.
            </span>
          </span>
          <span className="hiw-reveal-line block overflow-hidden mt-0">
            <span className="hiw-reveal-text block text-[#9AAB9D]">
              What happens next?
            </span>
          </span>
        </h1>

        <p className="hiw-sub mt-[clamp(20px,2.6vw,36px)] max-md:mt-3.5 mx-auto max-w-[44ch] text-[clamp(15px,1.5vw,19px)] max-md:text-[14.5px] text-[var(--ink-2)] leading-[1.6]">
          Every insurance company can sell you a policy. The difference shows up on the
          day you have to use it. Keep scrolling and watch one relationship build
          itself, step by step.
        </p>

        <div className="hiw-go mt-[clamp(24px,3vw,44px)] max-md:mt-4 inline-flex">
          <a
            href="#journey"
            className="inline-flex items-center rounded-[9px] bg-[var(--ink)] text-[var(--cream)] border border-[var(--ink)] px-[21px] py-[13px] max-md:px-4 max-md:py-2.5 text-[15px] max-md:text-[13.5px] font-semibold transition hover:bg-[#0F4143] hover:-translate-y-[2px]"
          >
            Walk through it <span className="ml-2 inline-block transition-transform duration-200">↓</span>
          </a>
        </div>
      </div>

      <style>{`
        .hiw-reveal-text {
          transform: translateY(105%);
          transition: transform .9s cubic-bezier(.16,.9,.3,1);
        }
        .ready .hiw-reveal-text {
          transform: none;
        }
        .ready .hiw-kicker, .ready .hiw-sub, .ready .hiw-go {
          animation: hiwFadeUp .8s .35s both cubic-bezier(.16,.9,.3,1);
        }
        @keyframes hiwFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: none; }
        }
        /* Decorative gradient line at bottom */
        section#top::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 1px;
          height: clamp(40px, 6vw, 74px);
          background: linear-gradient(to bottom, transparent, var(--line-l2));
        }
      `}</style>
    </section>
  )
}
