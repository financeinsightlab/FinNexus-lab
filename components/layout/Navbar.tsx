import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          FinNexus <span className="text-gray-400">Lab</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href="/research">Research</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/data-lab">Data Lab</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/services">Services</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        {/* CTA */}
       <Link
  href="/contact"
  className="bg-teal-600 text-white px-5 py-2 rounded-md text-sm"
>
  Work With Me
</Link>

      </div>
    </header>
  )
}