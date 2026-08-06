import { motion } from "framer-motion"

const solutions = [
  {
    number: "01",
    title: "Desktop Applications",
    platform: "Windows · Internal operations",
    description: "Operational tools, validation forms, automation utilities and data-processing applications for daily business work.",
    examples: ["Structured data capture", "Business-rule validation", "Executable distribution"],
    accent: "from-cyan-300/20 to-sky-500/5",
  },
  {
    number: "02",
    title: "Web Platforms",
    platform: "Web · Business systems",
    description: "Platforms and portals for centralized information, operational follow-up, territorial analysis and digital products.",
    examples: ["Business portals", "Data products", "Responsive interfaces"],
    accent: "from-blue-400/20 to-indigo-500/5",
  },
  {
    number: "03",
    title: "Android Applications",
    platform: "Mobile · Field operations",
    description: "Mobile workflows for field capture, GPS-based activities, validation and structured operational information.",
    examples: ["Field data capture", "Mobility workflows", "Connected mobile operations"],
    accent: "from-emerald-300/20 to-cyan-500/5",
  },
  {
    number: "04",
    title: "Data & Business Intelligence",
    platform: "Data · Analytics · BI",
    description: "Integrated datasets, quality controls, business rules, indicators and dashboards prepared for operational decisions.",
    examples: ["Data integration", "Executive dashboards", "Quality and traceability"],
    accent: "from-violet-400/20 to-blue-500/5",
  },
  {
    number: "05",
    title: "Cloud & Enterprise Solutions",
    platform: "Cloud · Collaboration · Automation",
    description: "Cloud data processes, enterprise workflows and integrations that connect users, information and reporting.",
    examples: ["BigQuery workflows", "Microsoft 365 automation", "Enterprise integration"],
    accent: "from-fuchsia-400/15 to-violet-500/5",
  },
]

function WhatIBuild() {
  return (
    <section id="solutions" className="relative overflow-hidden py-28 text-white lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-blue-950/[0.06] to-slate-950/35" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="eyebrow mb-5">What I build</p>
            <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Complete solutions, not isolated technologies.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
            My work can take different forms depending on the process and the users: desktop, web, Android, data, business intelligence or cloud.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          {solutions.map((solution, index) => {
            const wide = index === 0 || index === 3
            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 32, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/48 p-6 backdrop-blur-xl transition hover:border-white/20 sm:p-8 ${wide ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-xs font-semibold tracking-[0.2em] text-cyan-200">{solution.number}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{solution.platform}</span>
                  </div>
                  <h3 className="mt-10 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{solution.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">{solution.description}</p>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-500">
                    {solution.examples.map((example) => <span key={example}>{example}</span>)}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatIBuild
