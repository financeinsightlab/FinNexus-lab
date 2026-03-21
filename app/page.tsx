import Link from 'next/link'
import { getAllResearch, getAllInsights } from '@/lib/content'

export default function Home() {
  const research = getAllResearch()
  const insights = getAllInsights()

  return (
    <main className="bg-gray-50">

      <section className="relative min-h-screen flex items-center bg-[#0F1C2B] text-white overflow-hidden">

  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:22px_22px]" />

  <div className="relative max-w-6xl mx-auto px-6 py-32">

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
      <Link href="/research" className="bg-white text-black px-6 py-3 rounded-md">
        Explore Research →
      </Link>

      <Link href="/insights" className="border border-white/30 px-6 py-3 rounded-md">
        Read Insights
      </Link>
    </div>

  </div>
</section>

<section className="py-20 max-w-6xl mx-auto px-6">

  <h2 className="text-2xl font-semibold mb-8">
    Featured Research
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {research.slice(0, 2).map((item: any) => (
      <div key={item.slug} className="bg-white p-6 border rounded-xl">

        <p className="text-xs text-teal-600 mb-2">
          {item.category}
        </p>

        <h3 className="font-semibold text-lg mb-2">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {item.excerpt}
        </p>

        <Link
          href={`/research/${item.slug}`}
          className="text-teal-600 text-sm"
        >
          Read Report →
        </Link>

      </div>
    ))}

  </div>

</section>

<section className="max-w-6xl mx-auto px-6 pb-20">

  <h2 className="text-2xl font-semibold mb-8">
    Latest Insights
  </h2>

  <div className="space-y-6">

    {insights.slice(0, 3).map((item: any) => (
      <div key={item.slug} className="border-b pb-4">

        <h3 className="font-semibold">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500">
          {item.category} • {new Date(item.date).toLocaleDateString()}
        </p>

        <Link
          href={`/insights/${item.slug}`}
          className="text-teal-600 text-sm"
        >
          Read Insight →
        </Link>

      </div>
    ))}

  </div>

</section>

</main>
  )
}