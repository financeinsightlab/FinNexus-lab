export default function ServicesPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <div className="max-w-3xl">

          <p className="text-xs uppercase tracking-widest text-teal-600 mb-4">
            Engagements
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Institutional-Grade Financial <br />
            Advisory & Intelligence
          </h1>

          <p className="text-gray-600 leading-relaxed text-lg">
            I partner with founders, investors, and analysts to deliver structured 
            financial research, data-driven insights, and decision-grade models.
          </p>

        </div>

      </section>

            {/* CORE SERVICES */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <div className="grid md:grid-cols-2 gap-10">

          {/* SERVICE 1 */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-xl hover:-translate-y-1">

            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-teal-600 rounded-sm" />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Market Research
            </h3>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Institutional-grade sector research, TAM/SAM sizing, and competitive benchmarking 
              designed for founders, investors, and strategic teams.
            </p>

            <div className="border-t mb-5" />

            <div className="flex flex-wrap gap-2 text-xs mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-md">Industry Reports</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">TAM/SAM</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">Benchmarking</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">₹25k – ₹75k</p>
                <p className="text-xs text-gray-500">2–4 Weeks</p>
              </div>

              <a
                href="/contact"
                className="text-sm font-medium text-[#1A2B3C] group-hover:translate-x-1 transition"
              >
                Inquire →
              </a>
            </div>

          </div>

          {/* SERVICE 2 */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-xl hover:-translate-y-1">

            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-teal-600 rounded-sm" />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Financial Modeling
            </h3>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Integrated 3-statement models, DCF valuation frameworks, and scenario-based 
              analysis built for fundraising and strategic clarity.
            </p>

            <div className="border-t mb-5" />

            <div className="flex flex-wrap gap-2 text-xs mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-md">DCF Models</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">3-Statement</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">Scenario Analysis</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">₹15k – ₹50k</p>
                <p className="text-xs text-gray-500">1–2 Weeks</p>
              </div>

              <a
                href="/contact"
                className="text-sm font-medium text-[#1A2B3C] group-hover:translate-x-1 transition"
              >
                Inquire →
              </a>
            </div>

          </div>

          {/* SERVICE 3 */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-xl hover:-translate-y-1">

            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-teal-600 rounded-sm" />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Competitive Intelligence
            </h3>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Deep-dive analysis of competitor strategies, pricing structures, and positioning 
              to inform high-impact strategic decisions.
            </p>

            <div className="border-t mb-5" />

            <div className="flex flex-wrap gap-2 text-xs mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-md">Benchmarking</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">Gap Analysis</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">Strategic Insights</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">₹20k – ₹40k</p>
                <p className="text-xs text-gray-500">1–2 Weeks</p>
              </div>

              <a
                href="/contact"
                className="text-sm font-medium text-[#1A2B3C] group-hover:translate-x-1 transition"
              >
                Inquire →
              </a>
            </div>

          </div>

          {/* SERVICE 4 */}
          <div className="group bg-white rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-xl hover:-translate-y-1">

            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-teal-600 rounded-sm" />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Analytics Dashboards
            </h3>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Custom dashboards using Power BI or Tableau to track KPIs, performance metrics, 
              and business intelligence in real-time.
            </p>

            <div className="border-t mb-5" />

            <div className="flex flex-wrap gap-2 text-xs mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-md">Power BI</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">Tableau</span>
              <span className="bg-gray-100 px-3 py-1 rounded-md">KPI Tracking</span>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">₹30k – ₹80k</p>
                <p className="text-xs text-gray-500">3–5 Weeks</p>
              </div>

              <a
                href="/contact"
                className="text-sm font-medium text-[#1A2B3C] group-hover:translate-x-1 transition"
              >
                Inquire →
              </a>
            </div>

          </div>

        </div>

      </section>

      
      {/* METHODOLOGY SECTION — GEMINI STYLE */}
<section className="mt-24 px-6">

  <div className="max-w-6xl mx-auto bg-[#1A2B3C] text-white rounded-[32px] px-12 py-20">

    {/* HEADER */}
    <p className="text-xs tracking-[2px] text-teal-400 mb-6">
      METHODOLOGY
    </p>

    <p className="text-gray-400 text-sm mb-16 max-w-2xl">
      Transparent, rigorous, and result-oriented delivery cycle.
    </p>

    {/* TIMELINE */}
    <div className="relative">

      {/* LINE */}
      <div className="absolute top-[32px] left-0 right-0 h-[1px] bg-white/10"></div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* STEP 1 */}
        <div>
          <p className="text-teal-400 text-2xl font-semibold mb-4">01</p>
          <h4 className="font-semibold mb-2">Scoping</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Defining objectives, KPIs, and deliverables.
          </p>
        </div>

        {/* STEP 2 */}
        <div>
          <p className="text-teal-400 text-2xl font-semibold mb-4">02</p>
          <h4 className="font-semibold mb-2">Proposal</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Finalizing timeline, fees, and resource allocation.
          </p>
        </div>

        {/* STEP 3 */}
        <div>
          <p className="text-teal-400 text-2xl font-semibold mb-4">03</p>
          <h4 className="font-semibold mb-2">Research</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Data collection, primary/secondary analysis.
          </p>
        </div>

        {/* STEP 4 */}
        <div>
          <p className="text-teal-400 text-2xl font-semibold mb-4">04</p>
          <h4 className="font-semibold mb-2">Review</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Draft walkthrough and client feedback loop.
          </p>
        </div>

        {/* STEP 5 */}
        <div>
          <p className="text-teal-400 text-2xl font-semibold mb-4">05</p>
          <h4 className="font-semibold mb-2">Delivery</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Final hand-off of all assets and strategy notes.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
      {/* SECTION DIVIDER */}
      <div className="border-t max-w-6xl mx-auto my-20" />

      {/* CTA SECTION */}
      <section className="bg-[#1A2B3C] text-white py-20 text-center">

        <h2 className="text-2xl font-semibold mb-4">
          Let’s Build Something Valuable
        </h2>

        <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
          Available for research mandates, financial modeling, and strategic consulting engagements.
        </p>

        <a
          href="/contact"
          className="inline-block bg-teal-500 text-black px-6 py-3 text-sm font-medium rounded-md hover:bg-teal-400 transition"
        >
          Work With Me →
        </a>

      </section>
     

      </main>
  )
}