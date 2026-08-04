import { useEffect, useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Capabilities", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  const navigateToSection = (event, href) => {
    if (window.location.pathname !== "/") return

    const section = document.querySelector(href)
    if (!section) return

    event.preventDefault()
    setIsOpen(false)
    section.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/82 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1380px] items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          onClick={(event) => navigateToSection(event, "#home")}
          className="group flex items-center gap-2 text-white"
        >
          <span className="text-lg font-semibold tracking-[-0.03em]">Fernando Oropeza</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 transition group-hover:scale-150" />
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(event) => navigateToSection(event, item.href)}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="/cv.pdf"
            download
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            onClick={(event) => navigateToSection(event, "#contact")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.03] hover:bg-cyan-100"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white xl:hidden"
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/96 px-6 py-6 backdrop-blur-xl xl:hidden">
          <div className="flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => navigateToSection(event, item.href)}
                className="border-b border-white/10 py-4 text-lg text-slate-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="mt-5 rounded-full bg-white px-5 py-3 text-center font-semibold text-slate-950"
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
