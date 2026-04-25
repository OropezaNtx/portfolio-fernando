import { motion } from "framer-motion"

function Skills() {
  const skills = [
    {
      title: "Data Engineering",
      description: "SQL, BigQuery, limpieza, integración, modelado y preparación de datos.",
    },
    {
      title: "Automation",
      description: "Python, VBA, Apps Script, Jupyter y flujos para reducir trabajo manual.",
    },
    {
      title: "Business Intelligence",
      description: "Power BI, Tableau, KPIs, dashboards y análisis para toma de decisiones.",
    },
    {
      title: "Software Development",
      description: "Aplicaciones web, desktop y móviles para procesos operativos reales.",
    },
  ]

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Skills</p>
          <h2 className="text-4xl font-bold">
            What I can build
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Areas where I combine data, automation and software to solve real operational problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="card-glow relative bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                {skill.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills