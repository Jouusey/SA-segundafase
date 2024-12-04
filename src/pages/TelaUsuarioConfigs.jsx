import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./TelaUsuarioConfigs.css"
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import IconUserCircle from "../components/IconUserCircle"
import ResenhasConfigs from "../components/ResenhasConfigs"
import NavbarVertical from "../components/NavbarVertical"

function TelaUsuarioConfigs() {

  const {posicaoUsuario, setPosicaoUsuario, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado}=useContext(GlobalContext)
  const [editarNome, setEditarNome]=useState()
  const [editarEmail, setEditarEmail]=useState()
  const [editarSenha, setEditarSenha]=useState()
  const navigate = useNavigate()

  useEffect (() => {

    if(usuarioLogado == false){

      alert('Não há usuário logado, por favor, cadastre-se ou entre na sua conta.')
      navigate('/landingpage')
    }

  }, [])

  function deslogarUsuario(){

    alert('Até mais!')
    setUsuarioLogado(false)
    navigate('/landingpage')

  }

  function verificarInputsRegistrados(){
    
    if (editarNome == `` && editarEmail == `` && editarSenha == ``){
      
      return true
      
    }else{
      // alert(`oi`)
      return false
    }
  }

  function verificarInputsIguais(){

    if (editarNome == vetorObjetosUsuarios[posicaoUsuario].nome || editarEmail == vetorObjetosUsuarios[posicaoUsuario].email || editarSenha == vetorObjetosUsuarios[posicaoUsuario].senha){
      return true
    }else{
      return false
    }
  }

  function verificarEmailExistente(){

    for(let i = 0; i < vetorObjetosUsuarios.length; i++){

      if (editarEmail == vetorObjetosUsuarios[i].email && posicaoUsuario != i){
        return true
      }

    }

    return false

  }

  function editarDados(){

    switch (true) {
      case verificarInputsRegistrados():
        alert(`Verifique se ao menos um campo esteja preenchido`)
        break

      case verificarInputsIguais():
        alert('Algum dado é idêntico ao que já existe')
        break
      
      case verificarEmailExistente():
        alert('Não foi possivel alterar os dados: email já existente')
        break

      default: 
        alert('Dados alterados!')
        let usuariosAtualizado = { 
          ...vetorObjetosUsuarios[posicaoUsuario], 
          nome: editarNome || vetorObjetosUsuarios[posicaoUsuario].nome, 
          email: editarEmail || vetorObjetosUsuarios[posicaoUsuario].email, 
          senha: editarSenha || vetorObjetosUsuarios[posicaoUsuario].senha 
        }

        const novosUsuarios = [...vetorObjetosUsuarios]

        novosUsuarios[posicaoUsuario] = usuariosAtualizado
        
        setVetorObjetosUsuarios(novosUsuarios)
        setEditarNome('')
        setEditarEmail('')
        setEditarSenha('')
    }

  }

  function deletarUsuario(){

    let promptApagarConta = prompt('ATENÇÃO! Insira a sua senha na caixa abaixo se você realmente deseja deletar sua conta\n *Essa ação será irreversível, e todas as suas resenhas serão deletadas juntas*')

    if(promptApagarConta == vetorObjetosUsuarios[posicaoUsuario].senha){

      let usuariosAtualizado = [...vetorObjetosUsuarios]
      usuariosAtualizado.splice(posicaoUsuario, 1)
      setVetorObjetosUsuarios(usuariosAtualizado)

      alert(`Conta deletada com sucesso.`)
      setUsuarioLogado(false) //hi
      navigate(`/landingpage`)


    }else{

      alert(`Senha incorreta, cancelando operação...`)

    }

  }




  return (
    <div className="usuarioConfigs-container">

      <div className="usuarioConfigs-div-esquerda">



      </div>

      <div className="usuarioConfigs-body">
        
        
        

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

                <input type="text" 
                className="input"
                value={editarNome} 
                onChange={(event) => setEditarNome(event.target.value)}
                placeholder="Edite seu nome completo" />
                <input type="text" 
                className="input"
                value={editarEmail} 
                onChange={(event) => setEditarEmail(event.target.value)}
                placeholder="Edite seu email" />
                <input type="text" 
                className="input"
                value={editarSenha} 
                onChange={(event) => setEditarSenha(event.target.value)}
                placeholder="Edite sua senha" />
              </div>

              {/* <div className="usuarioConfigs-bmpc-inputs">

              </div> */}

              <div className="usuarioConfigs-bmpc-buttons">

                <button className="btn" onClick={editarDados}>Editar dados</button>
                <button className="btn" onClick={deslogarUsuario} >Deslogar</button>
                <button className="btn btn-delete" onClick={deletarUsuario}>Apagar conta</button>
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
     
      <NavbarVertical />
      </div>
      
    </div>
  )
}

export default TelaUsuarioConfigs