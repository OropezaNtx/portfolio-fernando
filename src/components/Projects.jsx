import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Projects</p>
          <h2 className="text-4xl font-bold">
            Real solutions I&apos;ve built
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of data, automation and software projects focused on
            solving real operational problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 font-bold mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-xs text-cyan-400 mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {project.tech.join(" · ")}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Problem: </span>
                  {project.problem}
                </p>

                <p className="text-slate-400 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Solution: </span>
                  {project.solution}
                </p>

                <p className="text-slate-300 font-medium leading-relaxed">
                  <span className="text-cyan-400 font-medium">Impact: </span>
                  {project.impact}
                </p>
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                <Link
                  to={`/project/${project.id}`}
                  className="text-cyan-400 hover:underline"
                >
                  View case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects