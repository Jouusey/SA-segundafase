import { useState } from "react"
import "./TelaCadastro.css"
useState

export default function TelaCadastro() {

    const [inputNomeCompleto, setInputNomeCompleto] = useState()
    const [inputNomeUsuario, setInputNomeUsuario] = useState()
    const [inputEmail, setInputEmail] = useState()
    const [inputSenha, setInputSenha] = useState()

  return (
    <div className="container-tela-cadastro">
 
        <div className="livro-cadastro-container">


            <div className="livro-cadastro-primeiraLayer">


                <div className="livro-cadastro-segundaLayer">


                    <div className="livro-cadastro-terceiraLayer">



                            <div className="livro-cadastro-ConteudoLayer">



                                <div className="livro-cadastro-conteudoLayerEsquerda">
                                


                                    <label htmlFor="label-nome" 
                                    className="label-inputs">Nome</label>

                                    <input type="text" 
                                    id="label-nome" 
                                    className="inputs-cadastro" 
                                    placeholder="digite seu nome completo"
                                    onChange={(event) => setInputNomeCompleto(event.target.value)}/>

                                    <label htmlFor="label-usuario" 
                                    className="label-inputs">Usuario</label>

                                    <input type="text" 
                                    id="label-usuario" 
                                    className="inputs-cadastro" 
                                    placeholder="digite seu nome de usuario"
                                    onChange={(event) => setInputNomeUsuario(event.target.value)}/>

                                    <label htmlFor="label-email" 
                                    className="label-inputs">Email</label>

                                    <input type="email" 
                                    id="label-email" 
                                    className="inputs-cadastro" 
                                    placeholder="digite seu endereco de email"/>
                                        
                                    <label htmlFor="label-senha" 
                                    className="label-inputs">Senha</label>

                                    <input type="password" 
                                    id="label-senha" 
                                    className="inputs-cadastro" 
                                    placeholder="digite uma senha"/>

                                </div>

                                <div className="livro-cadastro-conteudoLayerDireita">



                                {/* <img className="imagem-parte-cadastro" src="./images/imagem-grafico.png" alt="" /> */}

                                <button className="botao-cadastro">Cadastrar</button>

                                <p className="label-possuir-conta">Ja possui uma conta?</p>
                                



                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
