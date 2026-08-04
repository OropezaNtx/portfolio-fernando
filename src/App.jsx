import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import NotFound from "./pages/NotFound"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
