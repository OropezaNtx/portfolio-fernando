import { motion } from "framer-motion"

function Skills() {
  const skills = [
    {
      title: "Data Engineering",
      description: "SQL, BigQuery, ETL, data integration, transformation, analytical models and business rules.",
    },
    {
      title: "Automation",
      description: "Python, Pandas, Jupyter, VBA, Power Automate, OCR and controlled operational workflows.",
    },
    {
      title: "Analytics & BI",
      description: "Power BI, Excel, Power Query, Power Pivot, Tableau, dashboards and operational indicators.",
    },
    {
      title: "Data Quality",
      description: "Validation, source reconciliation, standardization, traceability, incident management and quality controls.",
    },
    {
      title: "Cloud & Enterprise",
      description: "Google Cloud Platform, BigQuery, SharePoint Online, OneDrive, Dataverse and Microsoft 365.",
    },
    {
      title: "Software Development",
      description: "React, Node.js, FastAPI, PostgreSQL, Firebase, Kotlin and desktop, web and mobile solutions.",
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
          <p className="text-cyan-400 mb-2">Capabilities</p>
          <h2 className="text-4xl font-bold">How I create value</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A hybrid profile that connects business processes, data quality, automation and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="card-glow relative bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">{skill.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
