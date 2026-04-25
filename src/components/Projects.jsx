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
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">
              Coverage GAP Form
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Python · Tkinter · SQLite · Excel
            </p>

            <p className="text-slate-300 mb-4">
              Sistema de captura, validación y exportación de datos utilizado por ejecutivos.
              Incluye lógica de negocio, auditoría y control de registros.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">
              BigQuery Analytics
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              SQL · BigQuery · Power BI
            </p>

            <p className="text-slate-300 mb-4">
              Desarrollo de consultas complejas para segmentación, métricas de negocio
              y análisis de Coverage GAP.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">
              POS System
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Python · SQLite · Tkinter
            </p>

            <p className="text-slate-300 mb-4">
              Sistema de ventas con inventario, usuarios, tickets y control de stock.
            </p>

            <button className="text-cyan-400 hover:underline">
              View details →
            </button>
          </div>

          {/* Proyecto 4 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">
              Android Field App
            </h3>

            <p className="text-slate-400 text-sm mb-4">
              Kotlin · Jetpack Compose · Firebase
            </p>

            <p className="text-slate-300 mb-4">
              Aplicación móvil para captura de datos en campo con geolocalización y operación offline.
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