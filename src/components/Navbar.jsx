import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
       
        <Link to="/telacadastro">Cadastro</Link>
        <Link to="/telalogin">Login</Link>
        <Link to="/telaescrivaninha">Escrivaninha</Link>
<<<<<<< HEAD
        <Link to="/telausuarioconfigs">UsuárioConfig</Link>
=======
        <Link to="/telaprincipal">Home</Link>
        <Link to="/LandingPage">Landing page</Link>
>>>>>>> 67fc62273e01f2bc20e77960a0a8dab890f5c166
    </nav>
  )
}

export default Navbar
