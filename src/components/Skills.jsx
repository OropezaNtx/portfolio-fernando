function Skills() {
  const skills = [
    "SQL",
    "BigQuery",
    "Power BI",
    "Excel Advanced",
    "Python",
    "Automation",
    "React",
    "JavaScript",
    "Firebase",
    "Android",
    "Kotlin",
    "Node.js"
  ]

  return (
    <section id="skills" className="bg-slate-900 text-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Skills</p>
          <h2 className="text-4xl font-bold">
            Technologies I work with
          </h2>
        </div>

        {/* Carrusel */}
        <div className="relative w-full overflow-hidden">
          
          <div className="flex gap-6 animate-scroll whitespace-nowrap">

            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 px-6 py-4 rounded-xl text-sm text-slate-300 hover:text-white transition"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills