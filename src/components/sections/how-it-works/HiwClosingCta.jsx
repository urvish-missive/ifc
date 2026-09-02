import { Link } from 'react-router-dom'

export default function HiwClosingCta() {
  return (
    <section className="close-cta bg-[#0C3436] py-[clamp(60px,7vw,96px)] text-center px-[var(--pad)]" id="access">
      <div className="close-in max-w-[840px] mx-auto w-full">
        <div className="kicker font-mono text-[11px] tracking-[.22em] uppercase text-[#7A948D]">
          Your turn
        </div>

        <h2 className="mt-[18px] text-[clamp(28px,3.6vw,46px)] font-display font-bold text-[#F6F7F1] mx-auto max-w-[18ch] leading-[1.1]">
          Now see whether it fits your family.
        </h2>

        <p className="mt-5 text-[17px] text-[#CBD8CE] mx-auto max-w-[46ch] leading-[1.6]">
          Tell us what you already hold and who you are trying to protect. You get advice and a clear picture, not a quote sheet.
        </p>

        <div className="close-btns mt-[clamp(26px,3vw,36px)] flex gap-3 justify-center flex-wrap">
          <Link
            to="/#access"
            className="btn btn-primary inline-flex items-center gap-2 rounded-[9px] bg-[#E0A139] px-[22px] py-[14px] text-[15px] font-semibold text-[#20160A] border border-[#E0A139] transition hover:bg-[#EDB253] hover:-translate-y-0.5"
          >
            Start with 1FC Insure &rarr;
          </Link>

          <Link
            to="/#cover"
            className="btn btn-ghost inline-flex items-center rounded-[9px] bg-transparent text-[#F6F7F1] border border-[rgba(246,247,241,.24)] px-[22px] py-[14px] text-[15px] font-semibold transition hover:border-[rgba(246,247,241,.5)] hover:-translate-y-0.5"
          >
            See what we cover
          </Link>
        </div>

        <p className="fineline mt-[clamp(26px,3.2vw,36px)] mx-auto max-w-[58ch] font-sans text-[13.5px] sm:text-[14px] font-normal text-[#8EA59E] leading-[1.65] text-center tracking-normal">
          Coverage, approvals, exclusions and settlement are decided by the insurer and TPA under your policy terms. 1FC Insure advises, coordinates and follows up.
        </p>
      </div>
    </section>
  )
}
