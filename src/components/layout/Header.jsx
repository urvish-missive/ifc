import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Insurance', href: '/#cover' },
  { label: 'Claims', href: '/#claims' },
  { label: 'How it works', to: '/how-it-works', isRoute: true },
  { label: 'Why 1FC Insure', href: '/#trust' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(246,247,241,.13)] bg-[#061C1E]">
      <nav className="mx-auto flex h-[70px] w-full max-w-[var(--maxw)] items-center justify-between px-[var(--pad)]">
        {/* Brand */}
        <Link
          to="/"
          aria-label="1FC Insure — home"
          className="flex items-center gap-2.5"
        >
          <span className="font-display text-[1.4rem] font-bold tracking-tight text-[#F6F7F1]">
            1FC <span className="font-normal">Insure</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isHowItWorksActive = item.isRoute && location.pathname === '/how-it-works'
            return (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.to}
                    className={`relative py-1 text-[14.5px] font-medium transition-colors hover:text-[#F6F7F1] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#E0A139] after:transition-all after:duration-300 ${
                      isHowItWorksActive
                        ? 'text-[#F6F7F1] after:w-full'
                        : 'text-[#C6D3CB] after:w-0 hover:after:w-full'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="relative py-1 text-[14.5px] font-medium text-[#C6D3CB] transition-colors hover:text-[#F6F7F1] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#E0A139] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA button */}
        <a
          href="/#access"
          className="ml-8 hidden rounded-[9px] bg-[#E0A139] px-[17px] py-[10px] text-[14px] font-semibold text-[#20160A] transition-all hover:-translate-y-0.5 hover:bg-[#EDB253] lg:inline-flex"
        >
          Start with 1FC Insure
        </a>

        {/* Mobile toggle */}
        <button
          className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-[#F6F7F1] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[var(--maxw)] border-t border-[rgba(246,247,241,.13)] bg-[#061C1E] backdrop-blur-xl lg:hidden"
          >
            <div className="px-[var(--pad)] py-5">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.isRoute ? (
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3.5 border-b border-[rgba(246,247,241,.13)] text-[16px] font-medium text-[#C6D3CB] transition-colors hover:text-[#F6F7F1]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3.5 border-b border-[rgba(246,247,241,.13)] text-[16px] font-medium text-[#C6D3CB] transition-colors hover:text-[#F6F7F1]"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="/#access"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex w-full items-center justify-center rounded-[9px] bg-[#E0A139] px-6 py-3.5 text-[15px] font-semibold text-[#20160A]"
              >
                Start with 1FC Insure
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
