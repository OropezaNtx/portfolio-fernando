import { motion } from "framer-motion"

function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand the process",
      description:
        "Primero analizo cómo funciona el flujo actual, dónde se capturan los datos y qué partes generan errores o trabajo repetitivo.",
    },
    {
      number: "02",
      title: "Structure the data",
      description:
        "Limpio, ordeno y modelo la información para convertirla en una base confiable, útil para análisis o automatización.",
    },
    {
      number: "03",
      title: "Automate workflows",
      description:
        "Construyo scripts, validaciones y herramientas que reducen tareas manuales y mejoran la consistencia operativa.",
    },
    {
      number: "04",
      title: "Build usable tools",
      description:
        "Desarrollo interfaces, apps o sistemas internos pensados para que los usuarios puedan trabajar de forma más clara y eficiente.",
    },
    {
      number: "05",
      title: "Measure and improve",
      description:
        "Conecto los resultados con reportes, dashboards o controles para evaluar impacto y seguir mejorando el proceso.",
    },
  ]

  return (
    <motion.section
      id="process"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Process</p>
          <h2 className="text-4xl font-bold">
            How I turn processes into software
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            My approach combines business understanding, data quality,
            automation and practical software development.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative bg-slate-950 border border-slate-800 rounded-3xl p-5 hover:border-cyan-400/70 hover:-translate-y-2 transition duration-300"
            >
              <span className="text-cyan-400 text-sm font-semibold">
                {step.number}
              </span>

              <h3 className="text-lg font-semibold mt-4 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Process