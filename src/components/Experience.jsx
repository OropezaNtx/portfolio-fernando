import { motion } from "framer-motion"

const experiences = [
  {
    year: "2024 — Present",
    company: "American Express Mexico",
    role: "SQL Administrator | Data, Automation & Process Improvement",
    summary: "Designing data and automation solutions for Sales Support, from commercial information integration to operational tools and reporting.",
    details: ["BigQuery commercial data models", "Coverage GAP desktop application", "NAF automation and quality controls"],
  },
  {
    year: "2024",
    company: "Merck",
    role: "Data Quality Control & Process Improvement",
    summary: "Developing traceability, digital records and reporting solutions for quality-control processes in a regulated environment.",
    details: ["Centralized operational information", "QR traceability with Python and Access", "Power BI monitoring"],
  },
  {
    year: "2019 — 2026",
    company: "Urban Data",
    role: "Systems & Data Quality Consultant",
    summary: "Coordinating teams and building tools for mobility data capture, validation, geospatial processing and technical delivery.",
    details: ["Team coordination", "GPS and geospatial automation", "Databases, maps and deliverables"],
  },
]

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-32 text-white">
      <div className="section-shell">
        <div className="mb-20 max-w-4xl">
          <p className="eyebrow mb-5">Professional journey</p>
          <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Experience built close to real operations.</h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[9px] top-0 w-px bg-gradient-to-b from-cyan-300 via-blue-500/50 to-transparent sm:left-[148px]" />
          <div className="space-y-20">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative grid gap-7 pl-10 sm:grid-cols-[120px_1fr] sm:gap-14 sm:pl-0"
              >
                <span className="text-sm text-slate-500 sm:pt-2 sm:text-right">{item.year}</span>
                <span className="absolute left-[3px] top-2 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(165,243,252,0.85)] sm:left-[142px]" />
                <div className="max-w-4xl">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">{item.company}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{item.role}</h3>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{item.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-500">
                    {item.details.map((detail) => <span key={detail}>{detail}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
