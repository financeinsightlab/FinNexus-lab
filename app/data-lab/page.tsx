export default function DataLabPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-xs tracking-[0.2em] text-teal-600 font-medium mb-4">
          DATA LAB
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl leading-tight">
          Financial Data, Analytics & Intelligence
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl text-base leading-relaxed">
          Explore structured datasets, analytics dashboards, and financial models 
          designed to support data-driven decision making.
        </p>

      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6 mb-12">

        <div className="flex flex-wrap gap-3">

          {['All', 'Dashboards', 'Datasets', 'Financial Models'].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm rounded-md border transition
              ${i === 0
                ? 'bg-[#1A2B3C] text-white border-[#1A2B3C]'
                : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

      </section>

      {/* FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="bg-[#1A2B3C] rounded-2xl p-10 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-xs tracking-[0.2em] text-teal-400 mb-4">
              FEATURED DATA PROJECT
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Startup Valuation Dashboard
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Interactive dashboard analyzing valuation multiples, revenue growth,
              and funding stages across Indian startups.
            </p>

            <button className="bg-teal-500 text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-teal-400 transition">
              Explore Dashboard →
            </button>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-[220px] bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
              <span className="text-gray-400 text-sm">
                Dashboard Preview
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* DATA PROJECT GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 mb-2 font-medium">
              DASHBOARD
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Fintech KPI Tracker
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Track growth metrics, CAC, LTV, and revenue performance across fintech startups.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                Power BI
              </span>

              <span className="text-sm font-medium group-hover:translate-x-1 transition">
                Open →
              </span>

            </div>

          </div>

          {/* CARD */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 mb-2 font-medium">
              DATASET
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Startup Funding Dataset
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Structured dataset covering funding rounds, investors, and valuations.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                CSV / Excel
              </span>

              <span className="text-sm font-medium group-hover:translate-x-1 transition">
                Download →
              </span>

            </div>

          </div>

          {/* CARD */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1">

            <p className="text-xs text-teal-600 mb-2 font-medium">
              MODEL
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              DCF Valuation Model
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Discounted cash flow model with scenario analysis and projections.
            </p>

            <div className="flex justify-between items-center border-t pt-4">

              <span className="text-xs text-gray-500">
                Excel Model
              </span>

              <span className="text-sm font-medium group-hover:translate-x-1 transition">
                Use Model →
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#1A2B3C] py-20 text-center text-white">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Build Custom Data Intelligence
        </h2>

        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
          Need custom dashboards, datasets, or financial tools? Let’s build
          tailored analytics solutions for your business.
        </p>

        <a
          href="/contact"
          className="inline-block bg-teal-500 text-black px-8 py-3 text-sm font-medium rounded-md hover:bg-teal-400 transition"
        >
          Request Custom Solution →
        </a>

      </section>

    </main>
  )
}