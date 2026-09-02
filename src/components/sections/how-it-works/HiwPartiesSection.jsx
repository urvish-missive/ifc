import { useState } from 'react'

const PARTIES = {
  you: {
    name: 'You',
    role: 'The person it is for',
    h: 'You say what happened. That is the part only you can do.',
    b: 'You make the decisions about your own cover and you tell us when something changes. Everything else on this page exists so that is all that is asked of you.',
    does: [
      'Describe the situation, once',
      'Decide what cover you want',
      'Sign and disclose honestly',
    ],
    not: [
      'Chase the hospital desk',
      'Assemble the claim file',
      'Follow up with the insurer',
    ],
  },
  fc: {
    name: '1FC Insure',
    role: 'Advice and coordination',
    h: '1FC Insure advises, coordinates and follows up.',
    b: 'We place the cover and then hold the file: documentation, hospital coordination, filing and follow-up, all through one named coordinator who stays with the case until it closes.',
    does: [
      'Advise and place the policy',
      'Coordinate with hospital and insurer',
      'Assemble and file the documents',
      'Explain the outcome in plain language',
    ],
    not: [
      'Underwrite the risk',
      'Approve or reject a claim',
      'Decide what is covered',
      'Pay the settlement',
    ],
  },
  hosp: {
    name: 'Hospital',
    role: 'Treatment and paperwork',
    h: 'The hospital treats, and issues the paperwork.',
    b: 'Admission notes, estimates, investigation reports and the discharge summary all originate here, usually at the worst possible hour. We deal with their insurance desk directly rather than sending you back to them.',
    does: [
      'Admit and treat the patient',
      'Raise the cashless request',
      'Issue the medical documents',
    ],
    not: [
      'Decide your claim',
      'Hold your policy history',
      'Coordinate on your behalf',
    ],
  },
  ins: {
    name: 'Insurer and TPA',
    role: 'Decides and pays',
    h: 'The insurer and TPA decide the claim, and pay it.',
    b: 'That authority is theirs alone, under the terms of your policy. Our job is to make sure the file reaching them is complete and on time, and to keep following it until there is an answer.',
    does: [
      'Assess the claim',
      'Approve, deduct or reject',
      'Pay the settlement',
      'Set the policy terms',
    ],
    not: [
      'Advise you on cover',
      'Assemble your documents',
      'Speak for you to the hospital',
    ],
  },
}

export default function HiwPartiesSection({ onSelectParty }) {
  const [selected, setSelected] = useState('you')
  const [isFading, setIsFading] = useState(false)

  const handlePick = (key) => {
    if (key === selected) return
    setIsFading(true)
    setTimeout(() => {
      setSelected(key)
      setIsFading(false)
      if (onSelectParty) onSelectParty(key)
    }, 140)
  }

  const d = PARTIES[selected]

  return (
    <section className="parties bg-[var(--paper)] pt-[clamp(48px,6vw,84px)] max-md:pt-10 pb-[clamp(56px,6.4vw,84px)]" id="parties">
      <div className="parties-in max-w-[1180px] mx-auto px-4 md:px-[var(--pad)]">
        <span className="kicker block font-mono text-[11px] tracking-[.22em] uppercase text-[var(--ink-3)] mb-2.5 mt-0">
          Who does what
        </span>

        <h2 className="text-[clamp(24px,2.8vw,36px)] font-display font-bold tracking-[-.03em] text-[var(--ink)] max-w-[20ch]">
          Four parties. Only one of them is usually left doing the coordinating.
        </h2>

        <div className="pgrid grid grid-cols-1 md:grid-cols-[300px_1fr] gap-[clamp(24px,3.4vw,56px)] mt-[clamp(26px,3.2vw,40px)] items-start">
          {/* Tabs — 4-col horizontal on ALL screens */}
          <div className="plist grid grid-cols-4 md:grid-cols-1 gap-1 md:gap-2">
            {Object.keys(PARTIES).map((key) => {
              const p = PARTIES[key]
              const isCurrent = selected === key
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isCurrent}
                  onClick={() => handlePick(key)}
                  className={`ptab text-left rounded-[8px] md:rounded-[11px] p-[7px_4px] md:p-[14px_18px] min-w-0 cursor-pointer transition-all ${isCurrent
                    ? 'bg-[var(--ink)] border border-[var(--ink)] text-[var(--cream)]'
                    : 'bg-transparent border border-[var(--line-l2)] hover:border-[var(--ink)]'
                    }`}
                >
                  <span className={`pn block font-display font-bold text-[9px] md:text-[16px] tracking-[-.02em] leading-tight truncate ${isCurrent ? 'text-[var(--cream)]' : 'text-[var(--ink)]'}`}>
                    {p.name}
                  </span>
                  <span className={`pr block font-mono text-[6px] md:text-[9.5px] tracking-[.08em] md:tracking-[.14em] uppercase mt-px md:mt-1 leading-tight ${isCurrent ? 'text-[var(--amber)]' : 'text-[var(--ink-3)]'}`}>
                    {p.role}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div className={`ppanel border-l border-[var(--line-l2)] pl-[clamp(24px,3vw,44px)] min-h-[210px] max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-6 max-md:min-h-0 transition-opacity duration-250 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="ph font-display font-bold text-[clamp(19px,2.1vw,25px)] tracking-[-.026em] text-[var(--ink)]">
              {d.h}
            </div>
            <p className="pb text-[15.4px] text-[var(--ink-2)] leading-[1.6] mt-3 max-w-[60ch]">
              {d.b}
            </p>

            <div className="pdoes mt-5 grid grid-cols-1 sm:grid-cols-2 gap-[clamp(18px,2.4vw,36px)]">
              <div>
                <h4 className="font-mono text-[9.5px] tracking-[.16em] uppercase text-[var(--ink-3)] mb-2 font-semibold">
                  Responsible for
                </h4>
                <ul className="list-none m-0 p-0">
                  {d.does.map((item) => (
                    <li key={item} className="text-[14.2px] text-[var(--ink-2)] leading-[1.5] py-[5px] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[.72em] before:w-[7px] before:h-[1px] before:bg-[#9BB29E]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="no">
                <h4 className="font-mono text-[9.5px] tracking-[.16em] uppercase text-[var(--ink-3)] mb-2 font-semibold">
                  Not responsible for
                </h4>
                <ul className="list-none m-0 p-0">
                  {d.not.map((item) => (
                    <li key={item} className="text-[14.2px] text-[var(--ink-2)] leading-[1.5] py-[5px] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[.72em] before:w-[7px] before:h-[1px] before:bg-[#C08672]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
