import { motion } from "framer-motion"

const steps = [
  ["01", "Understand", "I review the current flow, the users, the information sources and the points where errors or repeated work appear."],
  ["02", "Structure", "I organize the data and define the rules needed to make the process clear, traceable and ready for automation."],
  ["03", "Build", "I develop the scripts, interfaces or systems that translate the process into a practical technical solution."],
  ["04", "Connect", "I integrate the solution with web, desktop, mobile, cloud or BI platforms so it becomes part of the real workflow."],
  ["05", "Improve", "I validate results, document the logic and evolve the solution according to business needs and user feedback."],
]

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-900/82 py-28 text-white backdrop-blur-[2px] md:py-36">
      <motion.div
        animate={{ x: [0, 35, 0], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">How I work</p>
            <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              From an operational need to a solution people can use.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
            The technology and delivery platform change from one project to another, but the principle is consistent: understand first, structure the logic and then build the right solution.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-[7px] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-white/[0.06] md:block lg:left-0 lg:top-[7px] lg:h-px lg:w-full" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="absolute left-[7px] top-3 hidden h-[calc(100%-1.5rem)] w-px origin-top bg-gradient-to-b from-cyan-300 via-blue-400/45 to-transparent md:block lg:hidden"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.15 }}
            className="absolute left-0 top-[7px] hidden h-px w-full origin-left bg-gradient-to-r from-cyan-300/80 via-blue-400/50 to-violet-400/25 lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
            {steps.map(([number, title, description], index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative pl-10 md:pl-12 lg:pl-0 lg:pt-12"
              >
                <motion.span
                  animate={{ boxShadow: ["0 0 0 rgba(103,232,249,0)", "0 0 22px rgba(103,232,249,0.5)", "0 0 0 rgba(103,232,249,0)"] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.7 }}
                  className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-200/70 bg-slate-900 lg:top-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                </motion.span>

                <p className="text-xs font-semibold tracking-[0.18em] text-cyan-200">{number}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] transition group-hover:text-cyan-100">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400 transition group-hover:text-slate-300">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
