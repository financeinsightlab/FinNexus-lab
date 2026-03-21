import Link from 'next/link'
import { getAllResearch, getAllInsights } from '@/lib/content'

export default function HomePage() {
  const research = getAllResearch()
  const insights = getAllInsights()

  return (
    <main className="bg-gray-50">

            {/* HERO SECTION — GEMINI STYLE */}
      <section className="relative min-h-screen flex items-center bg-[#0F1C2B] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-32">

          <div className="inline-block mb-6 px-4 py-1 text-xs tracking-widest text-teal-400 border border-teal-400/30 rounded-full bg-teal-400/5">
            Financial Intelligence Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] mb-6 tracking-tight">
            Smarter Decisions <br />
            <span className="bg-gradient-to-r from-teal-400 to-emerald-300 text-transparent bg-clip-text">
              Start Here.
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Institutional-quality research, data-driven insights, and financial tools
            for investors, analysts, and founders.
          </p>

          <div className="flex gap-4 flex-wrap mb-16">
            <Link href="/research" className="bg-white text-black px-6 py-3 text-sm rounded-md hover:bg-gray-200 transition shadow-sm">
              Explore Research →
            </Link>

            <Link href="/insights" className="border border-white/30 px-6 py-3 text-sm rounded-md hover:bg-white hover:text-black transition">
              Read Insights
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl">
            {[
              { label: "Reports", value: "10+" },
              { label: "Market Cap", value: "₹1T+" },
              { label: "Sectors", value: "5+" },
              { label: "Cost", value: "FREE" },
            ].map((stat) => (
              <div key={stat.label} className="relative group bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-6 rounded-2xl transition hover:bg-white/10">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-teal-500/10 to-transparent" />
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* PLATFORM CAPABILITIES */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-xs tracking-widest text-teal-600 uppercase mb-3">Platform</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-gray-600 max-w-xl">
              Structured intelligence across research, analytics, and financial tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Research Intelligence", desc: "In-depth sector research and market analysis." },
              { title: "Data Lab", desc: "Analytics dashboards and financial datasets." },
              { title: "Strategic Insights", desc: "Short-form analytical articles and perspectives." },
              { title: "Financial Tools", desc: "Models, templates, and financial frameworks." },
            ].map((item) => (
              <div key={item.title} className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-teal-500/5 to-transparent" />
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-5">
                  <div className="w-4 h-4 bg-teal-500 rounded-sm" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <div className="text-sm text-gray-400 group-hover:text-teal-600 transition">
                  Learn more →
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

            {/* FEATURED RESEARCH */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-widest text-teal-600 uppercase mb-2">
                Intelligence
              </p>
              <h2 className="text-3xl font-semibold text-gray-900">
                Featured Research
              </h2>
            </div>

            <Link href="/research" className="text-sm text-teal-600 hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {research.slice(0, 2).map((item: any) => (
              <div key={item.slug} className="group bg-[#F1F5F9] border rounded-3xl p-8">
                <p className="text-xs uppercase text-teal-600 mb-3">{item.category}</p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{item.excerpt}</p>

                <Link href={`/research/${item.slug}`} className="text-teal-600">
                  Read →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* INSIGHTS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Strategic Thinking
            </h2>
          </div>

          <div className="space-y-6">
            {insights.slice(0, 3).map((item: any) => (
              <div key={item.slug} className="bg-white p-6 border rounded-xl">

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <Link href={`/insights/${item.slug}`} className="text-teal-600 text-sm">
                  Read →
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-28 bg-[#0F1C2B] text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Need Custom Research or Financial Models?
        </h2>

        <Link href="/contact" className="bg-teal-500 text-black px-6 py-3 rounded-md">
          Get in Touch →
        </Link>
      </section>


      {/* NEWSLETTER */}
      <section className="py-24 bg-white border-t">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-4">
            Get Research & Insights
          </h2>

          <form className="flex gap-4 justify-center">
            <input className="border px-4 py-2 rounded-md" />
            <button className="bg-teal-500 px-6 py-2 text-white rounded-md">
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  )
}