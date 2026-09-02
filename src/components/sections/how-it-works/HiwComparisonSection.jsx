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
    <section ref={sectionRef} className="never bg-[#061C1E] text-[#F6F7F1] py-[clamp(64px,7.5vw,104px)]" id="never">
      <div className="never-in max-w-[var(--maxw)] mx-auto px-[var(--pad)]">
        {/* Header */}
        <div className="nhead grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-[clamp(28px,4vw,72px)] items-end">
          <div>
            <div className="kicker font-mono text-[11px] tracking-[.22em] uppercase text-[#7A948D]">
              The short version
            </div>
            <h2 className="mt-4 text-[clamp(26px,3.2vw,42px)] font-display font-bold text-[#F6F7F1] max-w-[18ch] leading-[1.1]">
              What insurance usually asks of you, and what it stops asking.
            </h2>
          </div>
          <p className="nlede text-[clamp(15px,1.5vw,17.5px)] text-[#9DB4AC] leading-[1.6] max-w-[38ch] pb-1.5">
            Same claim, same hospital, same insurer. The only thing that changes is who does the work.
          </p>
        </div>

        {/* Comparison grid */}
        <div className={`cmp mt-[clamp(30px,3.6vw,46px)] ${isStruck ? 'struck' : ''}`} id="nlist">
          <div className="ch a font-mono text-[10px] tracking-[.19em] uppercase text-[#7A948D] pb-3.5">
            How it usually goes
          </div>
          <div className="ch b font-mono text-[10px] tracking-[.19em] uppercase text-[#E0A139] pb-3.5">
            With 1FC Insure
          </div>

          {COMPARISON_ROWS.map(({ oldText, newText, delay }) => (
            <div key={oldText} className="contents">
              <div className="ca">
                <span className="nold" style={{ '--d': delay }}>
                  {oldText}
                </span>
              </div>
              <div className="cb">
                <span className="nnew" style={{ '--d': delay }}>
                  <i>&rarr;</i> {newText}
                </span>
              </div>
            </div>
          ))}

          <div className="ca last border-t-transparent" />
          <div className="cb last pt-[clamp(20px,2.4vw,30px)]">
            <p className="out text-[clamp(16.5px,1.7vw,20px)] text-[#F6F7F1] font-display font-semibold tracking-[-.022em] max-w-[32ch] leading-[1.3]">
              That is the difference between having a policy and having somebody on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
