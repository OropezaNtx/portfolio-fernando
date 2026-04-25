function Experience() {
  const experiences = [
    {
      role: "SQL Administrator Intern",
      company: "American Express",
      period: "Current",
      description:
        "Apoyo en procesos de datos, consultas SQL, validación de información, análisis de bases y construcción de soluciones para seguimiento comercial.",
      skills: ["SQL", "BigQuery", "Power BI", "Data Analysis"],
    },
    {
      role: "Quality Control / Data Automation Intern",
      company: "Merck",
      period: "Internship",
      description:
        "Desarrollé herramientas para automatizar procesos internos, conectar bases de datos, generar códigos QR, alimentar dashboards y mejorar la trazabilidad de lotes.",
      skills: ["Python", "Access", "SQL", "Power BI", "Excel"],
    },
    {
      role: "Data & Field Operations Coordinator",
      company: "Urban Data",
      period: "Field & Office Experience",
      description:
        "Coordiné equipos de captura y validación de datos para estudios de movilidad, transporte e infraestructura, optimizando procesos en Excel y control de bases.",
      skills: ["Excel", "Power Query", "Team Leadership", "Data Validation"],
    },
  ]

  return (
    <section id="experience" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Experience</p>
          <h2 className="text-4xl font-bold">Professional background</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <article
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
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
    </section>
  )
}

export default Experience