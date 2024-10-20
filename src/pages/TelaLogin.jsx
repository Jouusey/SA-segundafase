import React, { useState } from 'react'
import "./TelaLogin.css"
import { Link } from "react-router-dom"
useState

function TelaLogin() {
    //! IMPORTANTE -- FAZER O GLOBALCONTEXT PARA OS VETORES
    
    const [inputNomeUsuario, setInputNomeUsuario] = useState()
    const [inputSenha, setInputSenha] = useState()
    const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])



    function verificarLogin(){


    

    }


  return (<div className="container-tela-login">
    <div className="livro-login-container-esquerda">
        <div className="livro-login-primeiraLayer-esquerda">
            <div className="livro-login-conteudoLayerEsquerda">
                <label htmlFor="label-titulo" className="label-titulos">LOGIN</label>
                <label htmlFor="label-usuario" className="label-inputs">Usuario</label>
                <input 
                    type="text" 
                    id="label-usuario" 
                    className="inputs-login" 
                    placeholder="digite seu nome de usuário"
                    onChange={(event) => setInputNomeUsuario(event.target.value)} 
                    value={inputNomeUsuario} />
                <label htmlFor="label-senha" className="label-inputs">Senha</label>
                <input 
                    type="password" 
                    id="label-senha" 
                    className="inputs-login" 
                    placeholder="digite uma senha"
                    onChange={(event) => setInputSenha(event.target.value)} 
                    value={inputSenha} />
            </div>
        </div>
    </div>

    <div className="livro-login-container-direita">
        <div className="livro-login-primeiraLayerDireita">
            <div className="livro-login-conteudoLayerDireita">
                <img className="imagem-parte-login" src="./images/imagem-grafico.png" alt="" />
                <button className="botao-login" onClick={verificarLogin}>Entrar</button>
                <Link className="label-nao-tem-conta" to="/telacadastro">Nao tem uma conta?</Link>
            </div>
        </div>
    </div>
</div>

  )
}

export default TelaLogin
