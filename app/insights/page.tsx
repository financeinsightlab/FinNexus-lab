export default function InsightsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-xs tracking-[0.2em] text-teal-600 font-medium mb-4">
          STRATEGIC INSIGHTS
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl leading-tight">
          Market Signals & Strategic Thinking
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl text-base leading-relaxed">
          Short-form analysis on markets, business models, and emerging trends —
          designed for fast, actionable understanding.
        </p>

      </section>

      {/* SEARCH + FILTER */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <div className="flex flex-col md:flex-row gap-4 items-center">

            <input
              placeholder="Search insights..."
              className="flex-1 px-5 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
            />

            <div className="flex gap-2 flex-wrap">

              {['All', 'Strategy', 'Fintech', 'Startups'].map((tag, i) => (
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

            {/* INSIGHTS GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {/* INSIGHT 1 */}
          <div className="group bg-white border border-gray-200 rounded-xl p-5 transition hover:shadow-md">

            <p className="text-xs text-teal-600 tracking-wide font-medium mb-2">
              STRATEGY • 5 MIN READ
            </p>

            <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition">
              Why Quick Commerce May Struggle with Profitability
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Unit economics remain fragile as dark store expansion increases
              fixed costs while customer acquisition remains expensive.
            </p>

            <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition inline-block">
              Read Insight →
            </span>

          </div>

          {/* INSIGHT 2 */}
          <div className="group bg-white border border-gray-200 rounded-xl p-5 transition hover:shadow-md">

            <p className="text-xs text-teal-600 tracking-wide font-medium mb-2">
              FINTECH • 4 MIN READ
            </p>

            <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition">
              The Shift from Payments to Lending Models
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Fintech companies are increasingly moving toward credit-driven
              revenue models to improve margins and investor appeal.
            </p>

            <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition inline-block">
              Read Insight →
            </span>

          </div>

          {/* INSIGHT 3 */}
          <div className="group bg-white border border-gray-200 rounded-xl p-5 transition hover:shadow-md">

            <p className="text-xs text-teal-600 tracking-wide font-medium mb-2">
              STARTUPS • 6 MIN READ
            </p>

            <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3 group-hover:text-teal-700 transition">
              Capital Efficiency is the New Growth Metric
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Investors are prioritizing sustainable growth over aggressive
              expansion, reshaping how startups allocate capital.
            </p>

            <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition inline-block">
              Read Insight →
            </span>

          </div>

        </div>

      </section>

            {/* FEATURED INSIGHT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-[#1A2B3C] rounded-2xl p-10 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs tracking-[0.2em] text-teal-400 mb-4">
              FEATURED INSIGHT
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
              The New Rule of Startups: Profitability Over Growth
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Venture capital is shifting focus from aggressive expansion to sustainable economics.
              This insight explores how founders must adapt their strategy.
            </p>

            <button className="bg-teal-500 text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-teal-400 transition">
              Read Full Insight →
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden md:block">
            <div className="w-full h-[200px] rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="text-sm text-gray-400">
                Insight Highlight
              </span>
            </div>
          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="bg-[#1A2B3C] py-20 text-center text-white">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
          Stay Ahead of Market Trends
        </h2>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Get access to structured insights, strategic thinking, and financial intelligence
          designed for decision-makers.
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