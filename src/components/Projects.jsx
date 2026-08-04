import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

const ownedProductIds = ["afora", "politycs", "mobilytics"]

const brandConfig = {
  afora: {
    logo: "/images/brands/afora.png",
    mark: "A",
    eyebrow: "Android + Web product",
    accent: "from-orange-400/25 via-rose-400/10 to-transparent",
    border: "hover:border-orange-300/35",
    text: "text-orange-200",
  },
  politycs: {
    logo: "/images/brands/politycs.png",
    mark: "P",
    eyebrow: "Web data platform",
    accent: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
    border: "hover:border-violet-300/35",
    text: "text-violet-200",
  },
  mobilytics: {
    logo: "/images/brands/mobilytics.png",
    mark: "M",
    eyebrow: "Solutions business",
    accent: "from-cyan-400/25 via-blue-400/10 to-transparent",
    border: "hover:border-cyan-300/35",
    text: "text-cyan-200",
  },
}

function BrandLogo({ project }) {
  const brand = brandConfig[project.id]

  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/75 shadow-[0_15px_45px_rgba(0,0,0,0.24)]">
      <span className={`absolute text-xl font-black ${brand.text}`}>{brand.mark}</span>
      <img
        src={brand.logo}
        alt={`${project.title} logo`}
        className="relative z-10 h-11 w-11 object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none"
        }}
      />
    </div>
  )
}

function Projects() {
  const featuredProjects = projects.slice(0, 3)
  const ownedProducts = ownedProductIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)
  const additionalProjects = projects.filter(
    (project, index) => index >= 3 && !ownedProductIds.includes(project.id),
  )

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28 text-white lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950/60" />
      <div className="absolute left-[-15%] top-[18%] h-[520px] w-[520px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-20 max-w-4xl lg:mb-28">
          <p className="eyebrow mb-5">Featured solutions</p>
          <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Systems designed around real operations.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Each case study explains the users, operational problem, architecture, transformation and result—not only the technologies used to build it.
          </p>
        </div>

        <div className="space-y-28 lg:space-y-40">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute inset-10 rounded-[4rem] bg-cyan-400/12 blur-3xl" />
                <Link
                  to={`/project/${project.id}`}
                  className="group relative block overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] p-3 shadow-[0_35px_110px_rgba(0,0,0,0.35)] backdrop-blur-lg"
                >
                  <div className="aspect-[5/4] overflow-hidden rounded-[2.35rem] bg-gradient-to-br from-slate-800 to-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                </Link>
              </div>

              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {project.platform}
                </p>
                <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm uppercase tracking-[0.15em] text-slate-500">
                  For {project.audience}
                </p>
                <p className="mt-7 text-lg leading-8 text-slate-300">{project.impact}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">{tech}</span>
                  ))}
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="mt-10 inline-flex items-center gap-3 border-b border-cyan-200/40 pb-1 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100"
                >
                  Explore solution <span>↗</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-32 border-t border-white/10 pt-16 lg:mt-44 lg:pt-20">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Own products & solutions business</p>
              <h3 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Product ideas built with ownership and a clear operational purpose.
              </h3>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-400 lg:justify-self-end">
              AFORA, POLITYCS and MOBILYTICS represent the entrepreneurial side of my profile: product definition, platform architecture, implementation planning and commercial delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ownedProducts.map((project, index) => {
              const brand = brandConfig[project.id]
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 backdrop-blur-xl transition duration-300 ${brand.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-5">
                      <BrandLogo project={project} />
                      <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${brand.text}`}>
                        {brand.eyebrow}
                      </span>
                    </div>

                    <h4 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">{project.title}</h4>
                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-slate-600">{project.platform}</p>
                    <p className="mt-5 min-h-24 text-sm leading-7 text-slate-400">{project.impact}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-500">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/project/${project.id}`}
                      className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${brand.text}`}
                    >
                      Explore product <span className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        {additionalProjects.length > 0 && (
          <div className="mt-24 border-t border-white/10 pt-14">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow mb-4">Additional case studies</p>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  More systems, quality and field-data solutions
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
                  className="group grid gap-4 py-8 transition hover:pl-3 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{project.platform}</p>
                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-slate-100 transition group-hover:text-cyan-100">
                      {project.title}
                    </h4>
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
