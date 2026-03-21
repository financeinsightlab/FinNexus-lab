export default function ResearchPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-xs tracking-[0.2em] text-teal-600 font-medium mb-4">
          RESEARCH ARCHIVE
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl leading-tight">
          Institutional Research Intelligence
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl text-base leading-relaxed">
          Structured, data-driven research across sectors, markets, and emerging industries.
          Built for investors, operators, and decision-makers.
        </p>

      </section>

      {/* SEARCH + FILTER BAR */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <div className="flex flex-col md:flex-row gap-4 items-center">

            {/* SEARCH */}
            <input
              placeholder="Search reports by keyword, sector, or title..."
              className="flex-1 px-5 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
            />

            {/* FILTERS */}
            <div className="flex gap-2 flex-wrap">

              {['All', 'Fintech', 'Energy', 'Quick Commerce'].map((tag, i) => (
                <button
                  key={tag}
                  className={`px-4 py-2 text-sm rounded-md border transition
                  ${i === 0
                    ? 'bg-[#1A2B3C] text-white border-[#1A2B3C]'
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>

            {/* RESEARCH GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 tracking-wide font-medium mb-2">
              QUICK COMMERCE • 2026-03-01
            </p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition">
              India Quick Commerce 2026: The Dark Store Evolution
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              A deep dive into unit economics, consolidation trends, and profitability roadmap
              for Blinkit, Zepto, and Swiggy Instamart.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                22 Page Report
              </span>

              <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition">
                View Full →
              </span>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 tracking-wide font-medium mb-2">
              FINTECH • 2026-02-15
            </p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition">
              Fintech Credit Landscape: Beyond Payments
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Analyzing the shift from transaction processing to high-yield lending models
              in the Indian startup ecosystem.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                18 Page Report
              </span>

              <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition">
                View Full →
              </span>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 tracking-wide font-medium mb-2">
              ENERGY • 2026-01-10
            </p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition">
              Renewable Energy Infrastructure: The Green Hydrogen Bet
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Strategic assessment of India's green hydrogen policy and its impact
              on infrastructure CapEx cycles.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                25 Page Report
              </span>

              <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition">
                View Full →
              </span>

            </div>

          </div>

        </div>

      </section>

            {/* FEATURED REPORT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-[#1A2B3C] rounded-2xl p-10 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs tracking-[0.2em] text-teal-400 mb-4">
              FEATURED REPORT
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              India’s Startup Economy: Capital Efficiency & Growth Reset
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              A comprehensive analysis of capital allocation trends, burn optimization,
              and evolving investor expectations across India’s startup ecosystem.
            </p>

            <button className="bg-teal-500 text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-teal-400 transition">
              View Full Report →
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden md:block">
            <div className="w-full h-[220px] rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="text-sm text-gray-400">
                Report Preview
              </span>
            </div>
          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="bg-[#1A2B3C] py-20 text-center text-white">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          Access Institutional-Grade Research
        </h2>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Partner with FinNexus Lab for custom research, financial modeling, and
          strategic intelligence tailored to your business.
        </p>

        <a
          href="/contact"
          className="inline-block bg-teal-500 text-black px-8 py-3 text-sm font-medium rounded-md hover:bg-teal-400 transition"
        >
          Work With Me →
        </a>

      </section>

    </main>
  )
}