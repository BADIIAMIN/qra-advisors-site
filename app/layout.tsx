import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QRA Advisors - Quantitative Risk Advisory',
  description:
    'Professional consulting services in quantitative risk analysis and advisory.',
  openGraph: {
    title: 'QRA Advisors - Quantitative Risk Advisory',
    description:
      'Professional consulting services in quantitative risk analysis and advisory.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-gray-200 bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <a href="/" className="text-xl font-bold text-gray-900">
                    QRA Advisors
                  </a>
                </div>
                <div className="flex space-x-8">
                  <a
                    href="/insights"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Insights
                  </a>
                  <a
                    href="/case-studies"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Case Studies
                  </a>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} QRA Advisors. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
