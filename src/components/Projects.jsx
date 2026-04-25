const projects = [
  {
    title: "Coverage GAP Form",
    tech: "Python · Tkinter · SQLite · Excel · PyInstaller",
    problem:
      "Manual data capture processes generated errors, inconsistencies and duplicated operational work.",
    solution:
      "Built a desktop platform with validation logic, dynamic forms, import/export tools, audit control and local database management.",
    impact:
      "Improved data quality, reduced manual errors and helped commercial teams manage records in a more structured way.",
  },
  {
    title: "BigQuery Analytics",
    tech: "SQL · BigQuery · Power BI · Data Modeling",
    problem:
      "Commercial information was spread across multiple sources with limited visibility for analysis and decision-making.",
    solution:
      "Developed SQL pipelines, unified datasets and analytical queries for Coverage GAP, segmentation, sales metrics and business tracking.",
    impact:
      "Enabled cleaner reporting, stronger business insights and better data consolidation for executive analysis.",
  },
  {
    title: "POS System",
    tech: "Python · Tkinter · SQLite · Inventory Logic",
    problem:
      "Small businesses often manage sales, inventory and cash control manually, increasing operational risk.",
    solution:
      "Developed a point-of-sale system with product management, sales records, users, tickets, stock control and operational flows.",
    impact:
      "Digitized core sales operations and improved control over inventory, transactions and daily business activity.",
  },
  {
    title: "Android Field App",
    tech: "Kotlin · Jetpack Compose · Room · GPS · Firebase",
    problem:
      "Field data collection for transport and market studies can be inconsistent, manual and hard to validate.",
    solution:
      "Designed a mobile app for structured field capture, GPS-based records, offline operation and study-specific modules.",
    impact:
      "Standardized field data collection and created a foundation for real-time reporting and operational monitoring.",
  },
  {
    title: "QR Traceability System",
    tech: "Python · Access · SQL · Power BI · Excel",
    problem:
      "Production file tracking relied on manual processes and paper-based workflows, making traceability slower and less reliable.",
    solution:
      "Built a QR code generator connected to an Access database with SQL queries, enabling faster identification and tracking of production batches.",
    impact:
      "Improved traceability, reduced manual lookup time and supported digital control of quality documentation.",
  },
  {
    title: "GPS & Mobility Data Tools",
    tech: "Python · GPX · GDB · KMZ · QGIS · Google Earth · Excel",
    problem:
      "Mobility studies required cleaning, segmenting and validating GPS routes manually across different geospatial formats.",
    solution:
      "Developed tools to process GPX/GDB/KMZ files, analyze waypoints, detect signal loss, segment routes and generate structured Excel outputs.",
    impact:
      "Accelerated GPS data analysis for transport studies and improved the quality of deliverables for mobility projects.",
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Projects</p>
          <h2 className="text-4xl font-bold">
            Real solutions I&apos;ve built
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of data, automation and software projects focused on
            solving real operational problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 font-bold mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {project.tech}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Problem: </span>
                  {project.problem}
                </p>

                <p className="text-slate-400 leading-relaxed">
                  <span className="text-cyan-400 font-medium">Solution: </span>
                  {project.solution}
                </p>

                <p className="text-slate-300 font-medium leading-relaxed">
                  <span className="text-cyan-400 font-medium">Impact: </span>
                  {project.impact}
                </p>
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                <a
                  href="#contact"
                  className="text-cyan-400 hover:underline"
                >
                  Discuss project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects