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


  return (
    //? dei ctrl+f e troquei todos os "cadastro" para "login", praticamente a mesma coisa, no css tambem ta assim
    <div className="container-tela-login">
 
        <div className="livro-login-container">


            <div className="livro-login-primeiraLayer">


                <div className="livro-login-segundaLayer">


                    <div className="livro-login-terceiraLayer">



                            <div className="livro-login-ConteudoLayer">



                                <div className="livro-login-conteudoLayerEsquerda">

                                    <label htmlFor="label-usuario" 
                                    className="label-inputs">Usuário</label>

                                    <input type="text" 
                                    id="label-usuario" 
                                    className="inputs-login" 
                                    placeholder="digite seu nome de usuário"
                                    onChange={(event) => setInputNomeUsuario(event.target.value)}/>

                                    <label htmlFor="label-senha" 
                                    className="label-inputs">Senha</label>

                                    <input type="password" 
                                    id="label-senha" 
                                    className="inputs-login" 
                                    placeholder="digite uma senha"
                                    onChange={(event) => setInputSenha(event.target.value)}/>
                                
                                    <button className="botao-login"
                                    onClick={verificarLogin}>Entrar</button>
                                    <Link to="/telacadastro">Não tem uma conta?</Link>

                                </div>

                                <div className="livro-login-conteudoLayerDireita">


                                {/* <img className="imagem-parte-login" src="./images/imagem-grafico.png" alt="" /> */}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TelaLogin
