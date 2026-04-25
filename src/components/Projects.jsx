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
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {project.tech.join(" · ")}
              </p>

              <p className="text-slate-400 text-sm mb-2">
                <span className="text-cyan-400">Problem:</span> {project.problem}
              </p>

              <p className="text-slate-400 text-sm mb-2">
                <span className="text-cyan-400">Solution:</span> {project.solution}
              </p>

              <p className="text-slate-300 text-sm font-medium">
                <span className="text-cyan-400">Impact:</span> {project.impact}
              </p>

              <div className="mt-5 flex gap-4 text-sm">

                <Link
                  to={`/project/${project.id}`}
                  className="text-cyan-400 hover:underline"
                >
                  View case study →
                </Link>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-400"
                  >
                    GitHub
                  </a>
                )}

              </div>

            </article>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

export default Projects