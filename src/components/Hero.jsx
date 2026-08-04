import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-28 text-white"
    >
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-14 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Data · Automation · Software · Cloud
          </p>

          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            Technology that makes complex work feel simpler.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            I design data and software solutions for real business processes, from information integration to automation and operational tools.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100"
            >
              Explore my work
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-medium text-white transition hover:border-white/45 hover:bg-white/5"
            >
              Download CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <span>American Express</span>
            <span>Merck</span>
            <span>Urban Data</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="relative min-h-[470px] lg:min-h-[690px]"
        >
          <div className="absolute left-[4%] top-[8%] h-[78%] w-[86%] rotate-[-7deg] rounded-[3rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-700 opacity-80 blur-2xl" />

          <div className="absolute inset-x-[3%] top-[3%] overflow-hidden rounded-[2.8rem] border border-white/20 bg-slate-900/85 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:inset-x-[8%] lg:inset-x-[2%]">
            <div className="overflow-hidden rounded-[2.2rem] bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Selected solution
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950">
                <img
                  src="/images/projects/coverage-gap.png"
                  alt="Coverage GAP application preview"
                  className="h-full w-full object-cover object-top opacity-90"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Python desktop application
                  </p>
                  <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    Turning commercial rules into a usable operational tool.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[2%] left-[2%] max-w-[230px] rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl sm:left-[1%] lg:-left-[4%]">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">My approach</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Understand the process, structure the data and build the right tool.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
