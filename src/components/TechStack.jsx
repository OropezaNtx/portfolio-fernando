import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const categories = [
  {
    id: "core",
    label: "Core stack",
    description: "The technologies I use most often to integrate data, automate processes and deliver analytical solutions.",
    tools: [
      ["Python", "/images/tools/python.png"],
      ["SQL", "/images/tools/sql.png"],
      ["BigQuery", "/images/tools/bigquery.png"],
      ["Power BI", "/images/tools/powerbi.png"],
      ["Excel", "/images/tools/excel.png"],
      ["Pandas", "/images/tools/pandas.png"],
      ["Jupyter", "/images/tools/jupyter.png"],
      ["Google Cloud", "/images/tools/gcp.png"],
    ],
  },
  {
    id: "data",
    label: "Data & BI",
    description: "Tools for data preparation, modeling, reporting, indicators and business-oriented analysis.",
    tools: [
      ["Power Query", "/images/tools/powerquery.png"],
      ["Power Pivot", "/images/tools/powerpivot.png"],
      ["Tableau", "/images/tools/tableau.png"],
      ["Access", "/images/tools/access.png"],
      ["MySQL", "/images/tools/mysql.png"],
      ["PostgreSQL", "/images/tools/postgresql.png"],
      ["SQLite", "/images/tools/sqlite.png"],
      ["R", "/images/tools/r.png"],
      ["VBA", "/images/tools/vba.png"],
      ["Data Modeling", "/images/tools/datamodeling.png"],
    ],
  },
  {
    id: "development",
    label: "Development",
    description: "Technologies used to build web, desktop, mobile, API and data-processing solutions.",
    tools: [
      ["React", "/images/tools/react.png"],
      ["JavaScript", "/images/tools/javascript.png"],
      ["Node.js", "/images/tools/nodejs.png"],
      ["FastAPI", "/images/tools/fastapi.png"],
      ["SQLAlchemy", "/images/tools/sqlalchemy.png"],
      ["Kotlin", "/images/tools/kotlin.png"],
      ["Android", "/images/tools/android.png"],
      ["Firebase", "/images/tools/firebase.png"],
      ["Tkinter", "/images/tools/tkinter.png"],
      ["PyInstaller", "/images/tools/pyinstaller.png"],
      ["Git", "/images/tools/git.png"],
      ["GitHub", "/images/tools/github.png"],
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Enterprise",
    description: "Platforms for collaboration, deployment, business workflows and enterprise operations.",
    tools: [
      ["SharePoint", "/images/tools/sharepoint.png"],
      ["Power Automate", "/images/tools/powerautomate.png"],
      ["Dataverse", "/images/tools/dataverse.png"],
      ["OneDrive", "/images/tools/onedrive.png"],
      ["Microsoft 365", "/images/tools/microsoft365.png"],
      ["Docker", "/images/tools/docker.png"],
      ["Swagger", "/images/tools/swagger.png"],
      ["pgAdmin", "/images/tools/pgadmin.png"],
      ["SAP", "/images/tools/sap.png"],
      ["Huawei DevCloud", "/images/tools/huawei.png"],
    ],
  },
  {
    id: "geo",
    label: "Geospatial",
    description: "Software and formats used in mobility studies, route validation, mapping and territorial analysis.",
    tools: [
      ["QGIS", "/images/tools/qgis.png"],
      ["Google Earth", "/images/tools/googleearth.png"],
      ["AutoCAD", "/images/tools/autocad.png"],
      ["GPX", "/images/tools/gpx.png"],
      ["GDB", "/images/tools/gdb.png"],
      ["KMZ", "/images/tools/kmz.png"],
      ["GPS Data", "/images/tools/gps.png"],
      ["Territorial Data", "/images/tools/map.png"],
    ],
  },
  {
    id: "automation",
    label: "Automation & Quality",
    description: "Tools and techniques for validation, extraction, testing, traceability and controlled workflows.",
    tools: [
      ["OCR", "/images/tools/ocr.png"],
      ["PaddleOCR", "/images/tools/paddleocr.png"],
      ["Playwright", "/images/tools/playwright.png"],
      ["spaCy", "/images/tools/spacy.png"],
      ["Text Similarity", "/images/tools/nlp.png"],
      ["QR Workflows", "/images/tools/qr.png"],
      ["Data Validation", "/images/tools/validation.png"],
      ["Traceability", "/images/tools/traceability.png"],
    ],
  },
]

function ToolIcon({ name, logo }) {
  const initials = name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)

  return (
    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80">
      <span className="absolute text-[9px] font-bold text-slate-500">{initials}</span>
      <img
        src={logo}
        alt=""
        className="relative z-10 h-5 w-5 object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none"
        }}
      />
    </div>
  )
}

function TechStack() {
  const [activeId, setActiveId] = useState("core")
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0]

  return (
    <section id="tech-stack" className="relative overflow-hidden border-y border-white/10 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.07),_transparent_52%)]" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-4">Technology stack</p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Tools that <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">power the solution.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            A broad technical toolkit built through corporate projects, independent products and continuous learning.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                className={`relative rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-cyan-300/50 text-white"
                    : "border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="technology-active-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-300/10 shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                  />
                )}
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/45 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <div className="mb-7 grid gap-4 border-b border-white/10 pb-6 md:grid-cols-[0.34fr_0.66fr] md:items-end">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {String(categories.findIndex((category) => category.id === activeCategory.id) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">{activeCategory.label}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-slate-400">{activeCategory.description}</p>
              </div>

              <motion.div layout className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {activeCategory.tools.map(([name, logo], index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: index * 0.025 }}
                    whileHover={{ y: -3 }}
                    className="group flex min-h-14 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 transition hover:border-cyan-300/25 hover:bg-white/[0.05]"
                  >
                    <ToolIcon name={name} logo={logo} />
                    <span className="text-xs font-medium text-slate-300 transition group-hover:text-white sm:text-sm">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Huawei DevCloud certification · Enterprise, cloud and development foundations</p>
          <p className="text-slate-600">Always learning. Always building. Always solving.</p>
        </div>
      </div>
    </section>
  )
}

export default TechStack
