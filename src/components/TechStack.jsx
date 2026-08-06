import { motion } from "framer-motion"

const rows = [
  {
    label: "Data & Analytics",
    description: "Integration, modeling, reporting and business analysis.",
    direction: "left",
    duration: 112,
    accent: "cyan",
    tools: [["Python", "/images/tools/python.png"], ["SQL", "/images/tools/sql.png"], ["BigQuery", "/images/tools/bigquery.png"], ["Power BI", "/images/tools/powerbi.png"], ["Excel", "/images/tools/excel.png"], ["Pandas", "/images/tools/pandas.png"], ["Jupyter", "/images/tools/jupyter.png"], ["Power Query", "/images/tools/powerquery.png"], ["Power Pivot", "/images/tools/powerpivot.png"], ["Tableau", "/images/tools/tableau.png"], ["Access", "/images/tools/access.png"], ["MySQL", "/images/tools/mysql.png"], ["PostgreSQL", "/images/tools/postgresql.png"], ["SQLite", "/images/tools/sqlite.png"], ["R", "/images/tools/r.png"], ["VBA", "/images/tools/vba.png"]],
  },
  {
    label: "Web, Desktop & Mobile Development",
    description: "Platforms and development tools used to deliver web, desktop, Android, API and data-processing solutions.",
    direction: "right",
    duration: 126,
    accent: "blue",
    tools: [["React", "/images/tools/react.png"], ["JavaScript", "/images/tools/javascript.png"], ["Node.js", "/images/tools/nodejs.png"], ["FastAPI", "/images/tools/fastapi.png"], ["SQLAlchemy", "/images/tools/sqlalchemy.png"], ["Kotlin", "/images/tools/kotlin.png"], ["Android", "/images/tools/android.png"], ["Firebase", "/images/tools/firebase.png"], ["Tkinter", "/images/tools/tkinter.png"], ["PyInstaller", "/images/tools/pyinstaller.png"], ["Git", "/images/tools/git.png"], ["GitHub", "/images/tools/github.png"], ["Docker", "/images/tools/docker.png"], ["Swagger", "/images/tools/swagger.png"]],
  },
  {
    label: "Cloud & Enterprise",
    description: "Cloud platforms, collaboration, enterprise workflows and business systems.",
    direction: "left",
    duration: 118,
    accent: "violet",
    tools: [["Google Cloud", "/images/tools/gcp.png"], ["SharePoint", "/images/tools/sharepoint.png"], ["Power Automate", "/images/tools/powerautomate.png"], ["Dataverse", "/images/tools/dataverse.png"], ["OneDrive", "/images/tools/onedrive.png"], ["Microsoft 365", "/images/tools/microsoft365.png"], ["SAP", "/images/tools/sap.png"], ["Huawei DevCloud", "/images/tools/huawei.png"], ["pgAdmin", "/images/tools/pgadmin.png"]],
  },
  {
    label: "Geospatial & Mobility",
    description: "Mapping, territorial data, route validation and mobility studies.",
    direction: "right",
    duration: 132,
    accent: "emerald",
    tools: [["QGIS", "/images/tools/qgis.png"], ["Google Earth", "/images/tools/googleearth.png"], ["AutoCAD", "/images/tools/autocad.png"], ["GPX", "/images/tools/gpx.png"], ["GDB", "/images/tools/gdb.png"], ["KMZ", "/images/tools/kmz.png"], ["GPS Data", "/images/tools/gps.png"], ["Territorial Data", "/images/tools/map.png"]],
  },
  {
    label: "Automation & Quality",
    description: "Validation, extraction, testing, traceability and controlled workflows.",
    direction: "left",
    duration: 124,
    accent: "rose",
    tools: [["OCR", "/images/tools/ocr.png"], ["PaddleOCR", "/images/tools/paddleocr.png"], ["Playwright", "/images/tools/playwright.png"], ["spaCy", "/images/tools/spacy.png"], ["Text Similarity", "/images/tools/nlp.png"], ["QR Workflows", "/images/tools/qr.png"], ["Data Validation", "/images/tools/validation.png"], ["Traceability", "/images/tools/traceability.png"]],
  },
]

const accentStyles = {
  cyan: { number: "border-cyan-300/30 bg-cyan-300/[0.04] text-cyan-200", dot: "bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.55)]", line: "from-cyan-300/55", hover: "hover:border-cyan-300/25" },
  blue: { number: "border-blue-400/30 bg-blue-400/[0.04] text-blue-200", dot: "bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.55)]", line: "from-blue-400/55", hover: "hover:border-blue-400/25" },
  violet: { number: "border-violet-400/30 bg-violet-400/[0.04] text-violet-200", dot: "bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.55)]", line: "from-violet-400/55", hover: "hover:border-violet-400/25" },
  emerald: { number: "border-emerald-400/30 bg-emerald-400/[0.04] text-emerald-200", dot: "bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.55)]", line: "from-emerald-400/55", hover: "hover:border-emerald-400/25" },
  rose: { number: "border-rose-400/30 bg-rose-400/[0.04] text-rose-200", dot: "bg-rose-400 shadow-[0_0_14px_rgba(251,113,133,0.5)]", line: "from-rose-400/55", hover: "hover:border-rose-400/25" },
}

function ToolIcon({ name, logo }) {
  const initials = name.split(/\s+/).map((word) => word[0]).join("").slice(0, 2)
  return (
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80">
      <span className="absolute text-[8px] font-bold text-slate-500">{initials}</span>
      <img src={logo} alt="" className="relative z-10 h-5 w-5 object-contain" onError={(event) => { event.currentTarget.style.display = "none" }} />
    </span>
  )
}

function SkillRow({ row, index }) {
  const repeatedTools = [...row.tools, ...row.tools]
  const from = row.direction === "left" ? "0%" : "-50%"
  const to = row.direction === "left" ? "-50%" : "0%"
  const accent = accentStyles[row.accent]

  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.04 }} viewport={{ once: true, amount: 0.12 }} className="border-t border-white/10 py-10 first:border-t-0 first:pt-0 lg:py-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${accent.number}`}>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <div className="flex items-center gap-3"><span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} /><h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{row.label}</h3></div>
            <p className="mt-2 text-sm leading-6 text-slate-500">{row.description}</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden py-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />
        <motion.div animate={{ x: [from, to] }} transition={{ duration: row.duration, repeat: Infinity, ease: "linear" }} className="flex w-max gap-2.5 px-2">
          {repeatedTools.map(([name, logo], toolIndex) => (
            <motion.div key={`${name}-${toolIndex}`} whileHover={{ y: -2, scale: 1.015 }} transition={{ duration: 0.2 }} className={`flex h-13 min-w-max items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 backdrop-blur-sm transition ${accent.hover} hover:bg-white/[0.05]`}>
              <ToolIcon name={name} logo={logo} /><span className="whitespace-nowrap text-sm font-medium text-slate-300">{name}</span>
            </motion.div>
          ))}
        </motion.div>
        <div className={`mt-4 h-px bg-gradient-to-r ${accent.line} via-white/5 to-transparent opacity-45`} />
      </div>
    </motion.article>
  )
}

function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden border-y border-white/10 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.055),_transparent_58%)]" />
      <div className="section-shell relative">
        <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
          <p className="eyebrow mb-4">Technology ecosystem</p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">Platforms and technologies behind the solutions.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">Platforms come first: data, web, desktop, Android, cloud, business intelligence and geospatial work. Languages, services and libraries support each implementation.</p>
        </div>
        <div>{rows.map((row, index) => <SkillRow key={row.label} row={row} index={index} />)}</div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Huawei DevCloud certification · Enterprise, cloud and development foundations</p>
          <p className="text-slate-600">Always learning. Always building. Always solving.</p>
        </div>
      </div>
    </section>
  )
}

export default TechStack
