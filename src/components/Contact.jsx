import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950/78 py-28 text-white backdrop-blur-[2px] md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-950/25 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="section-shell relative text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Let&apos;s build something useful</p>

        <h2 className="mx-auto mt-7 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
          Ready for the next challenge in data, automation or software.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          I am interested in roles where I can understand real operational needs and transform them into clear, practical technology solutions.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:foropeza0526@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-100"
          >
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white/45 hover:bg-white/5"
          >
            View LinkedIn
          </a>
          <a
            href="https://github.com/OropezaNtx"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white/45 hover:bg-white/5"
          >
            View GitHub
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-5 border-t border-white/10 pt-8 text-sm text-slate-400 sm:grid-cols-3">
          <span>Mexico City</span>
          <span>English: technical intermediate</span>
          <span>Open to professional opportunities</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
