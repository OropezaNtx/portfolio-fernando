import { motion } from "framer-motion"

const capabilities = [
  {
    title: "Business & Process Understanding",
    level: "Core strength",
    description: "Understanding how the operation works, identifying friction and translating business needs into a clear technical direction.",
    evidence: "Financial services · Pharmaceutical quality · Mobility operations",
    width: "96%",
  },
  {
    title: "Process Automation",
    level: "Core strength",
    description: "Transforming manual, repetitive and error-prone activities into structured workflows and usable software solutions.",
    evidence: "Desktop tools · Data workflows · Enterprise automation",
    width: "94%",
  },
  {
    title: "Data Engineering & Quality",
    level: "Advanced practice",
    description: "Integrating information, applying business rules, validating data and preparing analytical foundations for reporting and decisions.",
    evidence: "SQL · BigQuery · Data validation · Traceability",
    width: "91%",
  },
  {
    title: "Solution Design",
    level: "Cross-platform",
    description: "Choosing and combining desktop, web, Android, cloud and BI platforms according to users, context and operational needs.",
    evidence: "Desktop · Web · Android · Cloud · Business Intelligence",
    width: "90%",
  },
  {
    title: "Technical Communication",
    level: "Business-facing",
    description: "Explaining logic, documenting processes and collaborating with operational users, executives and technical teams.",
    evidence: "Documentation · User support · Requirements · Reporting",
    width: "87%",
  },
  {
    title: "Coordination & Ownership",
    level: "Project leadership",
    description: "Coordinating people, following incidents and carrying solutions from problem definition to implementation and improvement.",
    evidence: "Team coordination · Consulting · Independent products",
    width: "85%",
  },
]

function Skills() {
  return (
    <section id="capabilities" className="relative overflow-hidden py-28 text-white lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(34,211,238,0.055),_transparent_34rem)]" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]"
        >
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-5">Capability profile</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              The abilities behind the technology.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
              Tools change. These capabilities describe how I understand problems, design solutions and deliver useful results.
            </p>
            <div className="mt-10 border-l border-cyan-300/25 pl-5 text-sm leading-7 text-slate-500">
              The visual scale represents emphasis in my professional profile, not a formal or absolute percentage measurement.
            </div>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group py-8 sm:py-9"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{item.level}</span>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] transition group-hover:text-cyan-100 sm:text-3xl">{item.title}</h3>
                  </div>
                  <span className="text-xs text-slate-600">0{index + 1}</span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-slate-400">{item.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-600">{item.evidence}</p>

                <div className="mt-6 h-px overflow-hidden bg-white/[0.07]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    transition={{ duration: 1.15, delay: 0.12 + index * 0.06, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
