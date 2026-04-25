function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_35%)]"></div>
      <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-cyan-400 mb-4 tracking-widest uppercase text-sm">
          Data · Automation · Software
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          I build data and automation solutions for real business operations.
        </h1>

        <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
          Ingeniero en Sistemas con experiencia en American Express, Merck y proyectos de movilidad.
          Especializado en desarrollo de herramientas, automatización de procesos y construcción de
          pipelines de datos en entornos locales y cloud.
        </p>


        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/20"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            download
            className="border border-slate-700 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Download CV
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-4">
          Experience in American Express · Merck · Mobility projects
        </p>
      </div>
    </section>
  )
}

export default Hero