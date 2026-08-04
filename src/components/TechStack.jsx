import { motion } from "framer-motion"

const groups = [
  {
    title: "Data & Analytics",
    description: "Core tools for integration, transformation, validation and reporting.",
    tools: [
      { name: "Python", logo: "/images/tools/python.png" },
      { name: "SQL", logo: "/images/tools/sql.png" },
      { name: "BigQuery", logo: "/images/tools/bigquery.png" },
      { name: "Power BI", logo: "/images/tools/powerbi.png" },
      { name: "Excel", logo: "/images/tools/excel.png" },
      { name: "Pandas", logo: "/images/tools/pandas.png" },
      { name: "Tableau", logo: "/images/tools/tableau.png" },
      { name: "Access", logo: "/images/tools/access.png" },
    ],
  },
  {
    title: "Software Development",
    description: "Technologies used to build practical web, desktop and mobile solutions.",
    tools: [
      { name: "React", logo: "/images/tools/react.png" },
      { name: "JavaScript", logo: "/images/tools/javascript.png" },
      { name: "Node.js", logo: "/images/tools/nodejs.png" },
      { name: "FastAPI", logo: "/images/tools/fastapi.png" },
      { name: "PostgreSQL", logo: "/images/tools/postgresql.png" },
      { name: "Firebase", logo: "/images/tools/firebase.png" },
      { name: "Kotlin", logo: "/images/tools/kotlin.png" },
      { name: "Android", logo: "/images/tools/android.png" },
    ],
  },
  {
    title: "Cloud & Operations",
    description: "Platforms that support collaboration, automation and enterprise workflows.",
    tools: [
      { name: "Google Cloud", logo: "/images/tools/gcp.png" },
      { name: "SharePoint", logo: "/images/tools/sharepoint.png" },
      { name: "Power Automate", logo: "/images/tools/powerautomate.png" },
      { name: "QGIS", logo: "/images/tools/qgis.png" },
      { name: "SQLite", logo: "/images/tools/sqlite.png" },
    ],
  },
]

function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden border-y border-white/10 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-blue-950/10" />

      <div className="section-shell relative">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="eyebrow mb-4">Technology</p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Tools that support each solution.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            The stack changes according to the problem. These are the technologies I use most often across data, automation, cloud and software development.
          </p>
        </div>

        <div className="space-y-16">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start"
            >
              <div className="max-w-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  0{groupIndex + 1}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {group.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {group.tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: index * 0.035 }}
                    viewport={{ once: true }}
                    className="group flex min-h-28 items-center gap-4 rounded-[1.65rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.065]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 p-2.5">
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
                        onError={(event) => {
                          event.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
