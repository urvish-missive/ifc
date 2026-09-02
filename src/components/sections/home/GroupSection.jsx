const GROUP_NODES = [
  {
    self: false,
    nm: '1FCode',
    ds: 'The financial operating system the group is built on.',
  },
  {
    self: true,
    nm: '1FC Insure',
    ds: 'Insurance advice, cover and the support that follows it. You are here.',
  },
  {
    self: false,
    nm: 'Shared foundation',
    ds: 'One platform layer, one security model and one design system across every 1FC product.',
  },
]

export default function GroupSection() {
  return (
    <section id="group" className="bg-[#061C1E] text-[#F6F7F1] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A948D]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            The 1FC group
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-bold tracking-[-0.032em] leading-[1.04] text-[#F6F7F1]">
            Part of 1FC.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#CBD8CE]">
            1FC Insure is not a standalone insurance site. It sits inside a wider financial platform and shares its design language, engineering standards and service philosophy with the rest of the group.
          </p>
        </div>

        {/* 3 Ecosystem Nodes */}
        <div className="eco mt-[clamp(28px,3.2vw,40px)] grid grid-cols-1 md:grid-cols-3 gap-[clamp(14px,1.8vw,20px)]">
          {GROUP_NODES.map(({ self: isSelf, nm, ds }) => (
            <div
              key={nm}
              className={`enode rounded-[12px] p-[clamp(22px,2.4vw,28px)] transition-all rv ${
                isSelf
                  ? 'self border border-[rgba(224,161,57,.5)] bg-[rgba(224,161,57,.07)]'
                  : 'border border-[rgba(246,247,241,.13)] bg-[rgba(246,247,241,.03)] hover:-translate-y-1 hover:border-[rgba(246,247,241,.24)]'
              }`}
            >
              <div
                className={`nm font-display font-bold text-[18px] tracking-[-.02em] ${
                  isSelf ? 'text-[#E0A139]' : 'text-[#F6F7F1]'
                }`}
              >
                {nm}
              </div>
              <p className="ds text-[13.8px] text-[#9DB4AC] mt-[9px] leading-[1.55]">
                {ds}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
