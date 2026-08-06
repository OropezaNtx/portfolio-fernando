import { motion } from "framer-motion"

const principles = [
  {
    number: "01",
    title: "Understand first",
    description: "Technology should begin with the real operation, its users, constraints and expected result.",
  },
  {
    number: "02",
    title: "Build for users",
    description: "A solution is valuable when people can understand it, trust it and use it in their daily work.",
  },
  {
    number: "03",
    title: "Keep it maintainable",
    description: "Clear logic, controlled rules and documentation make systems easier to improve over time.",
  },
  {
    number: "04",
    title: "Connect information",
    description: "Data becomes more useful when sources, platforms and operational decisions communicate with each other.",
  },
  {
    number: "05",
    title: "Automate responsibly",
    description: "Automation should reduce repetitive work and increase quality without hiding important decisions.",
  },
]

function EngineeringPrinciples() {
  return (
    <section id="principles" className="relative overflow-hidden border-y border-white/10 bg-slate-950/45 py-28 text-white backdrop-blur-sm lg:py-36">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/8 blur-3xl" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
        >
          <div>
            <p className="eyebrow mb-5">Engineering principles</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              The ideas behind every solution.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
            Tools change from one project to another. These principles remain consistent across data, desktop, web, Android, cloud and business-intelligence work.
          </p>
        </motion.div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group grid gap-5 py-8 sm:grid-cols-[70px_0.42fr_0.58fr] sm:items-start"
            >
              <span className="text-sm text-violet-300">{item.number}</span>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] transition group-hover:text-cyan-200">
                {item.title}
              </h3>
              <p className="max-w-2xl leading-7 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngineeringPrinciples
