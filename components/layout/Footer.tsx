export default function Footer() {
  return (
    <footer className="bg-[#1f3447] text-gray-300 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* LEFT: BRAND */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            FinNexus Lab
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            Financial intelligence platform delivering institutional-quality 
            research, strategy, and analytics for markets and founders.
          </p>

          {/* Social Icons (simple version) */}
          <div className="flex gap-4">
            <a href="#" className="border border-gray-600 p-2 hover:border-teal-400">
              in
            </a>
            <a href="#" className="border border-gray-600 p-2 hover:border-teal-400">
              @
            </a>
          </div>
        </div>

        {/* CENTER: NAVIGATION */}
        <div>
          <h3 className="text-teal-400 text-sm mb-4 tracking-wide">
            NAVIGATION
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">

            <a href="/" className="hover:text-white">Home</a>
            <a href="/research" className="hover:text-white">Research</a>

            <a href="/insights" className="hover:text-white">Insights</a>
            <a href="/tools" className="hover:text-white">Tools</a>
            <a href="/services" className="hover:text-white">Services</a>

            <a href="/resume" className="hover:text-white">Resume</a>
            <a href="/about" className="hover:text-white">About</a>

            <a href="/contact" className="hover:text-white">Work With Me</a>

          </div>
        </div>

        {/* RIGHT: CTA */}
        <div>
          <h3 className="text-teal-400 text-sm mb-4 tracking-wide">
            GET IN TOUCH
          </h3>

          <p className="text-sm text-gray-400 mb-6">
            Available for custom research mandates and strategic consulting engagements.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-white"
          >
            Start a project →
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-sm text-gray-500 px-6 py-6 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">

        <span>© 2026 FinNexus Lab. All rights reserved.</span>

        <span className="mt-2 md:mt-0">
          Financial Intelligence for Markets, Strategy & Data
        </span>

      </div>

    </footer>
  )
}