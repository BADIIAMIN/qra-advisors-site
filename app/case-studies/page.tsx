import { getMDXMetadata } from '@/lib/mdx'
import Link from 'next/link'

export const metadata = {
  title: 'Case Studies - QRA Advisors',
  description:
    'Real-world examples of our quantitative risk advisory work and impact.',
}

export default function CaseStudiesPage() {
  const caseStudies = getMDXMetadata('case-studies')

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        Case Studies
      </h1>
      <p className="mb-12 text-lg text-gray-600">
        Real-world examples of our work in quantitative risk analysis and
        strategic advisory.
      </p>

      {caseStudies.length === 0 ? (
        <div className="rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-500">
            No case studies available yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.slug}
              className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Link href={`/case-studies/${caseStudy.slug}`}>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 hover:text-blue-600">
                  {caseStudy.title}
                </h2>
              </Link>
              {caseStudy.date && (
                <time className="mb-2 block text-sm text-gray-500">
                  {new Date(caseStudy.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              <p className="text-gray-600">{caseStudy.description}</p>
              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="mt-4 inline-block font-medium text-blue-600 hover:text-blue-800"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
