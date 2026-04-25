function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/70">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-bold text-lg tracking-tight">
          Fernando<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block border border-cyan-400/70 text-cyan-400 px-4 py-2 rounded-xl text-sm hover:bg-cyan-400 hover:text-slate-950 transition"
        >
          Contact me
        </a>
      </nav>
    </header>
  )
}

export default Navbar