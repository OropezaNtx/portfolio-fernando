import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import TechStack from "../components/TechStack"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Helmet>
        <title>Fernando Oropeza | Data & Automation Developer</title>
        <meta
          name="description"
          content="Data, automation and software developer focused on building real business solutions with Python, SQL, BigQuery, Power BI, React and cloud tools."
        />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default Home