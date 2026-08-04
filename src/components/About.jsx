import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-slate-950/88 py-28 text-white backdrop-blur-[2px] md:py-36"
    >
      <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl" />

      <div className="section-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            About the work
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            I work where business understanding, data and software meet.
          </h2>

          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I am a Systems Engineer with experience analyzing operations, structuring information and developing practical solutions for commercial, quality-control and mobility processes.
            </p>
            <p>
              My strongest contribution is understanding how the work really happens and translating that logic into data models, automations and tools that people can use in their daily activities.
            </p>
          </div>
        </div>

        <div className="border-l border-white/10 pl-6 sm:pl-10">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">What connects my projects</p>
          <div className="mt-8 space-y-7">
            {[
              ["Understand", "Study the operation before choosing the technology."],
              ["Structure", "Turn dispersed information into clear and usable data."],
              ["Build", "Create the solution that fits the process and its users."],
            ].map(([title, description]) => (
              <div key={title}>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                <p className="mt-2 max-w-md leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
