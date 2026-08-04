import { motion } from "framer-motion"

const flow = [
  ["Operational Data", "/images/tools/excel.png"],
  ["Automation", "/images/tools/python.png"],
  ["Cloud Data", "/images/tools/bigquery.png"],
  ["Business Logic", "/images/tools/validation.png"],
  ["User Solution", "/images/tools/powerbi.png"],
]

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-slate-950/82 pt-28 text-white backdrop-blur-[2px]">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-14 px-6 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Data & Software Solutions Engineer</p>
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            Building software that helps people work better.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            I transform real business processes into desktop, web, Android, data, business intelligence and cloud solutions.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#solutions" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100">What I build</a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-medium text-white transition hover:border-white/45 hover:bg-white/5">Explore my work</a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <span>American Express</span><span>Merck</span><span>Urban Data</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95, y: 35 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12 }} className="relative min-h-[520px] lg:min-h-[680px]">
          <div className="absolute left-[8%] top-[10%] h-[72%] w-[82%] rotate-[-6deg] rounded-[4rem] bg-gradient-to-br from-cyan-300/80 via-sky-500/55 to-violet-700/45 blur-3xl" />
          <div className="absolute inset-x-[2%] top-[2%] overflow-hidden rounded-[2.8rem] border border-white/15 bg-slate-950/72 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:inset-x-[7%] lg:inset-x-[1%]">
            <div className="rounded-[2.2rem] border border-white/[0.07] bg-slate-950/88 px-5 py-5 sm:px-7 sm:py-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div><p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">Live solution flow</p><h2 className="mt-1 text-lg font-semibold tracking-[-0.02em]">From an operational need to a working solution</h2></div>
                <motion.span animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 2.2, repeat: Infinity }} className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              </div>

              <div className="relative mt-7 space-y-3.5">
                <div className="absolute bottom-7 left-6 top-7 w-px bg-gradient-to-b from-cyan-300/20 via-sky-400/80 to-violet-400/25" />
                {flow.map(([name, logo], index) => (
                  <motion.div key={name} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.55 + index * 0.18 }} className="relative flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5">
                    <motion.div animate={{ boxShadow: ["0 0 0 rgba(34,211,238,0)", "0 0 24px rgba(34,211,238,0.35)", "0 0 0 rgba(34,211,238,0)"] }} transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.62 }} className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950">
                      <img src={logo} alt="" className="h-6 w-6 object-contain" onError={(event) => { event.currentTarget.style.display = "none" }} />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4"><span className="text-sm font-semibold text-slate-100">{name}</span><span className="text-[10px] uppercase tracking-[0.16em] text-slate-600">0{index + 1}</span></div>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.4, delay: 0.9 + index * 0.35, repeat: Infinity, repeatDelay: 3.8 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400" /></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.7 }} className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.035] px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">Result</p><p className="mt-1 text-sm leading-6 text-slate-300">A practical solution ready for users, reporting and operational decisions.</p>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-[2%] right-[1%] max-w-[230px] rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl lg:-right-[2%]">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">My approach</p><p className="mt-2 text-sm leading-6 text-slate-200">Understand the process, structure the information and build the right solution.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
