const IS_ITEMS = [
  'An insurance broking and POSP distribution business',
  'A customer assistance and coordination service on top of it',
  'Multi-line, with health insurance first',
  'Part of the wider 1FC group',
  'Input required: licence entity, registration number and regulatory disclosures',
]

const IS_NOT_ITEMS = [
  'Not an insurance company. We do not underwrite risk.',
  'Not a TPA. We do not adjudicate or settle claims.',
  'Not a guarantee of approval, cashless status or payout.',
  'Not a comparison engine dressed up as advice.',
]

const PILLARS = [
  { n: '01', h: 'Built on 1FC infrastructure', p: '1FC Insure is not a standalone insurance site. It shares engineering standards, design language and platform thinking with 1FCode, the group\'s financial operating system.' },
  { n: '02', h: 'Designed around the case, not the sale', p: 'Sales, operations, claims, hospital coordination and renewals work off one customer relationship, so nobody has to be told the story twice.' },
  { n: '03', h: 'Built for clarity', p: 'Status, documents, turnaround and the exact point a decision passes to the insurer are all visible on the case. You should never have to ask what is happening.' },
  { n: '04', h: 'Secure by design', p: 'Role-based access control and audit trails are first release requirements, not later additions. Consent, privacy and retention controls are being defined with compliance and legal before any customer data is collected.' },
  { n: '05', h: 'Multi-line, health first', p: 'Advisory and distribution across health, life and general insurance through 1FC\'s broking and POSP network, led by health because that is where service failure hurts most.' },
  { n: '06', h: 'Human when it matters', p: 'A named coordinator owns your case. Not a queue, not a bot, not whoever picks up.' },
]

export default function TrustNewSection() {
  return (
    <section id="trust" className="bg-[#EAEDE3] px-[var(--pad)] py-[clamp(54px,6.2vw,80px)]">
      <div className="max-w-[var(--maxw)] mx-auto">
        {/* Header */}
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80] rv">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Why trust 1FC Insure
          </span>
          <h2 className="mt-[22px] text-[clamp(27px,3.3vw,43px)] font-display font-semibold tracking-[-0.02em] leading-[1.05] text-[#0C3436] rv">
            Built to be accountable for the part that is usually nobody&apos;s job.
          </h2>
          <p className="mt-5 text-[clamp(16px,1.42vw,18.5px)] leading-[1.62] text-[#43584E] max-w-[58ch] rv">
            In a category built on over-promising, being explicit about our limits is the more useful thing to publish.
          </p>
        </div>

        {/* Pillars grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(14px,2vw,20px)]">
          {PILLARS.map(({ n, h, p }) => (
            <div
              key={n}
              className="border border-[#C9D2C2] rounded-[var(--r)] p-[clamp(20px,2.4vw,28px)] bg-[#F2F4EC] rv"
            >
              <span className="font-mono text-[10.5px] tracking-[.14em] uppercase text-[#7A8C80]">{n}</span>
              <h4 className="mt-3 mb-2.5 text-[19px] font-semibold tracking-[-0.022em] text-[#0C3436]">{h}</h4>
              <p className="text-[14.6px] leading-[1.55] text-[#4A5F55]">{p}</p>
            </div>
          ))}
        </div>

        {/* Declaration cards — is / is not, always 2-col */}
        <div className="mt-[clamp(14px,2vw,20px)] grid grid-cols-2 gap-[clamp(10px,1.6vw,20px)]">
          <div className="border border-[#C9D2C2] rounded-[var(--r)] p-[clamp(14px,2vw,28px)] bg-[#F2F4EC] rv">
            <h4 className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-[-0.02em] text-[#0C3436] mb-2 sm:mb-3">What 1FC Insure is</h4>
            <ul className="list-none text-[clamp(12px,1.3vw,14.6px)] text-[#4A5F55]">
              {IS_ITEMS.map((item) => (
                <li key={item} className="py-[7px] sm:py-[9px] border-t border-[#C9D2C2] first:border-0 first:pt-0 flex gap-1.5 sm:gap-2.5 leading-[1.45]">
                  <span className="text-[#96A79A] flex-none font-mono text-[clamp(11px,1.2vw,14px)]">+</span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[#C9D2C2] rounded-[var(--r)] p-[clamp(14px,2vw,28px)] bg-[#F2F4EC] rv">
            <h4 className="text-[clamp(14px,1.6vw,18px)] font-semibold tracking-[-0.02em] text-[#0C3436] mb-2 sm:mb-3">What 1FC Insure is not</h4>
            <ul className="list-none text-[clamp(12px,1.3vw,14.6px)] text-[#4A5F55]">
              {IS_NOT_ITEMS.map((item) => (
                <li key={item} className="py-[7px] sm:py-[9px] border-t border-[#C9D2C2] first:border-0 first:pt-0 flex gap-1.5 sm:gap-2.5 leading-[1.45]">
                  <span className="text-[#B4402E] flex-none font-mono font-semibold text-[clamp(11px,1.2vw,14px)]">x</span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Where we are today */}
        <div className="mt-[clamp(20px,3vw,28px)] border border-[#B4C0AC] rounded-[var(--r)] p-[clamp(22px,3vw,34px)] bg-[#F2F4EC] rv">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[.19em] uppercase text-[#7A8C80]">
            <span className="w-[26px] h-px bg-[#E0A139] flex-none" />
            Where we are today
          </span>
          <p className="mt-3.5 text-[clamp(17px,2vw,22px)] font-display font-semibold tracking-[-0.02em] text-[#0C3436] max-w-[58ch] leading-[1.25]">
            1FC Insure is in build. This page describes the service we are constructing, not a live product with a claims history behind it.
          </p>
          <p className="mt-3.5 text-[15px] text-[#4A5F55] max-w-[66ch]">
            There are no customer numbers, settlement ratios or testimonials on this page, because there are no honest ones to show yet. Every statistic here is about the industry, sourced and dated. What we can offer now is early access, and the chance to shape what the desk looks like before it opens.
          </p>
        </div>
      </div>
    </section>
  )
}
