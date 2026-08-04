import { motion } from "framer-motion"

const pipeline = ["Sources", "Python", "BigQuery", "Power BI"]

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 pb-20 pt-32 text-white md:pt-40">
      <div className="grid-fade absolute inset-0 opacity-70" />
      <div className="animate-pulse-soft absolute left-[8%] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="animate-pulse-soft absolute right-[5%] top-44 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl [animation-delay:1.4s]" />

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            Open to data, automation and software opportunities
          </div>

          <p className="eyebrow mb-5">Data · Automation · Software · Cloud</p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            I turn complex processes into
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              usable technology solutions.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Systems Engineer focused on data integration, process automation and software development for financial, pharmaceutical and mobility operations.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
              Explore case studies <span className="ml-2">→</span>
            </a>
            <a href="/cv.pdf" download className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-white/[0.03] px-6 py-3.5 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-white/[0.06]">
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-500">
            <span>American Express</span><span>Merck</span><span>Urban Data</span><span>Independent products</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className="animate-float glass-panel relative rounded-[2rem] p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Solution architecture</p>
                <h2 className="mt-1 font-semibold text-slate-100">Business process transformation</h2>
              </div>
              <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300/70"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"/></div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-4">
                {pipeline.map((item, index) => (
                  <div key={item} className="relative">
                    <div className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-4 text-center">
                      <span className="mb-2 block text-[10px] text-cyan-400">0{index + 1}</span>
                      <span className="text-xs font-semibold text-slate-200">{item}</span>
                    </div>
                    {index < pipeline.length - 1 && <div className="flow-line absolute -right-3 top-1/2 hidden h-px w-3 sm:block" />}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-500">Primary focus</p>
                  <p className="mt-1 text-sm font-semibold text-white">Operational impact</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-500">Delivery approach</p>
                  <p className="mt-1 text-sm font-semibold text-white">End-to-end solutions</p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                <div className="mb-3 flex items-center justify-between text-xs"><span className="text-slate-400">Process modernization</span><span className="text-cyan-300">Data + Software</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-[86%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" /></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
