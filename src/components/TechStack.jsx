import { motion } from "framer-motion"

const groups = [
  {
    number: "01",
    title: "Data & Analytics",
    description: "Data integration, transformation, analysis, visualization and reporting.",
    accent: "cyan",
    icon: "◉",
    tools: [
      { name: "Python", logo: "/images/tools/python.png" },
      { name: "SQL", logo: "/images/tools/sql.png" },
      { name: "BigQuery", logo: "/images/tools/bigquery.png" },
      { name: "Power BI", logo: "/images/tools/powerbi.png" },
      { name: "Excel", logo: "/images/tools/excel.png" },
      { name: "Tableau", logo: "/images/tools/tableau.png" },
    ],
  },
  {
    number: "02",
    title: "Software Development",
    description: "Building applications, APIs and practical automation tools.",
    accent: "blue",
    icon: "</>",
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
    number: "03",
    title: "Cloud & Operations",
    description: "Cloud platforms, collaboration tools and operational workflows.",
    accent: "violet",
    icon: "☁",
    tools: [
      { name: "Google Cloud", logo: "/images/tools/gcp.png" },
      { name: "SharePoint", logo: "/images/tools/sharepoint.png" },
      { name: "Power Automate", logo: "/images/tools/powerautomate.png" },
      { name: "QGIS", logo: "/images/tools/qgis.png" },
      { name: "SQLite", logo: "/images/tools/sqlite.png" },
      { name: "Access", logo: "/images/tools/access.png" },
    ],
  },
]

const accentStyles = {
  cyan: {
    number: "border-cyan-300/55 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.16)]",
    icon: "text-cyan-300",
    panel: "tech-panel-cyan",
  },
  blue: {
    number: "border-blue-400/55 text-blue-300 shadow-[0_0_28px_rgba(59,130,246,0.16)]",
    icon: "text-blue-400",
    panel: "tech-panel-blue",
  },
  violet: {
    number: "border-violet-400/55 text-violet-300 shadow-[0_0_28px_rgba(168,85,247,0.16)]",
    icon: "text-violet-400",
    panel: "tech-panel-violet",
  },
}

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden border-y border-white/10 py-24 text-white lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(37,99,235,0.08),transparent_34rem)]" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <p className="eyebrow mb-4 justify-center">Technology stack</p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Tools that <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">power the solution.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            These are the technologies and platforms I use to design, build and deliver data, automation and software solutions.
          </p>
        </motion.div>

        <div className="space-y-10 lg:space-y-12">
          {groups.map((group, groupIndex) => {
            const accent = accentStyles[group.accent]

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-center lg:gap-10"
              >
                <div className="grid grid-cols-[auto_1fr] items-start gap-4 lg:grid-cols-[auto_1fr]">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border bg-slate-950/65 text-sm font-semibold backdrop-blur ${accent.number}`}>
                    {group.number}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`text-lg font-semibold ${accent.icon}`}>{group.icon}</span>
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                        {group.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className={`tech-row-panel ${accent.panel}`}>
                  <span className="tech-row-glow" />
                  <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                    {group.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: groupIndex * 0.08 + toolIndex * 0.035 }}
                        viewport={{ once: true }}
                        className="tech-tool group"
                      >
                        <span className="tech-icon-shell">
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="h-6 w-6 object-contain transition duration-300 group-hover:scale-110"
                            onError={(event) => {
                              event.currentTarget.style.display = "none"
                            }}
                          />
                        </span>
                        <span className="text-xs font-medium text-slate-200 sm:text-sm">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-16 text-center lg:mt-20"
        >
          <span className="inline-flex items-center gap-3 text-sm text-slate-400">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/70" />
            <span className="text-cyan-300">&lt;/&gt;</span>
            <span className="h-px w-10 bg-gradient-to-r from-violet-400/70 to-transparent" />
          </span>
          <p className="mt-4 text-sm text-slate-400 sm:text-base">
            Always learning. Always building. Always solving.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
