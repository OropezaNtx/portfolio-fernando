import { motion } from "framer-motion"

const principles = [
  ["Understand", "Study the operation before choosing the technology."],
  ["Structure", "Turn dispersed information into clear and usable data."],
  ["Build", "Create the solution that fits the process and its users."],
]

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950/88 py-28 text-white backdrop-blur-[2px] md:py-36"
    >
      <motion.div
        animate={{ x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl"
      />

      <div className="section-shell grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200"
          >
            About the work
          </motion.p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            I work where business understanding, data and software meet.
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.16 } },
            }}
            className="mt-10 max-w-3xl space-y-5 text-lg leading-8 text-slate-300"
          >
            {[
              "I am a Systems Engineer with experience analyzing operations, structuring information and developing practical solutions for commercial, quality-control and mobility processes.",
              "My strongest contribution is understanding how the work really happens and translating that logic into data models, automations and tools that people can use in their daily activities.",
            ].map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative border-l border-white/10 pl-6 sm:pl-10"
        >
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-[-1px] top-0 w-px origin-top bg-gradient-to-b from-cyan-300/80 via-blue-400/30 to-transparent"
          />

          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">What connects my projects</p>

          <div className="mt-8 space-y-1">
            {principles.map(([title, description], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.13 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="group border-b border-white/[0.08] py-6 first:pt-0 last:border-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[10px] font-semibold text-cyan-300/70">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white transition group-hover:text-cyan-100">
                    {title}
                  </h3>
                </div>
                <p className="mt-2 max-w-md pl-8 leading-7 text-slate-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
