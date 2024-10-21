import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TelaCadastro.css";

export default function TelaCadastro() {
    const [inputNomeCompleto, setInputNomeCompleto] = useState("");
    const [inputNomeUsuario, setInputNomeUsuario] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputSenha, setInputSenha] = useState("");
    const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([]);

    function verificarUsuarioExistente() {
        for (let i = 0; i < vetorObjetosUsuarios.length; i++) {
            if (inputEmail === vetorObjetosUsuarios[i].email || inputNomeUsuario === vetorObjetosUsuarios[i].usuario) {
                return true;
            }
        }
        return false;
    }

    function verificarInputsRegistrados() {
        return !inputNomeCompleto || !inputNomeUsuario || !inputEmail || !inputSenha;
    }

    function verificarCadastro() {
        if (verificarInputsRegistrados()) {
            alert(`Verifique se todos os dados estão cadastrados`);
        } else if (verificarUsuarioExistente()) {
            alert('Não foi possível criar sua conta, usuário já existente');
        } else {
            let novoUsuario = {
                nome: inputNomeCompleto,
                usuario: inputNomeUsuario,
                email: inputEmail,
                senha: inputSenha
            };
            setVetorObjetosUsuarios([...vetorObjetosUsuarios, novoUsuario]);
            alert('Usuário registrado com sucesso =)');

            setInputNomeCompleto("");
            setInputNomeUsuario("");
            setInputEmail("");
            setInputSenha("");
        }
    }

    useEffect(() => {
        console.log(vetorObjetosUsuarios);
    }, [vetorObjetosUsuarios]);

    return (


        <div className="container-tela-cadastro">




            <div className="livro-cadastro-container-esquerda">
                <div className="livro-cadastro-primeiraLayer-esquerda">
                    <div className="livro-cadastro-conteudoLayerEsquerda">
                        
                        
                        <label htmlFor="label-titulo" className="label-titulos">CADASTRO</label>
                        <label htmlFor="label-nome" className="label-inputs">Nome</label>
                        <input type="text" 
                            id="label-nome" 
                            className="inputs-cadastro" 
                            placeholder="digite seu nome completo"
                            onChange={(event) => setInputNomeCompleto(event.target.value)} 
                            value={inputNomeCompleto} />
                        
                        <label htmlFor="label-usuario" className="label-inputs">Usuario</label>
                        <input type="text" 
                            id="label-usuario" 
                            className="inputs-cadastro" 
                            placeholder="digite seu nome de usuario"
                            onChange={(event) => setInputNomeUsuario(event.target.value)} 
                            value={inputNomeUsuario} />
                        
                        <label htmlFor="label-email" className="label-inputs">Email</label>
                        <input type="email" 
                            id="label-email" 
                            className="inputs-cadastro" 
                            placeholder="digite seu endereco de email"
                            onChange={(event) => setInputEmail(event.target.value)} 
                            value={inputEmail} />
                        
                        <label htmlFor="label-senha" className="label-inputs">Senha</label>
                        <input type="password" 
                            id="label-senha" 
                            className="inputs-cadastro" 
                            placeholder="digite uma senha"
                            onChange={(event) => setInputSenha(event.target.value)} 
                            value={inputSenha} />
                        
                    </div>
                </div>
            </div>


            <div className="livro-cadastro-container-direita">

                <div className="livro-cadastro-primeiraLayerDireita">
                    <div className="livro-cadastro-conteudoLayerDireita">
                        
                        <img className="imagem-parte-cadastro" src="public\images\Hand holding pen-amico.png" alt=""/>
                        <button className="botao-cadastro" onClick={verificarCadastro}>Cadastrar</button>
                        <Link className="label-possuir-conta" to='/telalogin'>Ja possui uma conta?</Link>
                        
                    </div>


                </div>
            </div>
        </div>
    );
}
