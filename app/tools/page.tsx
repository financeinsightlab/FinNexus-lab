export default function ToolsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-xs tracking-[0.2em] text-teal-600 font-medium mb-4">
          FINANCIAL TOOLS
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl leading-tight">
          Models, Calculators & Decision Frameworks
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl text-base leading-relaxed">
          Structured financial tools designed to support valuation, analysis,
          and strategic decision-making.
        </p>

      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6 mb-12">

        <div className="flex flex-wrap gap-3">

          {[
            'All',
            'Valuation',
            'Financial Models',
            'Calculators',
            'Frameworks',
          ].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm rounded-md border transition
              ${
                i === 0
                  ? 'bg-[#1A2B3C] text-white border-[#1A2B3C]'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

      </section>

            {/* FEATURED TOOL */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-[#1A2B3C] rounded-2xl p-10 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs tracking-[0.2em] text-teal-400 mb-4">
              FEATURED TOOL
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Startup Valuation Model (DCF)
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              A structured DCF-based valuation tool with scenario analysis,
              growth projections, and sensitivity modeling.
            </p>

            <button className="bg-teal-500 text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-teal-400 transition">
              Use Tool →
            </button>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block">
            <div className="w-full h-[220px] bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                Tool Preview
              </span>
            </div>
          </div>

        </div>

      </section>


      {/* TOOLS GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {/* TOOL 1 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 mb-2 font-medium">
              VALUATION
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              DCF Calculator
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Estimate intrinsic value using discounted cash flow methodology.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                Interactive Tool
              </span>

              <span className="text-sm font-medium group-hover:translate-x-1 transition">
                Open →
              </span>

            </div>

          </div>

          {/* TOOL 2 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 mb-2 font-medium">
              MODEL
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              3-Statement Model
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Build integrated financial statements with projections and assumptions.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                Excel Model
              </span>

              <span className="text-sm font-medium group-hover:translate-x-1 transition">
                Use →
              </span>

            </div>

          </div>

          {/* TOOL 3 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 mb-2 font-medium">
              CALCULATOR
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Break-even Calculator
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Calculate break-even point based on costs, pricing, and volume.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                Quick Tool
              </span>

              <span className="text-sm font-medium group-hover:translate-x-1 transition">
                Calculate →
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* SECTION DIVIDER */}
      <div className="border-t max-w-6xl mx-auto my-20" />

            {/* PREMIUM POSITIONING */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-white border border-gray-200 rounded-2xl p-10 md:p-12 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Built for Analysts, Founders & Investors
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            These tools are designed using real-world financial frameworks — 
            not generic calculators. Every model reflects how institutional 
            analysts evaluate businesses and opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <span className="bg-gray-100 px-4 py-2 rounded-md text-sm">
              Financial Modeling
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-md text-sm">
              Valuation
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-md text-sm">
              Scenario Analysis
            </span>

            <span className="bg-gray-100 px-4 py-2 rounded-md text-sm">
              Decision Frameworks
            </span>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-[#1A2B3C] py-24 text-center text-white">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          Build Custom Financial Tools for Your Business
        </h2>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Need advanced models, dashboards, or decision systems tailored to your business?
          FinNexus Lab builds institutional-grade tools for real-world applications.
        </p>

        <a
          href="/contact"
          className="inline-block bg-teal-500 text-black px-8 py-3 text-sm font-medium rounded-md hover:bg-teal-400 transition"
        >
          Request Custom Tool →
        </a>

      </section>

    </main>
  )
}