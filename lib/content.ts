import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const researchDirectory = path.join(process.cwd(), 'content/research')
const insightsDirectory = path.join(process.cwd(), 'content/insights')

export function getAllResearch() {
  const files = fs.readdirSync(researchDirectory)

  return files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(researchDirectory, filename)

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug,
      ...(data as any),
    }
  })
}

export function getAllInsights() {
  const files = fs.readdirSync(insightsDirectory)

  return files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(insightsDirectory, filename)

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    return {
      slug,
      ...(data as any),
    }
  })
}