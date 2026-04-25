import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 mb-2">Contact</p>

        <h2 className="text-4xl font-bold mb-6">
          Available for data, automation and software roles
        </h2>

        <p className="text-slate-400 mb-8">
          Open to opportunities in data engineering, automation, and software development.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="text-cyan-400 font-semibold mb-2">Data Roles</p>
            <p className="text-slate-400 text-sm">
              SQL, BigQuery, Power BI, data quality and analytics.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="text-cyan-400 font-semibold mb-2">Automation</p>
            <p className="text-slate-400 text-sm">
              Python tools, process automation and internal systems.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="text-cyan-400 font-semibold mb-2">Software</p>
            <p className="text-slate-400 text-sm">
              Web, desktop and mobile applications for real workflows.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:foropeza0526@gmail.com"
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95 transition"
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 active:scale-95 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fernando-oropeza-83a31b220"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 active:scale-95 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact