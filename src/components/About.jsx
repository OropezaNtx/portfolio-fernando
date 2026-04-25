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
          Soy Ingeniero en Sistemas Computacionales con experiencia en desarrollo de soluciones
          basadas en datos, automatización de procesos y construcción de herramientas tecnológicas.
          </p>

          <p className="text-slate-300 leading-relaxed">
          He trabajado en sectores financiero, farmacéutico y de movilidad, desarrollando pipelines
          de datos, sistemas internos y herramientas que optimizan la calidad de la información
          y reducen procesos manuales.
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