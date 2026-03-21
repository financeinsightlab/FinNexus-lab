'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Research', href: '/research' },
    { name: 'Insights', href: '/insights' },
    { name: 'Tools', href: '/tools' },
    { name: 'Data Lab', href: '/data-lab' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Services', href: '/services' },
    { name: 'Admin', href: '/admin' },
  ]

  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          FinNexus <span className="text-gray-400">Lab</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* CTA BUTTON (DESKTOP) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-teal-600 text-white px-4 py-2 text-sm rounded-md hover:bg-teal-700 transition"
          >
            Work With Me
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[4px]"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base text-gray-700 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA MOBILE */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-teal-600 text-white px-4 py-3 rounded-md hover:bg-teal-700 transition"
          >
            Work With Me
          </Link>

        </div>
      )}

    </header>
  )
}