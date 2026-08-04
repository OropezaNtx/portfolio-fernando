import { motion } from "framer-motion"

const rows = [
  {
    label: "Data & Analytics",
    description: "Integration, modeling, reporting and business analysis.",
    direction: "left",
    duration: 34,
    tools: [
      ["Python", "/images/tools/python.png"],
      ["SQL", "/images/tools/sql.png"],
      ["BigQuery", "/images/tools/bigquery.png"],
      ["Power BI", "/images/tools/powerbi.png"],
      ["Excel", "/images/tools/excel.png"],
      ["Pandas", "/images/tools/pandas.png"],
      ["Jupyter", "/images/tools/jupyter.png"],
      ["Power Query", "/images/tools/powerquery.png"],
      ["Power Pivot", "/images/tools/powerpivot.png"],
      ["Tableau", "/images/tools/tableau.png"],
      ["Access", "/images/tools/access.png"],
      ["MySQL", "/images/tools/mysql.png"],
      ["PostgreSQL", "/images/tools/postgresql.png"],
      ["SQLite", "/images/tools/sqlite.png"],
      ["R", "/images/tools/r.png"],
      ["VBA", "/images/tools/vba.png"],
    ],
  },
  {
    label: "Software Development",
    description: "Web, desktop, mobile, API and data-processing solutions.",
    direction: "right",
    duration: 38,
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
      ["Docker", "/images/tools/docker.png"],
      ["Swagger", "/images/tools/swagger.png"],
    ],
  },
  {
    label: "Cloud & Enterprise",
    description: "Cloud platforms, collaboration and enterprise workflows.",
    direction: "left",
    duration: 36,
    tools: [
      ["Google Cloud", "/images/tools/gcp.png"],
      ["SharePoint", "/images/tools/sharepoint.png"],
      ["Power Automate", "/images/tools/powerautomate.png"],
      ["Dataverse", "/images/tools/dataverse.png"],
      ["OneDrive", "/images/tools/onedrive.png"],
      ["Microsoft 365", "/images/tools/microsoft365.png"],
      ["SAP", "/images/tools/sap.png"],
      ["Huawei DevCloud", "/images/tools/huawei.png"],
      ["pgAdmin", "/images/tools/pgadmin.png"],
    ],
  },
  {
    label: "Geospatial & Mobility",
    description: "Mapping, territorial data, routes and mobility studies.",
    direction: "right",
    duration: 33,
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
    label: "Automation & Quality",
    description: "Validation, extraction, testing, traceability and controlled workflows.",
    direction: "left",
    duration: 35,
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
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80">
      <span className="absolute text-[9px] font-bold text-slate-500">{initials}</span>
      <img
        src={logo}
        alt=""
        className="relative z-10 h-5 w-5 object-contain"
        onError={(event) => {
          event.currentTarget.style.display = "none"
        }}
      />
    </span>
  )
}

function SkillRow({ row, index }) {
  const repeatedTools = [...row.tools, ...row.tools]
  const from = row.direction === "left" ? "0%" : "-50%"
  const to = row.direction === "left" ? "-50%" : "0%"

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-5 border-t border-white/10 py-7 lg:grid-cols-[260px_1fr] lg:items-center"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.04] text-xs font-semibold text-cyan-200">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.025em] text-white">{row.label}</h3>
          <p className="mt-1 max-w-[230px] text-xs leading-5 text-slate-500">{row.description}</p>
        </div>
      </div>

      <div className="group overflow-hidden rounded-[1.45rem] border border-white/[0.08] bg-slate-950/45 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
        <motion.div
          animate={{ x: [from, to] }}
          transition={{ duration: row.duration, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-2.5 px-2 group-hover:[animation-play-state:paused]"
          whileHover={{ scale: 1.002 }}
        >
          {repeatedTools.map(([name, logo], toolIndex) => (
            <motion.div
              key={`${name}-${toolIndex}`}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex h-14 min-w-max items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 transition hover:border-cyan-300/25 hover:bg-white/[0.05]"
            >
              <ToolIcon name={name} logo={logo} />
              <span className="whitespace-nowrap text-sm font-medium text-slate-300">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.article>
  )
}

function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden border-y border-white/10 py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.06),_transparent_55%)]" />

      <div className="section-shell relative">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="eyebrow mb-4">Technology stack</p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Tools that <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">power the solution.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Technologies and platforms used across data, automation, cloud, geospatial work and software development.
          </p>
        </div>

        <div className="border-b border-white/10">
          {rows.map((row, index) => (
            <SkillRow key={row.label} row={row} index={index} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Huawei DevCloud certification · Enterprise, cloud and development foundations</p>
          <p className="text-slate-600">Always learning. Always building. Always solving.</p>
        </div>
      </div>
    </section>
  )
}

export default TechStack
