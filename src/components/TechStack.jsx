import { motion } from "framer-motion"

function TechStack() {
  const tools = [
    { name: "Python", logo: "/images/tools/python.png" },
    { name: "SQL", logo: "/images/tools/sql.png" },
    { name: "BigQuery", logo: "/images/tools/bigquery.png" },
    { name: "Power BI", logo: "/images/tools/powerbi.png" },
    { name: "Tableau", logo: "/images/tools/tableau.png" },
    { name: "Excel", logo: "/images/tools/excel.png" },
    { name: "React", logo: "/images/tools/react.png" },
    { name: "JavaScript", logo: "/images/tools/javascript.png" },
    { name: "Node.js", logo: "/images/tools/nodejs.png" },
    { name: "Firebase", logo: "/images/tools/firebase.png" },
    { name: "Kotlin", logo: "/images/tools/kotlin.png" },
    { name: "Android", logo: "/images/tools/android.png" },
    { name: "SQLite", logo: "/images/tools/sqlite.png" },
    { name: "Access", logo: "/images/tools/access.png" },
    { name: "Google Cloud", logo: "/images/tools/gcp.png" },
  ]

  return (
    <motion.section
      id="tech-stack"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Tech Stack</p>
          <h2 className="text-4xl font-bold">
            Tools I use to build solutions
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies, platforms and tools I use across data, automation, cloud and software development.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-400 transition overflow-hidden">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                  }}
                />
              </div>

              <h3 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition">
                {tool.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default TechStack