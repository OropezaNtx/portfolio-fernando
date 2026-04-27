import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | Fernando Oropeza</title>
      </Helmet>

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="text-cyan-400 mb-4">404</p>

          <h1 className="text-5xl font-bold mb-6">
            This page doesn&apos;t exist
          </h1>

          <p className="text-slate-400 mb-8">
            The route you opened is not available, but you can go back to the portfolio.
          </p>

          <Link
            to="/"
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            Back to portfolio
          </Link>
        </div>
      </main>
    </>
  )
}

export default NotFound