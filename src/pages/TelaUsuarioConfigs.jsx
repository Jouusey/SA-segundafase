import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./TelaUsuarioConfigs.css"
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import IconUserCircle from "../components/IconUserCircle"
import ResenhasConfigs from "../components/ResenhasConfigs"
import Navbar from "../components/Navbar"

function TelaUsuarioConfigs() {

  const {posicaoUsuario, setPosicaoUsuario, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado}=useContext(GlobalContext)




  return (
    <div className="usuarioConfigs-container">

      <div className="usuarioConfigs-div-esquerda">



      </div>

      <div className="usuarioConfigs-body">
        
        <Navbar/>
        

        <div className="usuarioConfigs-body-cima">

        </div>

        <div className="usuarioConfigs-body-meio">

          <div className="usuarioConfigs-body-meio-papel">

            <div className="usuarioConfigs-body-meio-papel-conta">

              <div className="usuarioConfigs-bmpc-titulo">

                <label className="lbl-titulos">Configurações de usuário</label>
                <IconUserCircle/>
                <label className="lbl-nome-usuario" >{vetorObjetosUsuarios[posicaoUsuario].nome}</label>

              </div>

              <div className="usuarioConfigs-bmpc-infos">

              <label className="lbl-infos" >{vetorObjetosUsuarios[posicaoUsuario].usuario}</label>
              <label className="lbl-infos" >{vetorObjetosUsuarios[posicaoUsuario].email}</label>
              <label className="lbl-infos" >{vetorObjetosUsuarios[posicaoUsuario].senha}</label>

                <input type="text" className="input" placeholder="Edite seu nome completo" />
                <input type="text" className="input" placeholder="Edite seu email" />
                <input type="text" className="input" placeholder="Edite sua senha" />
              </div>

              {/* <div className="usuarioConfigs-bmpc-inputs">

              </div> */}

              <div className="usuarioConfigs-bmpc-buttons">

                <button className="btn">Editar dados</button>
                <button className="btn" >Deslogar</button>
                <button className="btn btn-delete">Apagar conta</button>
              </div>

            </div>

            <div className="usuarioConfigs-body-meio-papel-resenhas">

              <div className="usuarioConfigs-bmpr-titulo">

                <label className="lbl-titulos">Minha resenhas</label>
                {/* <label className="lbl-titulos">Minhas resenhas</label> */}

              </div>

              <div className="usuarioConfigs-bmpr-body">
                
              <ResenhasConfigs/><ResenhasConfigs/><ResenhasConfigs/><ResenhasConfigs/>
              </div>

              

            </div>

          </div>

        </div>

        <div className="usuarioConfigs-body-baixo">

        </div>

      </div>

      <div className="usuarioConfigs-navbar-container">

    

      </div>
      
    </div>
  )
}

export default TelaUsuarioConfigs