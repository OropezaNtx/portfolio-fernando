import { motion } from "framer-motion"

const capabilities = [
  { number: "01", title: "Data Engineering", description: "SQL, BigQuery, ETL, integration, transformation, analytical models and business rules." },
  { number: "02", title: "Automation", description: "Python, Pandas, Jupyter, VBA, Power Automate, OCR and controlled operational workflows." },
  { number: "03", title: "Analytics & BI", description: "Power BI, Excel, Power Query, Power Pivot, Tableau and operational indicators." },
  { number: "04", title: "Data Quality", description: "Validation, reconciliation, standardization, traceability and incident management." },
  { number: "05", title: "Cloud & Enterprise", description: "Google Cloud, BigQuery, SharePoint, OneDrive, Dataverse and Microsoft 365." },
  { number: "06", title: "Software Development", description: "React, Node.js, FastAPI, PostgreSQL, Firebase, Kotlin and desktop, web and mobile solutions." },
]

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-5">Capabilities</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">One profile. Several ways to create value.</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">The value is not only in the tools. It is in connecting data, process understanding and implementation.</p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group grid gap-5 py-8 sm:grid-cols-[70px_0.9fr_1.1fr] sm:items-start"
              >
                <span className="text-sm text-cyan-300">{item.number}</span>
                <h3 className="text-2xl font-semibold tracking-tight transition group-hover:text-cyan-200">{item.title}</h3>
                <p className="leading-7 text-slate-400">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
