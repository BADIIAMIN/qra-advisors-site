import { getMDXMetadata } from '@/lib/mdx'
import Link from 'next/link'

export const metadata = {
  title: 'Insights - QRA Advisors',
  description:
    'Expert insights on quantitative risk analysis, data science, and financial modeling.',
}

export default function InsightsPage() {
  const insights = getMDXMetadata('insights')

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        Insights
      </h1>
      <p className="mb-12 text-lg text-gray-600">
        Expert perspectives on quantitative risk analysis, data science, and
        financial modeling.
      </p>

      {insights.length === 0 ? (
        <div className="rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-500">
            No insights available yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <Link href={`/insights/${insight.slug}`}>
                <h2 className="mb-2 text-2xl font-semibold text-gray-900 hover:text-blue-600">
                  {insight.title}
                </h2>
              </Link>
              {insight.date && (
                <time className="mb-2 block text-sm text-gray-500">
                  {new Date(insight.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              <p className="text-gray-600">{insight.description}</p>
              <Link
                href={`/insights/${insight.slug}`}
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
