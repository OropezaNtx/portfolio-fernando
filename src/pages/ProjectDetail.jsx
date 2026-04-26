import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { projects } from "../data/projects"

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

      <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-block text-cyan-400 hover:underline mb-10"
          >
            ← Back to portfolio
          </Link>

          <section className="mb-12">
            <p className="text-cyan-400 mb-3">{project.category}</p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              {project.impact}
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-4 mb-12">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
              >
                <p className="text-cyan-400 font-semibold mb-2">
                  0{index + 1}
                </p>
                <p className="text-slate-300">{metric}</p>
              </div>
            ))}
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mb-12">
            <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none"
                }}
              />
              <p className="text-slate-500 px-6 text-center">
                Add a screenshot in: public{project.image}
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-xl font-semibold mb-4">
                Problem
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-xl font-semibold mb-4">
                Solution
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-xl font-semibold mb-4">
                Impact
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-5">Tech Stack</h2>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-slate-950 border border-slate-800 text-slate-300 px-3 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-5">My Role</h2>

              <ul className="space-y-3">
                {project.responsibilities.map((item) => (
                  <li key={item} className="text-slate-300">
                    <span className="text-cyan-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-xl font-semibold mb-4">
                Technical Challenges
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Designing reliable workflows, validating information quality and keeping the solution usable for real operational users.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-xl font-semibold mb-4">
                What I Learned
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Building useful tools requires understanding the process first, then translating that logic into data structures, automation and interfaces.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-xl font-semibold mb-4">
                Next Improvements
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Improve deployment, add better documentation, expand reporting and strengthen the architecture for future scalability.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default ProjectDetail