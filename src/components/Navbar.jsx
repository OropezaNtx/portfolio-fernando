function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-bold text-lg">
          Fernando<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-slate-950 transition"
        >
          Contact me
        </a>
      </nav>
    </header>
  )
}

export default Navbar