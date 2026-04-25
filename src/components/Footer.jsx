function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {new Date().getFullYear()} Fernando Oropeza. All rights reserved.
        </p>

        <a
          href="/cv.pdf"
          download
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          Download CV
        </a>
      </div>
    </footer>
  )
}

export default Footer