import { motion } from "framer-motion"

function Experience() {
  const experiences = [
    {
      role: "SQL Administrator | Data, Automation & Process Improvement",
      company: "American Express Mexico · Project through Stratis",
      period: "Oct 2024 – Present",
      description: "I design and implement data and automation solutions for Sales Support, integrating commercial information, applying business rules and improving operational follow-up, executive support and decision-making.",
      highlights: ["BigQuery solutions for merchant affiliations, executives, campaigns, industries, visits, coverage and billing", "Coverage GAP desktop application in Python with validations, autocomplete, business rules and import/export workflows", "NAF automation, Power BI dashboards, data-quality controls, OCR and text-similarity processes"],
      skills: ["SQL", "BigQuery", "Python", "Pandas", "Power BI", "GCP", "Automation"],
    },
    {
      role: "Data Quality Control & Process Improvement",
      company: "Merck",
      period: "Mar 2024 – Sep 2024",
      description: "I developed data and automation solutions for quality-control processes, improving batch traceability, digitizing records and supporting operational and end-to-end performance monitoring in a regulated environment.",
      highlights: ["Centralized information from Access, Excel and SharePoint", "Automated records and reports using VBA, Power Query and Power Pivot", "Developed a Python and Access QR traceability system and Power BI dashboards"],
      skills: ["Python", "Access", "SQL", "Power BI", "Excel", "VBA", "SharePoint"],
    },
    {
      role: "Systems & Data Quality Consultant",
      company: "Urban Data",
      period: "Nov 2019 – Mar 2024 · Collaborations through Jul 2026",
      description: "I coordinated teams and developed tools for capturing, processing and validating mobility and transportation information across projects in different regions of Mexico.",
      highlights: ["Coordinated analysts, supervisors, data-entry teams and field personnel", "Automated cleaning, segmentation and validation of GPS and geospatial information", "Processed GPX, GDB and KMZ files and produced databases, maps and technical deliverables"],
      skills: ["Python", "Excel", "SQL", "QGIS", "GPS Data", "AutoCAD", "Team Leadership"],
    },
  ]

  return (
    <section id="experience" className="relative overflow-hidden bg-slate-900/40 py-28 text-white">
      <div className="grid-fade absolute inset-0 opacity-30" />
      <div className="section-shell relative">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">Professional journey</p>
          <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Experience built close to the operation.</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">A career connecting business needs, data quality and practical implementation across different industries.</p>
        </div>

        <div className="relative ml-3 border-l border-slate-800 pl-7 sm:ml-5 sm:pl-10">
          {experiences.map((item, index) => (
            <motion.article key={`${item.company}-${item.period}`} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: index * 0.08 }} viewport={{ once: true }} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.18rem] top-8 h-3 w-3 rounded-full border-2 border-slate-950 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)] sm:-left-[2.93rem]" />
              <div className="card-glow glass-panel rounded-3xl p-6 sm:p-8">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-sm font-medium text-cyan-300">{item.company}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.role}</h3>
                  </div>
                  <span className="h-fit rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs text-slate-400">{item.period}</span>
                </div>

                <p className="mt-6 max-w-4xl leading-7 text-slate-400">{item.description}</p>

                <div className="mt-7 grid gap-3 lg:grid-cols-3">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <div key={highlight} className="rounded-2xl border border-white/[0.07] bg-slate-950/55 p-4">
                      <span className="text-[10px] font-semibold text-cyan-400">0{highlightIndex + 1}</span>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill) => <span key={skill} className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-500">{skill}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
