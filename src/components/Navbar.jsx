import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Stack", href: "/#tech-stack" },
    { label: "Process", href: "/#process" },
    { label: "Experience", href: "/#experience" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/70">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/#home" className="text-white font-bold text-lg tracking-tight">
          Fernando<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          {links.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-cyan-400 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="/cv.pdf" download className="text-sm text-slate-300 hover:text-cyan-400 transition">
            CV
          </a>

          <a
            href="/#contact"
            className="border border-cyan-400/70 text-cyan-400 px-4 py-2 rounded-xl text-sm hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            Contact me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white border border-slate-700 rounded-xl px-3 py-2"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-6 py-5">
          <div className="flex flex-col gap-4 text-slate-300">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/cv.pdf"
              download
              className="text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar