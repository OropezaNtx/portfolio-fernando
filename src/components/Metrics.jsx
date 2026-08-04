import { motion } from "framer-motion"

const metrics = [
  {
    value: "3",
    label: "Industries",
    description: "Financial services, pharmaceuticals and mobility.",
  },
  {
    value: "8+",
    label: "Solutions",
    description: "Data, automation, BI, desktop, web and mobile work.",
  },
  {
    value: "End-to-end",
    label: "Approach",
    description: "From business understanding to a working technical solution.",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

function Metrics() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950/70 px-6 py-12 text-white backdrop-blur-sm">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 origin-center bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto grid max-w-[1280px] gap-9 md:grid-cols-3 md:gap-0"
      >
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            variants={item}
            whileHover={{ y: -4 }}
            className={`group relative md:px-10 ${index > 0 ? "md:border-l md:border-white/10" : ""}`}
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "2.5rem" }}
              transition={{ duration: 0.7, delay: 0.25 + index * 0.12 }}
              viewport={{ once: true }}
              className="mb-4 block h-px bg-gradient-to-r from-cyan-300 to-transparent"
            />

            <div className="flex items-baseline gap-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.86 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.18 + index * 0.12 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
              >
                {metric.value}
              </motion.span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {metric.label}
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">
              {metric.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Metrics
