function Footer() {
  const links = [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:foropeza0526@gmail.com" },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold">
            Fernando<span className="text-cyan-400">.</span>
          </p>
          <p className="mt-1">
            Data · Automation · Software Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="hover:text-cyan-400 transition"
            >
              {item.label}
            </a>
          ))}

          <a href="/cv.pdf" download className="text-cyan-400 hover:text-cyan-300 transition">
            CV
          </a>
        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer