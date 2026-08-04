import { motion } from "framer-motion"

const steps = [
  ["01", "Understand", "I review the current flow, the users, the information sources and the points where errors or repeated work appear."],
  ["02", "Structure", "I organize the data and define the rules needed to make the process clear, traceable and ready for automation."],
  ["03", "Build", "I develop the scripts, interfaces or systems that translate the process into a practical technical solution."],
  ["04", "Connect", "I integrate the solution with reports, cloud tools or operational outputs so it becomes part of the real workflow."],
  ["05", "Improve", "I validate results, document the logic and evolve the solution according to business needs and user feedback."],
]

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-900/82 py-28 text-white backdrop-blur-[2px] md:py-36">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            The technology changes from one project to another, but the principle is consistent: understand first, structure the logic and then build the right tool.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-[7px] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-300/70 via-blue-400/30 to-transparent md:block lg:left-0 lg:top-[7px] lg:h-px lg:w-full lg:bg-gradient-to-r" />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
            {steps.map(([number, title, description], index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative pl-10 md:pl-12 lg:pl-0 lg:pt-12"
              >
                <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-200/70 bg-slate-900 shadow-[0_0_18px_rgba(103,232,249,0.38)] lg:top-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                </span>
                <p className="text-xs font-semibold tracking-[0.18em] text-cyan-200">{number}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
