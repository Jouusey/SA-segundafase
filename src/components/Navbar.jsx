import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
       
        <Link to="/telacadastro">Cadastro</Link>
        <Link to="/telalogin">Login</Link>
    </nav>
  )
}

export default Navbar
