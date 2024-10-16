import { useState } from "react"
import "./TelaCadastro.css"
import { useEffect } from "react"

// useState



export default function TelaCadastro() {
    

    const [inputNomeCompleto, setInputNomeCompleto] = useState()
    const [inputNomeUsuario, setInputNomeUsuario] = useState()
    const [inputEmail, setInputEmail] = useState()
    const [inputSenha, setInputSenha] = useState()
    const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])
    const [usuarioExistente, setUsuarioExistente] = useState(false)

    function usuarioExistente(){
        
                for (let i = 0; i < vetorObjetosUsuarios.length; i++) {
        
                    if (inputEmail == vetorObjetosUsuarios[i].email){
                        return true
                        // setUsuarioExistente(true)
                    }
        
                }

        return false
    }
    
    function VerificarCadastro(){

        if(usuarioExistente()){

            alert('Não foi possível criar sua conta, usuário já existente')

        }else{

            let novoUsuario = {
    
                nome: inputNomeCompleto,
                usuario: inputNomeUsuario,
                email: inputEmail,
                senha: inputSenha
        
            }

            setVetorObjetosUsuarios([...vetorObjetosUsuarios, novoUsuario])

        }

    }

    useEffect(() => {
        console.log(vetorObjetosUsuarios);
    }, [vetorObjetosUsuarios])

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

                                    {inputNomeCompleto}
                                    <p></p>
                                    {inputNomeUsuario}
                                    <p></p>
                                    {inputEmail}
                                    <p></p>
                                    {inputSenha}



                                </div>

                                <div className="livro-cadastro-conteudoLayerDireita">



                                {/* <img className="imagem-parte-cadastro" src="./images/imagem-grafico.png" alt="" /> */}

                                <button className="botao-cadastro"
                                onClick={VerificarCadastro}>Cadastrar</button>

                                <p className="label-possuir-conta">Já possui uma conta?</p>
                                



                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}