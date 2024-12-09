import "./LivroParteDois.css"
import { useContext, useState } from "react"
import { GlobalContext } from '../contexts/GlobalContext'

function LivroParteDois() {

    const {biblioteca, livroAcessado} = useContext(GlobalContext)
    
  return (
    <div className="container-mae-resenhas">

        <div className="container-resenhas">

            <div className="container-resenha-usuarios">

                <div className="box-resenha">

                    <div className="parte-foto-nome">

                        <div className="foto-perfil">

                            <img src="./images/perfil.png" alt="" className="imagem-perfil"/>

                        </div>

                        <h3>{biblioteca[0].resenhasLivro[0].nomeUsuario}</h3>

                    </div>

                    <div className="parte-resenha">

                        <label htmlFor="" className="texto-resenha">{biblioteca[0].resenhasLivro[0].resenhaUsuario}</label>

                    </div>

                    <div className="parte-curtida">

                        <button className="botao-curtida"><img src="./images/like.svg" alt="" className="icone-curtida"/></button>
                        <label htmlFor="" className="label-curtidas">X CURTIDAS</label>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default LivroParteDois
