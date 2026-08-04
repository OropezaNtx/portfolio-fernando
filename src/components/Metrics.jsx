import { motion } from "framer-motion"

function Metrics() {
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

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-y border-white/10 bg-slate-950 px-6 py-12 text-white"
    >
      <div className="mx-auto grid max-w-[1280px] gap-9 md:grid-cols-3 md:gap-0">
        {metrics.map((item, index) => (
          <article
            key={item.label}
            className={`md:px-10 ${index > 0 ? "md:border-l md:border-white/10" : ""}`}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {item.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {item.label}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Metrics
