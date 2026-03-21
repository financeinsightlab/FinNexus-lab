import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function InsightPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    'content/insights',
    `${params.slug}.mdx`
  )

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return (
    <main className="bg-white">

      {/* Container */}
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* Header */}
        <header className="mb-10">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3 text-gray-900">
            {data.title}
          </h1>

          {/* Metadata */}
          <div className="text-sm text-gray-500 flex flex-wrap gap-3">
            <span>{data.category}</span>
            <span>•</span>
            <span>{new Date(data.date).toDateString()}</span>
          </div>

        </header>

        {/* Divider */}
        <div className="border-b border-gray-200 mb-10"></div>

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-gray prose-headings:font-semibold prose-a:text-teal-600">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

      </div>

    </main>
  )
}