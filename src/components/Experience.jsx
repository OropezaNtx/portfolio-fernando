import { motion } from "framer-motion"

function Experience() {
  const experiences = [
    {
      role: "Data Engineer Jr / Automation",
      company: "American Express – Stratis",
      period: "Oct 2024 – Jan 2026",
      description:
        "Diseñé pipelines de preparación, validación y carga de datos desde Excel y Access hacia Google Cloud. Construí herramientas internas para automatizar procesos, mejorar la calidad de la información y apoyar el seguimiento comercial.",
      skills: ["SQL", "BigQuery", "Python", "Power BI", "Automation"],
    },
    {
      role: "Data Quality Control / Automation",
      company: "Merck",
      period: "Apr 2024 – Oct 2024",
      description:
        "Desarrollé soluciones para trazabilidad de lotes, generación de códigos QR, bitácoras digitales, bases de datos en Access, dashboards en Power BI e integración de información con Excel y SharePoint.",
      skills: ["Python", "Access", "SQL", "Power BI", "Excel", "VBA"],
    },
    {
      role: "Systems & Data Quality Analyst",
      company: "Urban Data",
      period: "Nov 2019 – Dec 2025 · Project-based",
      description:
        "Coordiné equipos de captura y validación de datos para estudios de movilidad. Desarrollé herramientas para análisis de archivos GPX, GDB y KMZ, segmentación de recorridos GPS y control de calidad de entregables.",
      skills: ["Excel", "Python", "QGIS", "GPS Data", "AutoCAD", "Team Leadership"],
    },
  ]

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Experience</p>
          <h2 className="text-4xl font-bold">Professional background</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Experience across financial, pharmaceutical and mobility sectors.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <article
              key={index}
              className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="text-cyan-400">{item.company}</p>
                </div>

                <span className="text-sm text-slate-400">{item.period}</span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience