'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gradient">
          Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-ink-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}