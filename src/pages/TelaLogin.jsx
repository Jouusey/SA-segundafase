import React, { useState } from 'react'
import "./TelaLogin.css"
import { Link } from "react-router-dom"
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
useState

function TelaLogin() {
    //! IMPORTANTE -- FAZER O GLOBALCONTEXT PARA OS VETORES
    
    const [inputNomeUsuario, setInputNomeUsuario] = useState()
    const [inputSenha, setInputSenha] = useState()
    const {vetorObjetosUsuarios, usuarioLogado, setUsuarioLogado, posicaoUsuario, setPosicaoUsuario} = useContext(GlobalContext)

    const [verificacaoLogin, setVerificacaoLogin] = useState(false)
    const [mensagemLogin, setMensagemLogin] = useState('')

    function verificarInputsRegistrados() {
        
        if (inputNomeUsuario == null || inputSenha == null){

            return true

        }

        return false
    }

    function verificarCadastroInexistente(){

        // console.log('Antes de iniciar o for')
        for (let i = 0; i < vetorObjetosUsuarios.length; i++){

            // console.log('índice número '+ i)
            if(vetorObjetosUsuarios[i].usuario == inputNomeUsuario){

                setPosicaoUsuario(i)
                // console.log('oi eu passei aqui')
                return false
            }

        }
        return true
        
    }

    function verificarLoginIncorreto(){

        if (inputSenha == vetorObjetosUsuarios[posicaoUsuario].senha){

            return false
        }else{
            return true
        }

    }


    function verificarLogin(){

        switch (true){

            case verificarInputsRegistrados():
                // alert('Verifique se todos os campos estão preenchidos.')
                setVerificacaoLogin(true)
                setMensagemLogin("Verifique se todos os campos estão preenchidos")
                break;
            case verificarCadastroInexistente():
                // alert('Nome de usuário inexistente.')
                setVerificacaoLogin(true)
                setMensagemLogin("Nome de usuário inexistente")
                break;
            case verificarLoginIncorreto():
                // 'alert('Login Incorreto.')'
                setVerificacaoLogin(true)
                setMensagemLogin("Login Incorreto!")
                break;
            default:
                // alert('Login feito com sucesso!')
                setVerificacaoLogin(true)
                setMensagemLogin("Login feito com sucesso!")
                setUsuarioLogado(true)

        }

        // if (verificarInputsRegistrados()) {
            
        //     alert('Verifique se todos os campos estão preenchidos.')

        // }else if(verificarCadastroInexistente()){

        //     alert('Nome de usuário inexistente.')

        // }else{
        //     alert("boa")
        // }

    }

    function fecharCaixa(){

        setVerificacaoLogin(false)
    }
    
  return (<div className="container-tela-login">
    <div className="livro-login-container-esquerda">
        <div className="livro-login-primeiraLayer-esquerda">
            <div className="livro-login-conteudoLayerEsquerda">
                <label htmlFor="label-titulo" className="label-titulos">LOGIN</label>
                <label htmlFor="label-usuario" className="label-inputs">Usuário</label>
                <input 
                    type="text" 
                    id="label-usuario" 
                    className="inputs-login" 
                    placeholder="Digite seu nome de usuário"
                    onChange={(event) => setInputNomeUsuario(event.target.value)} 
                    value={inputNomeUsuario} />
                <label htmlFor="label-senha" className="label-inputs">Senha</label>
                <input 
                    type="password" 
                    id="label-senha" 
                    className="inputs-login" 
                    placeholder="Digite uma senha"
                    onChange={(event) => setInputSenha(event.target.value)} 
                    value={inputSenha} />
            </div>
        </div>
    </div>

    <div className="livro-login-container-direita">
        <div className="livro-login-primeiraLayerDireita">
            <div className="livro-login-conteudoLayerDireita">
                <img className="imagem-parte-login" src="public\images\Hand holding pen-amico.png" alt="" />
                <button className="botao-login" onClick={verificarLogin}>Entrar</button>
                <Link className="label-nao-tem-conta" to="/telacadastro">Não tem uma conta?</Link>
            </div>
        </div>
    </div>

    <dialog open={verificacaoLogin}> 

        <div className='mensagem-login'>

            {mensagemLogin}

            <button className='botao-caixa' onClick={fecharCaixa}>fechar caixa</button>

        </div>

    </dialog>

</div>

  )
}

export default TelaLogin
