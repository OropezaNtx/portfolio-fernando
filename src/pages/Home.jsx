import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"
import Starfield from "../components/Starfield"
import Hero from "../components/Hero"
import Metrics from "../components/Metrics"
import WhatIBuild from "../components/WhatIBuild"
import About from "../components/About"
import Process from "../components/Process"
import Skills from "../components/Skills"
import TechStack from "../components/TechStack"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Helmet>
        <title>Fernando Oropeza | Data, Automation & Software Solutions</title>
        <meta
          name="description"
          content="Systems Engineer who transforms real business processes into desktop, web, Android, data, business intelligence and cloud solutions."
        />
      </Helmet>

      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Metrics />
        <WhatIBuild />
        <About />
        <Process />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
