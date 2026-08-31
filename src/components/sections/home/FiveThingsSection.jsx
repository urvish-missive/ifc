const CAPS = [
  {
    tag: '01 · Identity',
    wide: true,
    h: 'One card. One QR. One number that works at 2am.',
    p: 'Every 1FC customer will get a unique 1FC ID and a QR that opens a service request without an app, a login, or hunting for a policy number. It is designed for the person who is not the policyholder: the son, the neighbour, whoever is standing at the admission desk.',
    idcard: true,
  },
  {
    tag: '02 · The case desk',
    wide: true,
    h: 'Raise it once. Watch it move.',
    p: 'A service request, a claim intimation and a hospital coordination call all open the same object: a case, with an owner, a document set, a status and a history. Nothing lives in a WhatsApp thread that only one person can see.',
    chips: ['case owner', 'status', 'documents', 'turnaround clock', 'full history'],
  },
  {
    tag: '03 · Documents',
    wide: false,
    h: 'The list, before the hospital asks for it.',
    p: 'Every case carries its own document checklist. Upload once and the case keeps them. No re-sending the same discharge summary to three people.',
  },
  {
    tag: '04 · Hospitalisation',
    wide: false,
    h: 'Someone on the phone who has done this before.',
    p: 'Hospital-facing coordination and documentation support, insurer and TPA follow-up, and ambulance assistance where that service is available under the applicable 1FC service model.',
  },
  {
    tag: '05 · Renewal',
    wide: false,
    h: 'Renewal as continuity, not a cold call.',
    p: 'Reminders, advisory and renewal support from the same relationship, across health, life and general lines as the broking business expands.',
  },
]

const QR_SVG = (
  <svg className="w-[52px] h-[52px] flex-none rounded-[5px] border-[3px] border-[var(--cream)] bg-[var(--forest-900)]" viewBox="0 0 29 29" role="img" aria-label="Access QR code">
    <rect width="29" height="29" fill="#061C1E"/>
    <g fill="#F6F7F1">
      <path d="M1 1h7v7H1zm1 1v5h5V2z"/><rect x="3" y="3" width="3" height="3"/>
      <path d="M21 1h7v7h-7zm1 1v5h5V2z"/><rect x="23" y="3" width="3" height="3"/>
      <path d="M1 21h7v7H1zm1 1v5h5v-5z"/><rect x="3" y="23" width="3" height="3"/>
      <rect x="10" y="1" width="1" height="1"/><rect x="12" y="1" width="2" height="1"/><rect x="16" y="1" width="1" height="2"/>
      <rect x="10" y="3" width="2" height="1"/><rect x="13" y="4" width="1" height="2"/><rect x="17" y="4" width="2" height="1"/>
      <rect x="11" y="6" width="1" height="2"/><rect x="15" y="6" width="2" height="1"/>
      <rect x="1" y="10" width="2" height="1"/><rect x="4" y="10" width="1" height="2"/><rect x="6" y="11" width="2" height="1"/>
      <rect x="2" y="13" width="1" height="2"/><rect x="5" y="14" width="2" height="1"/>
      <rect x="1" y="16" width="1" height="2"/><rect x="4" y="17" width="3" height="1"/>
      <rect x="10" y="10" width="2" height="2"/><rect x="13" y="10" width="1" height="1"/><rect x="15" y="11" width="2" height="1"/>
      <rect x="18" y="10" width="1" height="2"/><rect x="10" y="13" width="1" height="2"/><rect x="12" y="14" width="2" height="1"/>
      <rect x="16" y="13" width="1" height="2"/><rect x="19" y="14" width="2" height="1"/>
      <rect x="11" y="16" width="2" height="1"/><rect x="14" y="17" width="1" height="2"/><rect x="17" y="16" width="2" height="2"/>
      <rect x="21" y="10" width="1" height="2"/><rect x="23" y="11" width="2" height="1"/><rect x="26" y="10" width="1" height="1"/>
      <rect x="22" y="13" width="2" height="1"/><rect x="25" y="14" width="1" height="2"/><rect x="27" y="13" width="1" height="2"/>
      <rect x="21" y="16" width="2" height="1"/><rect x="24" y="17" width="2" height="1"/>
      <rect x="10" y="20" width="1" height="2"/><rect x="12" y="21" width="2" height="1"/><rect x="15" y="20" width="1" height="2"/>
      <rect x="18" y="21" width="2" height="1"/><rect x="21" y="20" width="2" height="2"/><rect x="25" y="21" width="1" height="1"/>
      <rect x="11" y="23" width="2" height="1"/><rect x="14" y="24" width="1" height="2"/><rect x="17" y="23" width="2" height="1"/>
      <rect x="20" y="24" width="1" height="1"/><rect x="23" y="23" width="1" height="2"/><rect x="26" y="24" width="1" height="1"/>
      <rect x="10" y="26" width="2" height="1"/><rect x="13" y="26" width="1" height="2"/><rect x="16" y="26" width="2" height="1"/>
      <rect x="19" y="26" width="1" height="2"/><rect x="22" y="26" width="1" height="1"/><rect x="25" y="26" width="2" height="2"/>
    </g>
  </svg>
)

export default function FiveThingsSection() {
  return (
    <section id="product" className="bg-[#EAEDE3] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        {/* Header */}
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            What you actually hold
          </span>
          <div className="mt-[clamp(34px,4vw,54px)]">
            <h2 className="text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#0C3436] rv">
              Five things the customer<br className="max-sm:hidden" /> actually holds.
            </h2>
            <p className="mt-[20px] text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#43584E] max-w-[58ch] rv">
              Not modules. Not a dashboard tour. The things a family has in their hands when it matters.
            </p>
          </div>
        </div>

        {/* Cards grid — 6 columns on desktop to match reference layout */}
        <div className="mt-[52px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[clamp(12px,1.6vw,18px)]">
          {CAPS.map(({ tag, wide, h, p, idcard, chips }) => (
            <div
              key={tag}
              className={`
                flex flex-col gap-3.5
                border border-[#C9D2C2] rounded-[var(--r)]
                p-[clamp(22px,2.4vw,30px)] bg-[#F2F4EC]
                transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.7,.3,1)]
                hover:-translate-y-1 hover:border-[#1b564f] hover:shadow-[0_18px_40px_-26px_rgba(6,28,30,.5)]
                min-w-0
                rv
                ${wide ? 'lg:col-span-3' : 'lg:col-span-2'}
              `}
            >
              <span className="font-mono text-[10.5px] tracking-[.14em] uppercase text-[#7A8C80]">{tag}</span>
              <h3 className="text-[clamp(18px,1.75vw,22px)] font-semibold tracking-[-0.02em] leading-[1.18] text-[#0C3436]">{h}</h3>
              <p className="text-[14.8px] text-[#4A5F55] leading-[1.55]">{p}</p>

              {/* ID card (card 1 only) */}
              {idcard && (
                <div className="mt-1.5 bg-[#0C3436] rounded-[9px] p-3.5 flex items-center justify-between gap-3.5 text-[#F6F7F1]">
                  <div>
                    <div className="font-mono text-[9.5px] tracking-[.14em] uppercase text-[#9DB4AC]">1FC Customer ID</div>
                    <div className="font-mono text-[14px] tracking-[.06em] mt-1">1FC · 24 · 0 0 8 3 1 7</div>
                  </div>
                  {QR_SVG}
                </div>
              )}

              {/* Chips (card 2 only) */}
              {chips && (
                <div className="flex gap-[7px] flex-wrap mt-auto pt-2">
                  {chips.map((c) => (
                    <span key={c} className="font-mono text-[10.5px] tracking-[.07em] text-[#3E5349] border border-[#B4C0AC] rounded-[5px] px-2 py-1 bg-white">{c}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
