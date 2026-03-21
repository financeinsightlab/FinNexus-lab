import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function ResearchPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    'content/research',
    `${params.slug}.mdx`
  )

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">

        <p className="text-sm uppercase tracking-widest text-teal-600 mb-4">
          {data.category}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {data.title}
        </h1>

        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
          <span>{new Date(data.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{data.author || 'FinNexus Lab'}</span>
        </div>

      </section>

      <div className="border-t border-gray-200"></div>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-16">

        <article className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:leading-relaxed prose-a:text-teal-600">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

      </section>

    </main>
  )
}