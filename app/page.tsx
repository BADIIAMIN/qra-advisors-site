export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Quantitative Risk Advisory
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Professional consulting services in quantitative risk analysis,
          helping organizations make data-driven decisions.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/insights"
            className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Insights
          </a>
          <a
            href="/case-studies"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Case Studies
          </a>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Risk Analysis
          </h2>
          <p className="text-gray-600">
            Comprehensive quantitative risk assessment and modeling services.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Data-Driven Decisions
          </h2>
          <p className="text-gray-600">
            Strategic advisory based on rigorous data analysis and research.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Industry Expertise
          </h2>
          <p className="text-gray-600">
            Deep domain knowledge across financial services and enterprise risk.
          </p>
        </div>
      </div>
    </div>
  )
}
