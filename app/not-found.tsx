import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-6 py-12">
      <main className="max-w-4xl w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50 dark:bg-indigo-900 mx-auto mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 15h2v2h-2z" fill="#6366F1" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v2h2v-2zm0-10h-2v8h2V6z" fill="#4338CA" />
          </svg>
        </div>

        <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4">404 — Page not found</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          We can’t find the page you’re looking for. It may have been moved, deleted, or the URL is incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">
            Go to homepage
          </Link>

          <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-slate-200 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
            Contact support
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          If you typed the address, check it for mistakes. Otherwise, return to the homepage or contact us for help.
        </p>
      </main>
    </div>
  )
}