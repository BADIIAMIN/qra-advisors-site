import { getMDXFiles } from '@/lib/mdx'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const files = getMDXFiles('case-studies')
  return files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ''),
  }))
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let Content
  try {
    Content = (await import(`@/content/case-studies/${slug}.mdx`)).default
  } catch {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="prose prose-lg max-w-none">
        <Content />
      </div>
    </article>
  )
}
