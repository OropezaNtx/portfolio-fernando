import { motion } from "framer-motion"

function TechStack() {
  const tools = [
    { name: "Python", logo: "/images/tools/python.png", level: "Core" },
    { name: "SQL", logo: "/images/tools/sql.png", level: "Core" },
    { name: "BigQuery", logo: "/images/tools/bigquery.png", level: "Core" },
    { name: "Power BI", logo: "/images/tools/powerbi.png", level: "Core" },
    { name: "React", logo: "/images/tools/react.png", level: "Web" },
    { name: "JavaScript", logo: "/images/tools/javascript.png", level: "Web" },
    { name: "Excel", logo: "/images/tools/excel.png", level: "Data" },
    { name: "Google Cloud", logo: "/images/tools/gcp.png", level: "Cloud" },
    { name: "Firebase", logo: "/images/tools/firebase.png", level: "Cloud" },
    { name: "Kotlin", logo: "/images/tools/kotlin.png", level: "Mobile" },
    { name: "Android", logo: "/images/tools/android.png", level: "Mobile" },
    { name: "Node.js", logo: "/images/tools/nodejs.png", level: "Backend" },
    { name: "Tableau", logo: "/images/tools/tableau.png", level: "BI" },
    { name: "SQLite", logo: "/images/tools/sqlite.png", level: "DB" },
    { name: "Access", logo: "/images/tools/access.png", level: "DB" },
  ]

  return (
    <motion.section
      id="tech-stack"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-slate-950 text-white py-24 px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_38%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 mb-2">Tech Stack</p>

          <h2 className="text-4xl font-bold">
            Tools behind the solutions
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A visual overview of the technologies I use across data, automation,
            cloud workflows and software development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => {
            const isCore = tool.level === "Core"

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.025 }}
                viewport={{ once: true }}
                className={`group relative flex items-center gap-3 rounded-full border bg-slate-900/70 backdrop-blur px-5 py-3 transition duration-300 hover:-translate-y-1 ${
                  isCore
                    ? "border-cyan-400/40 shadow-lg shadow-cyan-500/10"
                    : "border-slate-800 hover:border-cyan-400/70"
                }`}
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 to-blue-500/10" />

                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 border border-slate-800">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="h-6 w-6 object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = "none"
                    }}
                  />
                </div>

                <div className="relative">
                  <span className="block text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition">
                    {tool.name}
                  </span>
                  <span className="block text-[11px] text-slate-500">
                    {tool.level}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default TechStack