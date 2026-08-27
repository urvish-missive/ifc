import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'The reality', href: '#reality' },
  { label: 'The case desk', href: '#desk' },
  { label: 'What you get', href: '#service' },
  { label: 'Why 1FC Insure', href: '#trust' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#09272A]"
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center px-6 sm:px-10">
        {/* Brand */}
        <Link
          to="/"
          aria-label="1FC Insure — home"
          className="flex items-center gap-2.5"
        >
          <span className="font-display text-[1.35rem] font-bold tracking-tight text-cream">
            1FC <span className="font-normal">Insure</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative py-2 text-[14.5px] font-medium text-[#C6D3CB] transition-colors hover:text-cream after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-marigold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#access"
          className="ml-8 hidden rounded-lg bg-marigold px-6 py-2.5 text-[14.5px] font-semibold text-[#20160A] transition-all hover:-translate-y-0.5 hover:bg-[#EDB253] hover:shadow-lg lg:inline-flex"
        >
          Request early access
        </a>

        {/* Mobile toggle */}
        <button
          className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-cream lg:hidden"
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
            className="mx-auto max-w-[1280px] border-t border-white/[0.06] bg-[#0a2a27]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[1rem] font-medium text-[#C6D3CB] transition-colors hover:bg-white/[0.05] hover:text-cream"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#access"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-marigold px-6 py-3 text-[1rem] font-semibold text-[#20160A]"
              >
                Request early access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
