import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"
import Starfield from "../components/Starfield"
import Hero from "../components/Hero"
import Metrics from "../components/Metrics"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import TechStack from "../components/TechStack"
import Process from "../components/Process"
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
          content="Systems Engineer experienced in data integration, process automation, analytics and software development with Python, SQL, BigQuery, Power BI and cloud technologies."
        />
      </Helmet>

      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Metrics />
        <Projects />
        <Experience />
        <Skills />
        <TechStack />
        <About />
        <Process />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
