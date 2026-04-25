function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 mb-2">Projects</p>
          <h2 className="text-4xl font-bold">
            Real solutions I've built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Proyecto 1 */}
          <div className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              Coverage GAP Form
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Python · Tkinter · SQLite · Excel
            </p>

            <p className="text-slate-300 mb-4">
            Plataforma de captura y validación de datos comerciales utilizada por ejecutivos, con lógica de negocio, auditoría y 
            control de registros para mejorar la calidad de la información.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

          {/* Proyecto 2 */}
          <div className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              BigQuery Analytics
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              SQL · BigQuery · Power BI
            </p>

            <p className="text-slate-300 mb-4">
              Desarrollo de consultas avanzadas y pipelines de datos para segmentación, análisis de Coverage GAP y consolidación de información comercial en Google Cloud.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

          {/* Proyecto 3 */}
          <div className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              POS System
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Python · SQLite · Tkinter
            </p>

            <p className="text-slate-300 mb-4">
              Sistema de punto de venta con gestión de inventario, ventas, usuarios y control operativo, diseñado para digitalizar procesos comerciales.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

          {/* Proyecto 4 */}
          <div className="card-glow relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">
              Android Field App
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Kotlin · Jetpack Compose · Firebase
            </p>

            <p className="text-slate-300 mb-4">
              Aplicación móvil para captura de datos en campo con geolocalización, operación offline y generación de reportes para estudios de movilidad.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects