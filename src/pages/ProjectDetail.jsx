import { Link, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectImageSlider from "../components/ProjectImageSlider"
import Starfield from "../components/Starfield"

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.65 },
}

function FlowDiagram({ items }) {
  return (
    <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
      <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-cyan-300/15 via-cyan-300/70 to-violet-400/15 lg:block" />
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-5 backdrop-blur-xl"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.05] text-[10px] text-cyan-200">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-5 text-sm font-medium leading-6 text-slate-200">{item}</p>
        </motion.div>
      ))}
    </div>
  )
}

function BeforeAfter({ project }) {
  const columns = [
    { label: "Before", items: project.before, tone: "text-rose-200", dot: "bg-rose-300" },
    { label: "After", items: project.after, tone: "text-emerald-200", dot: "bg-emerald-300" },
  ]

  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2">
      {columns.map((column) => (
        <motion.article
          key={column.label}
          {...fadeUp}
          className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-md sm:p-9"
        >
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${column.tone}`}>{column.label}</p>
          <div className="mt-7 space-y-5">
            {column.items.map((item) => (
              <div key={item} className="flex gap-4 border-b border-white/[0.07] pb-5 last:border-0 last:pb-0">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${column.dot}`} />
                <p className="leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  )
}

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
            <Link to="/#projects" className="inline-flex items-center text-sm text-slate-400 transition hover:text-white">← Back to featured solutions</Link>

            <div className="mt-16 grid min-h-[76vh] items-center gap-14 lg:grid-cols-[0.84fr_1.16fr]">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <p className="eyebrow mb-5">{project.platform}</p>
                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl xl:text-8xl">{project.title}</h1>
                <p className="mt-7 max-w-xl text-sm uppercase tracking-[0.16em] text-slate-500">Built for {project.audience}</p>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">{project.impact}</p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-slate-400">{tech}</span>
                  ))}
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
            <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
              <motion.div {...fadeUp}>
                <p className="eyebrow mb-5">Project story</p>
                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">A real process transformed into a usable solution.</h2>
              </motion.div>
              <div className="space-y-16">
                <motion.article {...fadeUp}>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">The operational challenge</p>
                  <p className="mt-5 text-2xl leading-10 text-slate-300">{project.problem}</p>
                </motion.article>
                <motion.article {...fadeUp}>
                  <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">The solution</p>
                  <p className="mt-5 text-2xl leading-10 text-slate-300">{project.solution}</p>
                </motion.article>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-y border-white/10 bg-slate-900/35 px-6 py-28 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="eyebrow mb-5">Solution architecture</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">How information moves through the system.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">The diagram focuses on platforms, users and business stages before implementation details.</p>
            </motion.div>
            <FlowDiagram items={project.architecture} />
          </div>
        </section>

        <section className="relative z-10 px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="eyebrow mb-5">Transformation</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">What changed in the operation.</h2>
            </motion.div>
            <BeforeAfter project={project} />
          </div>
        </section>

        <section className="relative z-10 border-y border-white/10 bg-slate-950/45 px-6 py-28 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="eyebrow mb-5">Engineering process</p>
                <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">How the solution was designed.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">The sequence shows the reasoning behind the implementation, not only the final technology.</p>
            </motion.div>

            <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
              {project.process.map(([title, description], index) => (
                <motion.article key={title} {...fadeUp} className="grid gap-4 py-7 sm:grid-cols-[70px_0.38fr_0.62fr] sm:items-start">
                  <span className="text-sm text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="leading-7 text-slate-400">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 py-32">
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
            <motion.article {...fadeUp}>
              <p className="eyebrow mb-5">Operational impact</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em]">Results without invented percentages.</h2>
              <div className="mt-10 space-y-5">
                {project.results.map((item) => (
                  <div key={item} className="flex gap-4 border-b border-white/10 pb-5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.55)]" />
                    <p className="text-lg leading-8 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article {...fadeUp}>
              <p className="eyebrow mb-5">Engineering lessons</p>
              <h2 className="text-4xl font-semibold tracking-[-0.045em]">What this project reinforced.</h2>
              <div className="mt-10 space-y-5">
                {project.lessons.map((item, index) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5">
                    <p className="text-xs text-violet-300">0{index + 1}</p>
                    <p className="mt-3 leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.article>
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
