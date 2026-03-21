'use client'

import { useState } from 'react'
import Link from 'next/link'

type ResearchItem = {
  slug: string
  title: string
  category: string
  excerpt: string
}

export default function ResearchClient({ data }: { data: ResearchItem[] }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  // ✅ FIXED: Proper typed categories
  const categories: string[] = [
    'All',
    ...Array.from(new Set(data.map((item) => item.category)))
  ]

  // ✅ FILTER LOGIC
  const filtered = data.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HEADER */}
      <section className="bg-[#1A2B3C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Research Reports
          </h1>
          <p className="text-gray-300">
            In-depth sector research and market analysis.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* FILTER PILLS */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={String(cat)} // ✅ FIXED
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? 'bg-teal-500 text-white border-teal-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search research..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 mb-10 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* RESULTS COUNT */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filtered.length} results
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.slug}
              className="bg-white p-6 border border-gray-200 rounded-xl hover:shadow-lg transition"
            >
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
                className="text-teal-600 text-sm font-medium hover:underline"
              >
                Read Report →
              </Link>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No research found.
          </div>
        )}

      </section>

    </main>
  )
}