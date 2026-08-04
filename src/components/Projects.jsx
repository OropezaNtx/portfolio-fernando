import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

function Projects() {
  const featured = projects.slice(0, 2)
  const remaining = projects.slice(2)

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-28 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="section-shell">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Solutions built around real operations.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-400 lg:justify-self-end">
            Each case combines process understanding, data structure and practical software development. Corporate projects are presented without confidential information.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index * 0.08 }} viewport={{ once: true }} className="card-glow glass-panel group overflow-hidden rounded-[2rem]">
              <div className="relative min-h-64 overflow-hidden border-b border-white/10 bg-slate-900">
                <div className="grid-fade absolute inset-0 opacity-80" />
                <img src={project.image} alt={project.title} className="h-64 w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" onError={(event) => { event.currentTarget.style.display = "none" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cyan-300 backdrop-blur">Featured case 0{index + 1}</span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-cyan-400">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tech.slice(0, 5).map((tech) => <span key={tech} className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-400">{tech}</span>)}</div>
                <Link to={`/project/${project.id}`} className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-300 transition group-hover:gap-3">Explore case study <span className="ml-2">→</span></Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {remaining.map((project, index) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: (index % 3) * 0.06 }} viewport={{ once: true }} className="card-glow group flex min-h-[320px] flex-col rounded-3xl border border-white/[0.08] bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-slate-900/80">
              <div className="flex items-start justify-between gap-4"><span className="text-xs font-semibold text-cyan-400">{String(index + 3).padStart(2, "0")}</span><span className="rounded-full border border-slate-800 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-500">Case study</span></div>
              <p className="mt-8 text-xs uppercase tracking-[0.14em] text-slate-500">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">{project.impact}</p>
              <div className="mt-auto pt-7"><Link to={`/project/${project.id}`} className="text-sm font-medium text-cyan-300">View project →</Link></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
