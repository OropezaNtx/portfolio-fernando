import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectImageSlider from "../components/ProjectImageSlider"

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-cyan-400 hover:underline">
            Back to portfolio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Fernando Oropeza</title>
        <meta name="description" content={project.impact} />
      </Helmet>

      <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <section className="relative px-6 pt-10 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_35%)]" />
          <div className="absolute top-32 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition mb-12"
            >
              ← Back to portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
            >
              <div>
                <p className="text-cyan-400 mb-4 tracking-widest uppercase text-sm">
                  {project.category}
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  {project.title}
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900/80 border border-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-4 shadow-2xl shadow-cyan-500/10">
                <ProjectImageSlider
                  title={project.title}
                  images={project.gallery || [project.image]}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
            {project.metrics.map((metric, index) => (
              <motion.article
                key={metric}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400/60 transition"
              >
                <p className="text-cyan-400 text-sm font-semibold mb-3">
                  0{index + 1}
                </p>
                <p className="text-slate-200 font-medium">{metric}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >
              <p className="text-cyan-400 mb-3">Project Story</p>

              <h2 className="text-3xl font-bold mb-6">
                From operational problem to usable solution
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">The challenge</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">The approach</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid gap-5"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <p className="text-cyan-400 mb-3">My Role</p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="bg-slate-950/70 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-300"
                    >
                      <span className="text-cyan-400">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <p className="text-cyan-400 mb-3">Tech Stack</p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-950/70 border border-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm hover:border-cyan-400/60 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cyan-400 mb-2">Developer Thinking</p>
              <h2 className="text-4xl font-bold">
                What this project demonstrates
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Technical Challenge
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Designing reliable workflows, validating information quality
                  and keeping the solution usable for real operational users.
                </p>
              </article>

              <article className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  What I Learned
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Useful software starts by understanding the business process,
                  then translating that logic into data structures, automation
                  and interfaces.
                </p>
              </article>

              <article className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Next Improvements
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Improve documentation, add stronger deployment flows, expand
                  reporting and prepare the architecture for future scalability.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-cyan-400 mb-2">Interested?</p>
              <h2 className="text-3xl font-bold">
                Let&apos;s talk about this project
              </h2>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-slate-700 px-5 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>
              )}

              <Link
                to="/#contact"
                className="bg-cyan-400 text-slate-950 px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
              >
                Contact me
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProjectDetail