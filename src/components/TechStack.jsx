import { motion } from "framer-motion"

function TechStack() {
  const stack = [
    "Python",
    "SQL",
    "BigQuery",
    "Power BI",
    "React",
    "JavaScript",
    "Node.js",
    "Firebase",
    "SQLite",
    "Access",
    "Excel",
    "Power Query",
    "Automation",
    "Google Cloud",
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cyan-400 mb-2">Core Stack</p>
        <h2 className="text-4xl font-bold mb-10">
          Tools I use to build solutions
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl text-sm text-slate-300 hover:border-cyan-400 hover:text-white hover:-translate-y-1 transition duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default TechStack