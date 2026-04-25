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
          Let&apos;s build something together
        </h2>

        <p className="text-slate-300 mb-10">
          Estoy abierto a oportunidades donde pueda aportar valor con soluciones de datos,
          automatización o desarrollo de software.
        </p>

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
            href="https://github.com/"
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