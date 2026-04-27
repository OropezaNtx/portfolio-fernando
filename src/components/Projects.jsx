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
          <h2 className="text-4xl font-bold">Real solutions I&apos;ve built</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Practical data, automation and software projects focused on solving operational problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card-glow relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="aspect-video bg-slate-950 border-b border-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                  }}
                />
              </div>

              <div className="p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 font-bold mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-xs text-cyan-400 mb-2">{project.category}</p>

                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.tech.slice(0, 4).join(" · ")}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.impact}
                </p>

                <div className="flex gap-4 text-sm">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects