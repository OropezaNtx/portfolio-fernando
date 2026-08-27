import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import ProjectImageSlider from "./ProjectImageSlider"

const ownedProductIds = ["afora", "politycs", "mobilytics"]

const brandConfig = {
  afora: {
    logo: "/images/brands/afora-mark.svg",
    mark: "A",
    eyebrow: "Field operations platform",
    accent: "from-orange-400/25 via-rose-400/10 to-transparent",
    border: "hover:border-orange-300/35",
    text: "text-orange-200",
  },
  politycs: {
    logo: "/images/brands/politycs.png",
    mark: "P",
    eyebrow: "Territorial intelligence",
    accent: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
    border: "hover:border-violet-300/35",
    text: "text-violet-200",
  },
  mobilytics: {
    logo: "/images/brands/mobilytics.png",
    mark: "M",
    eyebrow: "Data & automation solutions",
    accent: "from-cyan-400/25 via-blue-400/10 to-transparent",
    border: "hover:border-cyan-300/35",
    text: "text-cyan-200",
  },
}

function getProjectImages(project) {
  return (project.images || project.gallery || [project.image]).filter(Boolean).slice(0, 3)
}

function BrandLogo({ project }) {
  const brand = brandConfig[project.id]
  const isAfora = project.id === "afora"

  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-slate-950/75 shadow-[0_15px_45px_rgba(0,0,0,0.24)] ${isAfora ? "h-[5.5rem] w-[5.5rem] rounded-[1.7rem]" : "h-16 w-16 rounded-2xl"}`}>
      <span className={`absolute text-xl font-black ${brand.text}`}>{brand.mark}</span>
      <img
        src={brand.logo}
        alt={`${project.title} logo`}
        className={`relative z-10 object-contain ${isAfora ? "h-[4.35rem] w-[4.35rem]" : "h-11 w-11"}`}
        onError={(event) => {
          event.currentTarget.style.display = "none"
        }}
      />
    </div>
  )
}

function StatusBadge({ project }) {
  if (!project.status) return null
  const isLive = project.status.toLowerCase().includes("live")

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${
      isLive
        ? "border-emerald-300/25 bg-emerald-300/[0.06] text-emerald-200"
        : "border-white/10 bg-white/[0.035] text-slate-400"
    }`}>
      <span className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.75)]" : "bg-slate-500"}`} />
      {project.status}
    </span>
  )
}

function MiniTransitScreen() {
  return (
    <div className="afora-phone">
      <div className="afora-phone-notch" />
      <div className="afora-phone-screen">
        <div className="afora-phone-topline">
          <span>ATRÁS</span>
          <strong>RUTA 2 · BUENA VISTA</strong>
          <span>MAPA</span>
        </div>
        <div className="afora-capture-card">
          <div className="afora-capture-head">
            <span className="afora-live-dot" />
            <div>
              <strong>CAPTURA ACTIVA</strong>
              <small>00:06</small>
            </div>
            <b>×</b>
          </div>
          <div className="afora-stats">
            <div><strong>4</strong><span>SUBEN</span></div>
            <div className="down"><strong>2</strong><span>BAJAN</span></div>
            <div><strong>12</strong><span>A BORDO</span></div>
          </div>
          <div className="afora-total-row"><span>HOMBRES 8</span><span>MUJERES 4</span></div>
          <div className="afora-gender-block">
            <div className="afora-block-title"><strong>↑ SUBEN</strong><span>TOTAL: 4</span></div>
            <div className="afora-gender-grid">
              <div><small>HOMBRES</small><strong>2</strong><span><i>−</i><i>+</i></span></div>
              <div><small>MUJERES</small><strong>2</strong><span><i>−</i><i>+</i></span></div>
            </div>
          </div>
          <div className="afora-gender-block down-block">
            <div className="afora-block-title"><strong>↓ BAJAN</strong><span>TOTAL: 2</span></div>
            <div className="afora-gender-grid">
              <div><small>HOMBRES</small><strong>1</strong><span><i>−</i><i>+</i></span></div>
              <div><small>MUJERES</small><strong>1</strong><span><i>−</i><i>+</i></span></div>
            </div>
          </div>
          <div className="afora-delay-title">DEMORAS</div>
          <div className="afora-delay-grid">{["S", "C", "TM", "CND", "VI", "VD", "PP", "O"].map((item, index) => <span key={item} className={index < 4 ? "active" : ""}>{item}</span>)}</div>
          <div className="afora-notes"><span>NOTAS</span><i /></div>
        </div>
      </div>
    </div>
  )
}

const capabilityNodes = [
  { label: "GPS en tiempo real", detail: "Seguimiento y ubicación precisa", icon: "⌖", side: "left", pos: "top" },
  { label: "Rutas y paradas", detail: "Recorridos, dirección y contexto", icon: "●", side: "left", pos: "upper" },
  { label: "Transporte y movilidad", detail: "Operación de flotas y campo", icon: "▣", side: "left", pos: "lower" },
  { label: "Persistencia local", detail: "Datos disponibles sin conexión", icon: "◫", side: "left", pos: "bottom" },
  { label: "Conectividad", detail: "Sincronización y recuperación", icon: "⌁", side: "right", pos: "top" },
  { label: "Movilidad inteligente", detail: "Visibilidad integral de operación", icon: "▰", side: "right", pos: "upper" },
  { label: "Inteligencia operativa", detail: "Métricas, alertas y control", icon: "▥", side: "right", pos: "lower" },
  { label: "Eventos + contexto", detail: "Evidencia y situaciones de campo", icon: "⌇", side: "right", pos: "bottom" },
]

function AforaOperationsVisual() {
  return (
    <div className="afora-ops-visual" aria-label="AFORA field operations capabilities">
      <div className="afora-orbit orbit-one" />
      <div className="afora-orbit orbit-two" />
      <div className="afora-orbit orbit-three" />
      <div className="afora-map-grid" />
      <svg className="afora-route-lines" viewBox="0 0 760 620" preserveAspectRatio="none" aria-hidden="true">
        <path d="M38 302 C132 242 216 268 300 220 C390 166 455 180 530 125 C608 70 680 100 732 58" />
        <path d="M48 456 C150 420 220 448 314 392 C412 334 498 362 572 314 C646 268 690 246 732 218" />
        <path d="M110 118 C210 168 248 210 336 282 C430 360 526 392 696 430" />
      </svg>
      <div className="afora-moving-point point-one" />
      <div className="afora-moving-point point-two" />
      <div className="afora-moving-point point-three" />
      <MiniTransitScreen />
      {capabilityNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={`afora-capability-node ${node.side} ${node.pos}`}
          initial={{ opacity: 0, x: node.side === "left" ? -18 : 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08 * index }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="afora-node-icon">{node.icon}</span>
          <div><strong>{node.label}</strong><small>{node.detail}</small></div>
        </motion.div>
      ))}
      <div className="afora-explore-hint"><span>↕</span> Interactúa para explorar</div>
    </div>
  )
}

function Projects() {
  const featuredProjects = projects.slice(0, 3)
  const ownedProducts = ownedProductIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)
  const flagshipProduct = ownedProducts.find((project) => project.id === "afora")
  const supportingProducts = ownedProducts.filter((project) => project.id !== "afora")
  const additionalProjects = projects.filter(
    (project, index) => index >= 3 && !ownedProductIds.includes(project.id),
  )

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28 text-white lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/20 to-slate-950/60" />
      <div className="absolute left-[-15%] top-[18%] h-[520px] w-[520px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="mb-20 max-w-4xl lg:mb-24">
          <p className="eyebrow mb-5">Products I&apos;ve built</p>
          <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Independent products shaped by real operational problems.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            I use the same engineering approach from my professional work to design products of my own—from field operations and territorial intelligence to practical data and automation solutions.
          </p>
        </div>

        {flagshipProduct && (
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden rounded-[3rem] border border-orange-300/15 bg-slate-950/55 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/14 via-rose-400/[0.04] to-transparent" />
            <div className="relative grid gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-center lg:gap-12">
              <AforaOperationsVisual />

              <div className="px-1 py-3 sm:px-3 lg:py-8">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge project={flagshipProduct} />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">Own product</span>
                </div>
                <div className="mt-7 flex items-center gap-5">
                  <BrandLogo project={flagshipProduct} />
                  <div>
                    <h3 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">{flagshipProduct.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">{flagshipProduct.platform}</p>
                  </div>
                </div>
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                  AFORA connects field capture, GPS tracking, routes, validation, evidence and supervision in one platform, giving teams a continuous flow from work in the field to operational control, mobility intelligence and analysis.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {flagshipProduct.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">{tech}</span>
                  ))}
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">Maps</span>
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/project/${flagshipProduct.id}`}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-orange-100"
                  >
                    Explore case study
                  </Link>
                  {flagshipProduct.website && (
                    <a
                      href={flagshipProduct.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-orange-200/25 px-6 py-3 font-semibold text-orange-100 transition hover:border-orange-100/60 hover:bg-orange-300/[0.05]"
                    >
                      Visit AFORA ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {supportingProducts.map((project, index) => {
            const brand = brandConfig[project.id]
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/45 p-7 backdrop-blur-xl transition duration-300 ${brand.border}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <BrandLogo project={project} />
                    <StatusBadge project={project} />
                  </div>
                  <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.18em] ${brand.text}`}>{brand.eyebrow}</p>
                  <h4 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.title}</h4>
                  <p className="mt-5 min-h-24 text-sm leading-7 text-slate-400">{project.impact}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-500">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <Link to={`/project/${project.id}`} className={`inline-flex items-center gap-2 text-sm font-semibold ${brand.text}`}>
                      Explore product <span>→</span>
                    </Link>
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-300 hover:text-white">
                        Visit website ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-28 border-t border-white/10 pt-16 lg:mt-36 lg:pt-20">
          <div className="mb-20 max-w-4xl lg:mb-28">
            <p className="eyebrow mb-5">Professional work</p>
            <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Systems built inside real business operations.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              These case studies show how I translate commercial, quality and field-data processes into practical software, automation and analytical systems.
            </p>
          </div>

          <div className="space-y-28 lg:space-y-40">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.15 }}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative">
                  <div className="absolute inset-10 rounded-[4rem] bg-cyan-400/12 blur-3xl" />
                  <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] p-3 shadow-[0_35px_110px_rgba(0,0,0,0.35)] backdrop-blur-lg">
                    <ProjectImageSlider title={project.title} images={getProjectImages(project)} className="aspect-[5/4] rounded-[2.35rem] border-0" />
                    <Link to={`/project/${project.id}`} aria-label={`Explore ${project.title}`} className="absolute inset-3 z-10 rounded-[2.35rem] focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                  </div>
                </div>

                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{project.platform}</p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">{project.title}</h3>
                  <p className="mt-5 text-sm uppercase tracking-[0.15em] text-slate-500">For {project.audience}</p>
                  <p className="mt-7 text-lg leading-8 text-slate-300">{project.impact}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">{tech}</span>
                    ))}
                  </div>
                  <Link to={`/project/${project.id}`} className="mt-10 inline-flex items-center gap-3 border-b border-cyan-200/40 pb-1 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100">
                    Explore solution <span>↗</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {additionalProjects.length > 0 && (
          <div className="mt-24 border-t border-white/10 pt-14">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow mb-4">Additional case studies</p>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">More systems, quality and field-data solutions</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">Corporate case studies are presented without confidential information.</p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {additionalProjects.map((project) => (
                <Link key={project.id} to={`/project/${project.id}`} className="group grid gap-4 py-8 transition hover:pl-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{project.platform}</p>
                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-slate-100 transition group-hover:text-cyan-100">{project.title}</h4>
                  </div>
                  <span className="text-2xl text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-200">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
