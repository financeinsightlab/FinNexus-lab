import Link from 'next/link'
import { getAllResearch, getAllInsights } from '@/lib/content'

export default function Home() {
  const research = getAllResearch()
  const insights = getAllInsights()

  return (
    <main className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-[#0F1C2B] text-white">
        <div className="max-w-6xl mx-auto px-6 py-32">

          <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
            Financial Intelligence Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Smarter Decisions <br />
            <span className="text-teal-400">Start Here.</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-8">
            Institutional-quality research, data-driven insights, and financial tools
            for investors, analysts, and founders.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/research" className="border border-white px-6 py-3 text-sm">
              View Research
            </Link>

            <Link href="/insights" className="bg-teal-500 px-6 py-3 text-sm text-black">
              Read Insights
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}