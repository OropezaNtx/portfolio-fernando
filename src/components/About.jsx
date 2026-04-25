function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-cyan-400 mb-3">About me</p>
          <h2 className="text-4xl font-bold mb-6">
            I build practical technology for real business problems.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-4">
            Soy un perfil técnico enfocado en datos, automatización y desarrollo de software.
            He trabajado construyendo herramientas para captura de información, validación de datos,
            dashboards, procesos ETL y soluciones internas para equipos operativos.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Mi enfoque está en convertir procesos manuales en sistemas más claros, medibles y eficientes,
            utilizando tecnologías como Python, SQL, BigQuery, Power BI, Excel avanzado y desarrollo web.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-cyan-400 font-semibold mb-2">Data & Analytics</h3>
            <p className="text-slate-300 text-sm">
              SQL, BigQuery, Power BI, Excel avanzado, limpieza y análisis de datos.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-cyan-400 font-semibold mb-2">Automation</h3>
            <p className="text-slate-300 text-sm">
              Automatización de procesos con Python, VBA, Apps Script y herramientas internas.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-cyan-400 font-semibold mb-2">Software Development</h3>
            <p className="text-slate-300 text-sm">
              Desarrollo de aplicaciones de escritorio, web y móviles para resolver necesidades reales.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About