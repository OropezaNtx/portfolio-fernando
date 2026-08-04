import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectImageSlider from "../components/ProjectImageSlider"
import Starfield from "../components/Starfield"

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 text-white">
        <Starfield />
        <div className="relative z-10 flex min-h-screen items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-semibold">Project not found</h1>
            <Link to="/" className="mt-6 inline-block text-cyan-300">Back to portfolio</Link>
          </div>
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

      <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
        <Starfield />

        <section className="relative z-10 min-h-screen px-6 pb-24 pt-10">
          <div className="mx-auto max-w-[1380px]">
            <Link to="/" className="inline-flex items-center text-sm text-slate-400 transition hover:text-white">← Back to portfolio</Link>

            <div className="mt-16 grid min-h-[75vh] items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <p className="eyebrow mb-5">{project.category}</p>
                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl xl:text-8xl">{project.title}</h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">{project.impact}</p>
                <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                  {project.tech.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.96, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12 }} className="relative">
                <div className="absolute inset-8 rounded-[4rem] bg-cyan-400/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.8rem] border border-white/15 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <ProjectImageSlider title={project.title} images={project.gallery || [project.image]} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-y border-white/10 bg-slate-950/45 px-6 py-14 backdrop-blur-sm">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <motion.div key={metric} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.08 }} viewport={{ once: true }}>
                <p className="text-sm text-cyan-300">0{index + 1}</p>
                <p className="mt-3 text-xl font-medium leading-8 text-slate-200">{metric}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative z-10 px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="eyebrow mb-5">Project story</p>
                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">From operational problem to usable solution.</h2>
              </div>
              <div className="space-y-16">
                <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">The challenge</p>
                  <p className="mt-5 text-2xl leading-10 text-slate-300">{project.problem}</p>
                </motion.article>
                <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">The approach</p>
                  <p className="mt-5 text-2xl leading-10 text-slate-300">{project.solution}</p>
                </motion.article>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 pb-32">
          <div className="mx-auto max-w-6xl rounded-[3rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-md sm:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow mb-5">My role</p>
                <h2 className="text-4xl font-semibold tracking-[-0.04em]">What I designed and implemented.</h2>
              </div>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {project.responsibilities.map((item, index) => (
                  <div key={item} className="grid grid-cols-[50px_1fr] gap-4 py-5">
                    <span className="text-sm text-cyan-300">0{index + 1}</span>
                    <p className="text-lg text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/10 px-6 py-28 text-center">
          <p className="eyebrow mb-5">Next conversation</p>
          <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Interested in how I approach this kind of problem?</h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-7 py-3.5 text-white transition hover:bg-white/5">GitHub</a>}
            <Link to="/#contact" className="rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-100">Contact me</Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProjectDetail
