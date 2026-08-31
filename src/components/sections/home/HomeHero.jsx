import MascotIllustration from '../../ui/MascotIllustration'

const HERO_CARD_ROWS = [
  { time: '23:41', cls: 'done', title: 'Assistance requested', sub: 'Raised by a family member at the admission desk.' },
  { time: '23:44', cls: 'done', title: 'Case opened, owner assigned', sub: 'Routed to the health claims desk.' },
  { time: '23:52', cls: 'now', title: 'Hospital coordination underway', sub: 'Admission desk contacted, checklist issued to the family.' },
]

const HERO_META_TAGS = ['Health, life and general', 'Broking and POSP', 'Hospital coordination']

export default function HomeHero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[clamp(48px,7vw,84px)] pb-[clamp(28px,4vw,56px)] max-sm:pt-[92px]">
      {/* Radial glow behind hero */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{ inset: '-30% -10% auto -10%', height: '130%', background: 'radial-gradient(58% 55% at 20% 6%, rgba(27,93,92,.55), transparent 70%), radial-gradient(42% 42% at 94% 4%, rgba(224,161,57,.1), transparent 70%)' }} />

      <div className="max-w-[var(--maxw)] mx-auto px-[var(--pad)] relative grid grid-cols-1 lg:grid-cols-[1fr_1.06fr] items-center gap-9 lg:gap-[clamp(24px,2.6vw,40px)]">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Insurance broking with a case desk
          </span>
          <h1 className="mt-[22px] text-[clamp(33px,4.2vw,56px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#F6F7F1] rv">
            Buying the policy<br />
            is the <span className="text-[#E0A139]">easy half.</span>
          </h1>
          <p className="mt-[22px] text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE] max-w-[50ch] rv">
            1FC Insure exists for the other half. The 11pm admission, the document list nobody warned you about, the claim that has to be chased, the renewal that arrives as a cold call. One relationship. One case number. One team that answers.
          </p>
          <div className="flex gap-3 mt-8 flex-wrap rv">
            <a href="#access" className="inline-flex items-center gap-2 rounded-[9px] bg-[#E0A139] px-6 py-[15px] text-[15px] font-semibold text-[#20160A] border border-transparent transition hover:-translate-y-0.5 hover:bg-[#EDB253]">
              Request early access &rarr;
            </a>
            <a href="#desk" className="inline-flex items-center gap-2 rounded-[9px] bg-transparent px-6 py-[15px] text-[15px] font-semibold text-[#F6F7F1] border border-[rgba(246,247,241,.24)] transition hover:-translate-y-0.5 hover:border-[#F6F7F1]">
              Watch a case open
            </a>
          </div>
          <div className="mt-8 pt-[18px] border-t border-[rgba(246,247,241,.13)] flex flex-wrap gap-5 font-mono text-[11px] tracking-[.06em] uppercase text-[#7A948D] rv">
            {HERO_META_TAGS.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right column — case card + mascot */}
        <div className="relative lg:pl-[clamp(0px,8.6vw,126px)]">
          <div className="relative z-10 rounded-[14px] bg-[linear-gradient(180deg,rgba(18,73,75,.95),rgba(10,45,47,.95))] border border-[rgba(246,247,241,.24)] shadow-[0_30px_70px_-30px_rgba(0,0,0,.78)] overflow-hidden">
            {/* Card header */}
            <div className="flex items-center justify-between gap-3 px-[18px] py-[14px] border-b border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.45)]">
              <span className="font-mono text-[12.5px] tracking-[0.08em]">CASE &middot; 1FC-H-000412</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[.12em] uppercase px-[9px] py-1 rounded-full border border-[rgba(224,161,57,.45)] text-[#E0A139] bg-[rgba(224,161,57,.09)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0A139] animate-[pulse_2.2s_infinite]" />
                In progress
              </span>
            </div>

            {/* Card rows */}
            <div className="px-[18px] py-[18px]">
              {HERO_CARD_ROWS.map(({ time, cls, title, sub }) => (
                <div key={time} className="grid grid-cols-[78px_20px_1fr] gap-3 items-start py-[11px] border-b border-dashed border-[rgba(246,247,241,.09)] last:border-0">
                  <span className="font-mono text-[11.5px] text-[#7A948D] pt-0.5">{time}</span>
                  <span className="flex justify-center pt-1.5">
                    <span className={`w-[9px] h-[9px] rounded-full border-[1.5px] border-[#7A948D] transition-all duration-[400ms] ${cls === 'done' ? 'bg-[#7FC49A] border-[#7FC49A]' : cls === 'now' ? 'bg-[#E0A139] border-[#E0A139] shadow-[0_0_0_4px_rgba(224,161,57,.16)]' : ''}`} />
                  </span>
                  <span>
                    <strong className="block text-[14.5px] font-semibold">{title}</strong>
                    <span className="block text-[13px] text-[#9DB4AC] leading-[1.45]">{sub}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Card footer */}
            <div className="flex items-center gap-3 px-[18px] py-[14px] border-t border-[rgba(246,247,241,.13)] bg-[rgba(6,28,30,.35)] font-mono text-[10.5px] tracking-[.06em] uppercase text-[#9DB4AC]">
              <span className="w-6 h-6 rounded-full bg-[#E0A139] grid place-items-center font-sans text-[10.5px] font-bold text-[#20160a]">RK</span>
              Owned by a named coordinator
            </div>
          </div>

          {/* Floating mascot */}
          <span className="mascot-hero absolute bottom-[-10px] left-[-20px] h-[clamp(206px,21vw,300px)] pointer-events-none z-20 hidden lg:block animate-[float_6s_ease-in-out_infinite]">
            <MascotIllustration variant="hero" className="h-full w-auto drop-shadow-[0_24px_30px_rgba(0,0,0,.45)]" />
          </span>
        </div>
      </div>
    </section>
  )
}
