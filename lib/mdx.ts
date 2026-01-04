import fs from 'fs'
import path from 'path'

export interface MDXMetadata {
  title: string
  description: string
  date: string
  slug: string
}

export function getMDXFiles(dir: string): string[] {
  const contentDir = path.join(process.cwd(), 'content', dir)
  if (!fs.existsSync(contentDir)) {
    return []
  }
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
}

export function getMDXMetadata(dir: string): MDXMetadata[] {
  const files = getMDXFiles(dir)
  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '')
    const filePath = path.join(process.cwd(), 'content', dir, file)
    const content = fs.readFileSync(filePath, 'utf-8')

    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    const frontmatter: Record<string, string> = {}

    if (frontmatterMatch) {
      const frontmatterString = frontmatterMatch[1]
      frontmatterString.split('\n').forEach((line) => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length > 0) {
          frontmatter[key.trim()] = valueParts.join(':').trim()
        }
      })
    }

    return {
      title: frontmatter.title || slug,
      description: frontmatter.description || '',
      date: frontmatter.date || '',
      slug,
    }
  })
}
