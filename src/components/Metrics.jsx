import { motion } from "framer-motion"

function Metrics() {
  const metrics = [
    {
      value: "3+",
      label: "Sectors",
      description: "Finance, pharma and mobility projects.",
    },
    {
      value: "6+",
      label: "Real projects",
      description: "Data, automation, desktop, mobile and BI solutions.",
    },
    {
      value: "Data + Software",
      label: "Hybrid profile",
      description: "Able to connect analysis, automation and development.",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-950 text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
        {metrics.map((item) => (
          <article
            key={item.label}
            className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 text-center hover:border-cyan-400/70 transition"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">
              {item.value}
            </h3>

            <p className="text-white font-semibold mb-2">
              {item.label}
            </p>

            <p className="text-slate-400 text-sm">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default Metrics