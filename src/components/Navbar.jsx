import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
       
        <Link to="/telacadastro">Cadastro</Link>
        <Link to="/telalogin">Login</Link>
        <Link to="/telaescrivaninha">Escrivaninha</Link>
        <Link to="/telausuarioconfigs">UsuárioConfig</Link>
        <Link to="/telaprincipal">Home</Link>
        <Link to="/landingpage">Landing page</Link>
        <Link to="/telalivro">Tela Livro</Link>
    </nav>
  )
}

export default Navbar
