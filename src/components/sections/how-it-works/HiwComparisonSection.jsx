import { useEffect, useRef, useState } from 'react'

const COMPARISON_ROWS = [
  {
    oldText: 'Explain the whole thing again to somebody new',
    newText: 'You say what happened once. It is on your record after that.',
    delay: '0ms',
  },
  {
    oldText: 'Work out which document they actually meant',
    newText: 'One list, sent to you in one message, collected once.',
    delay: '120ms',
  },
  {
    oldText: 'Call the hospital insurance desk yourself',
    newText: 'Your coordinator speaks to them directly, from the first hour.',
    delay: '240ms',
  },
  {
    oldText: 'Chase the insurer for a status update',
    newText: 'We follow it up and tell you where it stands, in plain language.',
    delay: '360ms',
  },
  {
    oldText: 'Remember all of it by renewal time',
    newText: 'The history is already there, so renewal is a conversation.',
    delay: '480ms',
  },
]

export default function HiwComparisonSection() {
  const sectionRef = useRef(null)
  const [isStruck, setIsStruck] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.top < vh * 0.68) {
        setIsStruck(true)
      } else if (rect.top > vh * 0.86) {
        setIsStruck(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="never bg-[#061C1E] text-[#F6F7F1] py-[clamp(64px,7.5vw,104px)] px-[var(--pad)]" id="never">
      <div className="never-in max-w-[var(--maxw)] mx-auto w-full">
        {/* Header */}
        <div className="nhead grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-[clamp(28px,4vw,72px)] items-end">
          <div>
            <div className="kicker font-mono text-[11px] tracking-[.22em] uppercase text-[#7A948D]">
              The short version
            </div>
            <h2 className="mt-4 text-[clamp(27px,3.3vw,43px)] font-display font-bold leading-[1.04] text-[#F6F7F1]">
              What insurance usually asks of you, and what it stops asking.
            </h2>
          </div>
          <p className="nlede text-[17px] text-[#CBD8CE] leading-[1.6]">
            Same claim, same hospital, same insurer. The only thing that changes is who does the work.
          </p>
        </div>

        {/* Comparison List */}
        <div className={`cmp ${isStruck ? 'struck' : ''} mt-[clamp(30px,3.6vw,46px)]`} id="nlist">
          {/* Header row */}
          <div className="ch a font-mono text-[10px] tracking-[.19em] uppercase text-[#7A948D] pb-3.5">
            How it usually goes
          </div>
          <div className="ch b font-mono text-[10px] tracking-[.19em] uppercase text-[var(--amber)] pb-3.5 pl-[clamp(26px,3.2vw,56px)] border-l border-[var(--line-d)]">
            With 1FC Insure
          </div>

          {/* Row mappings */}
          {COMPARISON_ROWS.map((row) => (
            <div key={row.oldText} className="contents">
              <div className="ca border-t border-[var(--line-d)] py-[clamp(14px,1.6vw,19px)] pr-[clamp(26px,3.2vw,56px)] flex items-center">
                <span className="nold font-display font-semibold tracking-[-.022em] text-[clamp(15px,1.42vw,19px)] leading-[1.34] text-[#77908A]" style={{ '--d': row.delay }}>
                  {row.oldText}
                </span>
              </div>
              <div className="cb border-t border-[var(--line-d)] py-[clamp(14px,1.6vw,19px)] pl-[clamp(26px,3.2vw,56px)] border-l border-[var(--line-d)] flex items-center">
                <span className="nnew font-display font-semibold tracking-[-.022em] text-[clamp(15px,1.42vw,19px)] leading-[1.34] text-[var(--cream)]" style={{ '--d': row.delay }}>
                  <i className="not-italic text-[var(--amber)] mr-2 inline-block">&rarr;</i>
                  {row.newText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
