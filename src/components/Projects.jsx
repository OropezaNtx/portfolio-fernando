import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

function Projects() {
  const featuredProjects = projects.slice(0, 3)
  const additionalProjects = projects.slice(3)

  return (
    <section id="projects" className="bg-slate-950 px-6 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Selected work
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Real solutions designed around real processes.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of projects where data, automation and software were combined to improve operational work.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true, amount: 0.18 }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute inset-8 rounded-[3rem] bg-cyan-400/15 blur-3xl" />
                <Link
                  to={`/project/${project.id}`}
                  className="group relative block overflow-hidden rounded-[2.5rem] bg-slate-900"
                >
                  <div className="aspect-[5/4] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </Link>
              </div>

              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {project.category}
                </p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  {project.impact}
                </p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="mt-9 inline-flex items-center gap-3 border-b border-cyan-200/40 pb-1 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100"
                >
                  View case study <span>↗</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <div className="mt-28 border-t border-white/10 pt-14 lg:mt-36">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  More work
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  Additional projects and products
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                Corporate case studies are presented without confidential information.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {additionalProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="group grid gap-4 py-7 transition hover:pl-3 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {project.category}
                    </p>
                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-slate-100 transition group-hover:text-cyan-100">
                      {project.title}
                    </h4>
                  </div>
                  <span className="text-2xl text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-200">
                    →
                  </span>
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
