import { useEffect, useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Capabilities", href: "/#skills" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/#about" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-5 ${
          isScrolled
            ? "border-slate-700/70 bg-slate-950/88 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-white/10 bg-slate-950/55 backdrop-blur-md"
        }`}
      >
        <a href="/#home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-sm font-black text-cyan-300 transition group-hover:border-cyan-300/60">
            FO
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-tight text-white">Fernando Oropeza</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">Data & Software Solutions</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/cv.pdf"
            download
            className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Download CV
          </a>
          <a
            href="/#contact"
            className="rounded-xl bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-200 transition hover:border-cyan-400/60 lg:hidden"
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-800 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-800 pt-4">
              <a href="/cv.pdf" download className="rounded-xl border border-slate-700 px-4 py-3 text-center text-sm text-slate-200">
                Download CV
              </a>
              <a href="/#contact" onClick={() => setIsOpen(false)} className="rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-slate-950">
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
