import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

function Projects() {
  const featuredProjects = projects.slice(0, 3)
  const additionalProjects = projects.slice(3)

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28 text-white lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950/60" />
      <div className="absolute left-[-15%] top-[18%] h-[520px] w-[520px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-20 max-w-4xl lg:mb-28">
          <p className="eyebrow mb-5">Selected work</p>
          <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Real solutions designed around real processes.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">A selection of projects where data, automation and software were combined to improve operational work.</p>
        </div>

        <div className="space-y-28 lg:space-y-40">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="absolute inset-10 rounded-[4rem] bg-cyan-400/12 blur-3xl" />
                <Link to={`/project/${project.id}`} className="group relative block overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] p-3 shadow-[0_35px_110px_rgba(0,0,0,0.35)] backdrop-blur-lg">
                  <div className="aspect-[5/4] overflow-hidden rounded-[2.35rem] bg-gradient-to-br from-slate-800 to-slate-950">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" onError={(event) => { event.currentTarget.style.display = "none" }} />
                  </div>
                </Link>
              </div>

              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{project.category}</p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">{project.title}</h3>
                <p className="mt-7 text-lg leading-8 text-slate-300">{project.impact}</p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                  {project.tech.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <Link to={`/project/${project.id}`} className="mt-10 inline-flex items-center gap-3 border-b border-cyan-200/40 pb-1 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100">View case study <span>↗</span></Link>
              </div>
            </motion.article>
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <div className="mt-32 border-t border-white/10 pt-16 lg:mt-44">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow mb-4">More work</p>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Additional projects and products</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">Corporate case studies are presented without confidential information.</p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {additionalProjects.map((project) => (
                <Link key={project.id} to={`/project/${project.id}`} className="group grid gap-4 py-8 transition hover:pl-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{project.category}</p>
                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-slate-100 transition group-hover:text-cyan-100">{project.title}</h4>
                  </div>
                  <span className="text-2xl text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-200">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
