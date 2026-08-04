import { motion } from "framer-motion"

function Experience() {
  const experiences = [
    {
      role: "SQL Administrator | Data, Automation & Process Improvement",
      company: "American Express Mexico · Project through Stratis",
      period: "Oct 2024 – Present",
      description:
        "I design and implement data and automation solutions for Sales Support, integrating commercial information, applying business rules and improving operational follow-up, executive support and decision-making.",
      highlights: [
        "BigQuery solutions for merchant affiliations, executives, campaigns, industries, visits, coverage and billing",
        "Coverage GAP desktop application in Python with validations, autocomplete, business rules and import/export workflows",
        "NAF automation, Power BI dashboards, data-quality controls, OCR and text-similarity processes",
      ],
      skills: ["SQL", "BigQuery", "Python", "Pandas", "Power BI", "GCP", "Automation"],
    },
    {
      role: "Data Quality Control & Process Improvement",
      company: "Merck",
      period: "Mar 2024 – Sep 2024",
      description:
        "I developed data and automation solutions for quality-control processes, improving batch traceability, digitizing records and supporting operational and end-to-end performance monitoring in a regulated environment.",
      highlights: [
        "Centralized information from Access, Excel and SharePoint",
        "Automated records and reports using VBA, Power Query and Power Pivot",
        "Developed a Python and Access QR traceability system and Power BI dashboards",
      ],
      skills: ["Python", "Access", "SQL", "Power BI", "Excel", "VBA", "SharePoint"],
    },
    {
      role: "Systems & Data Quality Consultant",
      company: "Urban Data",
      period: "Nov 2019 – Mar 2024 · Project collaborations through Jul 2026",
      description:
        "I coordinated teams and developed tools for capturing, processing and validating mobility and transportation information across projects in different regions of Mexico.",
      highlights: [
        "Coordinated analysts, supervisors, data-entry teams and field personnel",
        "Automated cleaning, segmentation and validation of GPS and geospatial information",
        "Processed GPX, GDB and KMZ files and produced consolidated databases, maps and technical deliverables",
      ],
      skills: ["Python", "Excel", "SQL", "QGIS", "GPS Data", "AutoCAD", "Team Leadership"],
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
            Experience delivering data, automation and software solutions across financial services, pharmaceuticals and mobility.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="text-cyan-400">{item.company}</p>
                </div>
                <span className="text-sm text-slate-400 md:text-right">{item.period}</span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">{item.description}</p>

              <ul className="space-y-2 mb-5 text-sm text-slate-400">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="text-cyan-400">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
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
