import { motion } from "framer-motion"

function Skills() {
  const skills = [
    "SQL",
    "BigQuery",
    "Power BI",
    "Tableau",
    "Excel Advanced",
    "Power Query",
    "Python",
    "Automation",
    "Jupyter",
    "React",
    "JavaScript",
    "Node.js",
    "Firebase",
    "Android",
    "Kotlin",
    "SQLite",
    "Access",
    "Google Cloud",
  ]

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Skills</p>
          <h2 className="text-4xl font-bold">
            Technologies I work with
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Tools and technologies I use to build data, automation and software solutions.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 px-6 py-4 rounded-xl text-sm text-slate-300 hover:text-white hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills