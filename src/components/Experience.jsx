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
      <motion.div
        animate={{ y: [0, 22, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10%] top-[18%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl"
        >
          <p className="eyebrow mb-5">Professional journey</p>
          <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            Experience built close to real operations.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-[9px] top-0 w-px bg-white/[0.06] sm:left-[148px]" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="absolute bottom-0 left-[9px] top-0 w-px origin-top bg-gradient-to-b from-cyan-300 via-blue-500/60 to-transparent sm:left-[148px]"
          />

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? 34 : -18, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.72, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.25 }}
                className="relative grid gap-7 pl-10 sm:grid-cols-[120px_1fr] sm:gap-14 sm:pl-0"
              >
                <span className="text-sm text-slate-500 sm:pt-2 sm:text-right">{experience.year}</span>

                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-[3px] top-2 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(165,243,252,0.85)] sm:left-[142px]"
                />

                <motion.div whileHover={{ x: 6 }} className="group max-w-4xl transition">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
                    {experience.company}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] transition group-hover:text-cyan-50 sm:text-4xl">
                    {experience.role}
                  </h3>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                    {experience.summary}
                  </p>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-500"
                  >
                    {experience.details.map((detail) => (
                      <motion.span
                        key={detail}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                        }}
                        className="relative pl-3 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-cyan-300/65"
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
