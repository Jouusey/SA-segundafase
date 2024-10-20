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
 
        <div className="livro-cadastro-container-esquerda">

            <div className="livro-cadastro-primeiraLayer-esquerda">



                                <div className="livro-cadastro-conteudoLayerEsquerda">
                                

    
                            
                            {/* Cassiano: todos os inputs e labels */}
                            <label htmlFor="label-nome" 
                            className="label-inputs">Nome</label>

                            <input type="text" 
                            id="label-nome" 
                            className="inputs-cadastro" 
                            placeholder="digite seu nome completo"
                            onChange={(event) => setInputNomeCompleto(event.target.value)}/>

                            <label htmlFor="label-usuario" 
                            className="label-inputs">Usuário</label>

                            <input type="text" 
                            id="label-usuario" 
                            className="inputs-cadastro" 
                            placeholder="digite seu nome de usuário"
                            onChange={(event) => setInputNomeUsuario(event.target.value)}/>

                            <label htmlFor="label-email" 
                            className="label-inputs">Email</label>

                            <input type="email" 
                            id="label-email" 
                            className="inputs-cadastro" 
                            placeholder="digite seu endereço de email"
                            onChange={(event) => setInputEmail(event.target.value)}/>
                                
                            <label htmlFor="label-senha" 
                            className="label-inputs">Senha</label>

                            <input type="password" 
                            id="label-senha" 
                            className="inputs-cadastro" 
                            placeholder="digite uma senha"
                            onChange={(event) => setInputSenha(event.target.value)}/>

{/*                                     
                            {inputNomeCompleto}
                            <p></p>
                            {inputNomeUsuario}
                            <p></p>
                            {inputEmail}
                            <p></p>
                            {inputSenha} */}



                                </div>

                          
                    
                
            </div>
        </div>

        

        <div className="livro-cadastro-container-direita">


        <div className="livro-cadastro-primeiraLayerDireita">

                    <div className="livro-cadastro-conteudoLayerDireita">

            <img className="imagem-parte-cadastro" src="./images/imagem-grafico.png" alt="" /> 
/}

                        <button className="botao-cadastro"
                        onClick={verificarCadastro}>Cadastrar</button>
                        {/* Cassiano: uso de router para transicionar para a tela de login */}
                        <Link to= '/telalogin'>Já possui uma conta?</Link>
                        


                    </div>


</div>


            
        </div>
    </div>


  )
}
