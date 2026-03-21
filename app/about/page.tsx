export default function AboutPage() {
  return (
    <main className="bg-gray-50 antialiased">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-xs uppercase tracking-widest text-teal-600 mb-4">
            The Founder
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Finance Rigour Meets <br /> Data Intelligence.
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4 max-w-lg">
            I am building FinNexus Lab to bridge the gap between raw financial 
            data and structured decision-grade intelligence.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            Institutional-quality research shouldn’t be restricted to those 
            with access to Bloomberg Terminals — it should be structured, 
            accessible, and actionable.
          </p>
        </div>

        {/* HERO CARD */}
        <div className="bg-[#1A2B3C] rounded-[32px] h-[420px] flex flex-col justify-between p-8 text-white">

          <div className="opacity-10 text-7xl font-bold">
            FN
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              FinNexus Lab
            </h2>

            <p className="text-teal-400 text-sm mt-1">
              Founder & Lead Analyst
            </p>
          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            My approach combines the structured thinking of a management 
            consultant with the analytical depth of a financial researcher.
          </p>

          <p>
            Whether it's dissecting unit economics, building financial models, 
            or analyzing sector trends — the goal remains the same:
          </p>

          <p className="font-medium text-gray-900">
            Clarity that drives better decisions.
          </p>

          <p>
            At FinNexus Lab, we don’t just present data — we translate it 
            into strategic intelligence.
          </p>

        </div>

      </section>

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-xl font-semibold tracking-tight mb-10">
          Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Structured Thinking",
              desc: "Breaking down complex financial problems into clear frameworks.",
            },
            {
              title: "Data-Driven Analysis",
              desc: "Using quantitative insights to support strategic decisions.",
            },
            {
              title: "Actionable Outputs",
              desc: "Delivering insights that directly impact decision-making.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { value: "500+", label: "Subscribers" },
            { value: "25+", label: "Projects Delivered" },
            { value: "10+", label: "Research Reports" },
            { value: "5+", label: "Industries Covered" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>

              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* PLATFORM */}
      <section className="bg-white border-t border-gray-200 py-28">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-xs uppercase tracking-widest text-teal-600 mb-4">
              The Platform
            </p>

            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Built for Investors, Analysts, and Founders.
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              FinNexus Lab is not a blog. It is a structured financial 
              intelligence platform designed to deliver high-quality research, 
              analytics, and strategic insights.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Inspired by Bloomberg Intelligence and McKinsey Insights, 
              the goal is to provide clarity in complex financial environments.
            </p>
          </div>

          <div className="space-y-6">

            {[
              {
                title: "Research Intelligence",
                desc: "Deep-dive sector research and long-form reports.",
              },
              {
                title: "Data Lab",
                desc: "Analytics dashboards and financial datasets.",
              },
              {
                title: "Strategic Insights",
                desc: "Short-form analysis on markets and trends.",
              },
              {
                title: "Financial Tools",
                desc: "Models, frameworks, and valuation tools.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 p-6 rounded-xl hover:shadow-sm transition"
              >
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOUNDER PROFILE */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div className="relative w-full h-[460px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
          <img
            src="/images/profile.jpeg"
            alt="Founder"
            className="w-full h-full object-contain object-top"
          />
        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-teal-600 mb-4">
            Founder Profile
          </p>

          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Building Financial Intelligence for the Next Generation
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            My work sits at the intersection of finance, data, and strategy.
            I focus on simplifying complex financial systems into structured,
            decision-ready insights.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From valuation models to sector research, every output is designed
            to match institutional standards while remaining accessible.
          </p>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 pb-28">

        <h2 className="text-xl font-semibold tracking-tight mb-10">
          Career Timeline
        </h2>

        <div className="border-l border-gray-300 pl-6 space-y-10">

          <div>
            <p className="text-xs text-gray-400 mb-1">2024 — Present</p>
            <h3 className="font-semibold">Founder, FinNexus Lab</h3>
            <p className="text-sm text-gray-600">
              Building a financial intelligence platform.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">2023 — 2024</p>
            <h3 className="font-semibold">Finance & Analytics Intern</h3>
            <p className="text-sm text-gray-600">
              Worked on financial modeling and dashboards.
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-1">2021 — 2024</p>
            <h3 className="font-semibold">BBA (Finance)</h3>
            <p className="text-sm text-gray-600">
              Built foundation in finance and strategy.
            </p>
          </div>

        </div>

      </section>

      {/* SIGNATURE */}
      <section className="max-w-3xl mx-auto px-6 pb-32 text-center">

        <p className="text-gray-600 italic mb-4">
          “The goal is not just to analyze data, but to create clarity that drives better financial decisions.”
        </p>

        <p className="font-semibold text-gray-900">
          — Sumit Singh
        </p>

      </section>

      {/* CTA */}
      <section className="bg-[#1A2B3C] text-white py-24 text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Let’s Build Something Valuable
          </h2>

          <p className="text-gray-400 text-sm mb-8">
            Available for research mandates, financial modeling, and consulting.
          </p>

          <a
            href="/contact"
            className="inline-block bg-teal-500 text-black px-6 py-3 text-sm font-medium rounded-md hover:bg-teal-400 transition"
          >
            Work With Me →
          </a>

        </div>

      </section>

    </main>
  )
}