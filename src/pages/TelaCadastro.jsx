import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./TelaCadastro.css"
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'


export default function TelaCadastro() {
    const [inputNomeCompleto, setInputNomeCompleto] = useState()
    const [inputNomeUsuario, setInputNomeUsuario] = useState()
    const [inputEmail, setInputEmail] = useState()
    const [inputSenha, setInputSenha] = useState()
    const navigate = useNavigate()
    const {vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado} = useContext(GlobalContext)

    function verificarUsuarioExistente() {
        for (let i = 0; i < vetorObjetosUsuarios.length; i++) {

            if (inputEmail == vetorObjetosUsuarios[i].email || inputNomeUsuario == vetorObjetosUsuarios[i].usuario) {
                return true
            }
        }
        return false
    }

    function verificarInputsRegistrados() {
        
        if (inputNomeCompleto == null || inputNomeUsuario == null || inputEmail == null || inputSenha == null){

            return true

        }

        return false
        
    }

    function verificarCadastro() {


        if (verificarInputsRegistrados()) {

            alert(`Verifique se todos os campos estão preenchidos.`)

        } else if (verificarUsuarioExistente()) {

            alert('Não foi possível criar sua conta, usuário já existente')

        } else {

            let novoUsuario = {
                nome: inputNomeCompleto,
                usuario: inputNomeUsuario,
                email: inputEmail,
                senha: inputSenha
            }
            setVetorObjetosUsuarios([...vetorObjetosUsuarios, novoUsuario])

            setUsuarioLogado(true)
            alert('Usuário registrado com sucesso =)')
            navigate("/telalogin")
        }
    }

     //a cada mudança dentro do vetorObjetosUsuarios, acontecera um console.log
    useEffect(() => {
        console.log(vetorObjetosUsuarios)
    }, [vetorObjetosUsuarios])

    useEffect(() => {
        
        if(usuarioLogado){

            // alert('Um usuário já está logado nesse computador.')
           

        }

    }, [])

    return (


        <div className="container-tela-cadastro">




            <div className="livro-cadastro-container-esquerda">
                <div className="livro-cadastro-primeiraLayer-esquerda">
                    <div className="livro-cadastro-conteudoLayerEsquerda">
                        
                        {/* Cassiano: todos os inputs e labels */}
                        <label htmlFor="label-titulo" className="label-titulos">Cadastro</label>
                        <label htmlFor="label-nome" className="label-inputs">Nome</label>
                        <input type="text" 
                            id="label-nome" 
                            className="inputs-cadastro" 
                            placeholder="Digite seu nome completo"
                            onChange={(event) => setInputNomeCompleto(event.target.value)} 
                            value={inputNomeCompleto} />
                        
                        <label htmlFor="label-usuario" className="label-inputs">Usuário</label>
                        <input type="text" 
                            id="label-usuario" 
                            className="inputs-cadastro" 
                            placeholder="Digite seu nome de usuário"
                            onChange={(event) => setInputNomeUsuario(event.target.value)} 
                            value={inputNomeUsuario} />
                        
                        <label htmlFor="label-email" className="label-inputs">Email</label>
                        <input type="email" 
                            id="label-email" 
                            className="inputs-cadastro" 
                            placeholder="Digite seu endereço de email"
                            onChange={(event) => setInputEmail(event.target.value)} 
                            value={inputEmail} />
                        
                        <label htmlFor="label-senha" className="label-inputs">Senha</label>
                        <input type="password" 
                            id="label-senha" 
                            className="inputs-cadastro" 
                            placeholder="Digite uma senha"
                            onChange={(event) => setInputSenha(event.target.value)} 
                            value={inputSenha} />
                        
                    </div>
                </div>
            </div>


            <div className="livro-cadastro-container-direita">

                <div className="livro-cadastro-primeiraLayerDireita">
                    <div className="livro-cadastro-conteudoLayerDireita">
                        
                        <img className="imagem-parte-cadastro" src="public\images\Creative writing-pana (1).png" alt=""/>
                        <button className="botao-cadastro" onClick={verificarCadastro}>Cadastrar</button>

                        
                        {/* Cassiano: uso de router para transicionar para a tela de login */}
                        <Link className="label-possuir-conta" to='/telalogin'>Já possui uma conta?</Link>
                        
                    </div>


                </div>
            </div>
        </div>
    );
}
