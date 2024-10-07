import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado, bairro, setBairro} = useContext(GlobalContext)
    





    function mudarEndereco(){
      /* 
      bairro = prompt("Onde você mora?") */
      setBairro(prompt("OLÁ ONDE MORAS??"))
    }


  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>
      <p>Bairro: {bairro}</p>

      <button onClick={mudarEndereco} >MUDAR ENDEREÇO</button>

    </div>
  )
}

export default Home
