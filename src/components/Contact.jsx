import { motion } from "framer-motion"

const links = [
  {
    label: "Send me an email",
    href: "mailto:foropeza0526@gmail.com",
    primary: true,
  },
  {
    label: "View LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "View GitHub",
    href: "https://github.com/OropezaNtx",
  },
]

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950/78 py-28 text-white backdrop-blur-[2px] md:py-40">
      <motion.div
        animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-950/25 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="section-shell relative text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.12em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.24em" }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase text-cyan-200"
        >
          Let&apos;s build something useful
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          viewport={{ once: true }}
          className="mx-auto mt-7 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
        >
          Ready for the next challenge in data, automation or software.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300"
        >
          I am interested in roles where I can understand real operational needs and transform them into clear, practical technology solutions.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
          className="mt-12 flex flex-col justify-center gap-3 sm:flex-row"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={
                link.primary
                  ? "inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-100"
                  : "inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white/45 hover:bg-white/5"
              }
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.92 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-3xl gap-5 border-t border-white/10 pt-8 text-sm text-slate-400 sm:grid-cols-3"
        >
          {["Mexico City", "English: technical intermediate", "Open to professional opportunities"].map((item, index) => (
            <motion.span
              key={item}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, delay: index * 0.7 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
