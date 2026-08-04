import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 mb-3">About me</p>

          <h2 className="text-4xl font-bold mb-6">
            I connect business needs, data and technology.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-4">
            I am a Systems Engineer with experience analyzing data, automating processes and developing solutions for commercial, operational and quality-control environments.
          </p>

          <p className="text-slate-300 leading-relaxed">
            My work combines operational understanding, data controls and software development to transform dispersed information and manual activities into functional, traceable and maintainable solutions.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="card-glow relative bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300">
            <h3 className="text-cyan-400 font-semibold mb-2">Data & Analytics</h3>
            <p className="text-slate-300 text-sm">
              SQL, BigQuery, Power BI, advanced Excel, data integration, business rules and analytical models.
            </p>
          </div>

          <div className="card-glow relative bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300">
            <h3 className="text-cyan-400 font-semibold mb-2">Automation & Data Quality</h3>
            <p className="text-slate-300 text-sm">
              Python, Pandas, Jupyter, VBA, OCR, validation, reconciliation, traceability and controlled workflows.
            </p>
          </div>

          <div className="card-glow relative bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition duration-300">
            <h3 className="text-cyan-400 font-semibold mb-2">Software Solutions</h3>
            <p className="text-slate-300 text-sm">
              Desktop, web and mobile applications designed around real operational requirements and users.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
