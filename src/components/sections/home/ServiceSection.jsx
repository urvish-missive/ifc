const SERVICES = [
  { tag: 'Customer record', h: 'One place where your cover actually lives.', p: 'Policies, family members, contact history and past cases sit in a single customer record, so the team that picks up your call already knows what you hold and what happened last time.' },
  { tag: 'Case desk', h: 'Every request becomes a case, not a phone call.', p: 'A service request, a claim intimation and a hospital coordination call all open the same object, with an owner, a status, a document set and a full history. Nothing lives in a thread only one person can see.', chips: ['named owner', 'live status', 'document checklist', 'turnaround clock'] },
  { tag: 'Hospitalisation', h: 'Someone on the phone who has done this before.', p: 'Hospital-facing coordination and documentation support, insurer and TPA follow-up, and ambulance assistance where that service is available under the applicable 1FC service model.' },
  { tag: 'Renewal', h: 'Renewal as continuity, not a cold call.', p: 'Reminders, advice and renewal support from the same relationship, across health, life and general insurance, handled by the people who handled your claim.' },
]

export default function ServiceSection() {
  return (
    <section id="service" className="bg-[#EAEDE3] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            What you get
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#0C3436] rv">
            Four things a family actually holds.
          </h2>
        </div>
        <div className="mt-[clamp(28px,3.2vw,42px)]">
          {SERVICES.map(({ tag, h, p, chips }) => (
            <div key={tag} className="grid grid-cols-1 lg:grid-cols-[minmax(200px,.85fr)_minmax(0,1.15fr)] gap-3 lg:gap-[clamp(20px,3vw,44px)] py-[clamp(24px,2.8vw,34px)] border-t border-[#C9D2C2] rv">
              <div>
                <div className="mb-3 font-mono text-[10.5px] tracking-[.17em] uppercase text-[#7A8C80]">{tag}</div>
                <h3 className="text-[clamp(18px,1.75vw,22px)] font-semibold tracking-[-0.02em] leading-[1.18] mt-2.5 text-[#0C3436]">{h}</h3>
              </div>
              <div>
                <p className="text-[15.4px] leading-[1.55] text-[#43584E]">{p}</p>
                {chips && (
                  <div className="flex gap-[7px] flex-wrap mt-auto pt-2">
                    {chips.map((c) => (
                      <span key={c} className="font-mono text-[10.5px] tracking-[.07em] text-[#3e5349] border border-[#B4C0AC] rounded-[5px] px-2 py-1 bg-white">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
