import { motion } from "framer-motion"

const groups = [
  ["Python", "SQL", "BigQuery", "Power BI", "Excel", "Pandas"],
  ["React", "JavaScript", "Node.js", "FastAPI", "PostgreSQL", "Firebase", "Kotlin"],
  ["Google Cloud", "SharePoint", "Power Automate", "Tableau", "QGIS", "Access"],
]

function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden border-y border-white/10 py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-transparent to-blue-950/20" />
      <div className="section-shell relative mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-4">Technology</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Tools that support the solution.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-slate-400">Technology changes by project. The objective remains the same: build something useful, clear and maintainable.</p>
      </div>

      <div className="relative space-y-4">
        {groups.map((group, rowIndex) => {
          const items = [...group, ...group]
          return (
            <div key={group[0]} className="overflow-hidden">
              <motion.div
                animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ duration: 28 + rowIndex * 4, repeat: Infinity, ease: "linear" }}
                className="flex w-max gap-4 px-2"
              >
                {items.map((tool, index) => (
                  <span key={`${tool}-${index}`} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm text-slate-300 backdrop-blur-sm">
                    {tool}
                  </span>
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack
