import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe o fue movida.</p>

      <Link to="/">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFound