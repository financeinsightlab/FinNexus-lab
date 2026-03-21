'use client'

import { useState } from 'react'

type ResearchItem = {
  slug: string
  title: string
  date: string
  category: string
}

export default function ResearchFilter({ data }: { data: ResearchItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    ...Array.from(new Set(data.map((item) => item.category)))
  ]

  const filtered =
    selectedCategory === 'All'
      ? data
      : data.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* Filters */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-sm border transition ${
              selectedCategory === cat
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.slug}
            className="border p-6 bg-white hover:shadow-lg transition"
          >
            <h3 className="font-semibold mb-2 text-lg">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500 mb-4">
              {item.category} • {new Date(item.date).getFullYear()}
            </p>

            <a
              href={`/research/${item.slug}`}
              className="text-sm text-teal-600 hover:underline"
            >
              Read Report →
            </a>
          </div>
        ))}
      </div>
    </>
  )
}