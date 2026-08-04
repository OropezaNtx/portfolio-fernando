import { motion } from "framer-motion"

function Metrics() {
  const metrics = [
    { value: "3", label: "Industries", description: "Finance, pharmaceuticals and mobility." },
    { value: "8+", label: "Solutions", description: "Data, automation, BI, web, desktop and mobile." },
    { value: "End-to-end", label: "Working style", description: "From process analysis to a usable technical solution." },
  ]

  return (
    <section className="relative border-y border-white/[0.06] bg-slate-950/70 py-8 text-white">
      <div className="section-shell grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
        {metrics.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group bg-slate-950/95 p-6 transition hover:bg-slate-900/90 md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-cyan-300">{item.label}</p>
              </div>
              <span className="text-xs text-slate-700 transition group-hover:text-cyan-400">0{index + 1}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Metrics
