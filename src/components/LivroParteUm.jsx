import { useState } from "react"
import "./LivroParteUm.css"
import LivroParteDois from "./LivroParteDois"

function LivroParteUm() {
    const [resenhas, setResenhas] = useState(false) // este serve para chamar o componente da parte dois do livro que contém todas as resenhas do referido livro...

    const [resenhaNova, setResenhaNova] = useState(false) //este useState é para controlar a caixa de digitar a resenha do livro...

    function home(){
        // quando este botão for clicado, tem que direcionar o usuário a página inicial...
        alert("Home")
    }

    function salvarResenha(){  
        // preciso de um comando aqui que adicione automaticamente a resenha digitada na lista de resenhas do livro e, atualizar a quantidade de resenhas...
        setResenhaNova(false)
    }

  return (
    <div>

        <div className="container-tela">

            <div className="parte-cima">

                <div className="parte-capa-livro">

                    <div className="capa-livro">
                        <img src="./images/capa-livro.png" alt="" className="imagem-capa-livro"/>
                    </div>

                    <div className="parte-classificacao">

                        <img src="./images/star.svg" alt="" className="icone-estrela"/>
                        <img src="./images/star.svg" alt="" className="icone-estrela"/>
                        <img src="./images/star.svg" alt="" className="icone-estrela"/>
                        <img src="./images/star.svg" alt="" className="icone-estrela"/>
                        <img src="./images/star.svg" alt="" className="icone-estrela"/>

                    </div>

                </div>

                <div className="parte-textos">

                    <div className="textos">

                        <div className="titulo-livro">
                            <h3>Título do livro</h3>
                        </div>

                        <div className="descricao-livro">
                            <h4>#isbn</h4>
                        </div>

                        <div className="descricao-livro">
                            <h4>#autor</h4>
                        </div>

                        <div className="descricao-livro">                       
                            <h4>#editora</h4>
                        </div>

                        <div className="descricao-livro">
                            <h4>#ano</h4>
                        </div>

                        <div className="sinopse-livro">

                            <h3>RESUMO:</h3>
                            <label htmlFor="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium! Hic nihil deleniti totam asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium! Hic nihil deleniti totam asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium!</label>

                        </div>

                        <div className="genero-livro">

                            <div className="box-genero">#genero1</div>
                            <div className="box-genero">#genero2</div>
                            <div className="box-genero">#genero3</div>

                        </div>

                    </div>

                </div>

                <div className="parte-menus">

                    <button className="botao-menu" onClick={home}><img src="./images/home.svg" alt="" className="icone-botao"/></button>
                    
                    <button className="botao-menu" onClick={() => setResenhaNova(true)}><img src="./images/pen.svg" alt="" className="icone-botao"/></button>

                </div>

            </div>

            <div className="parte-baixo">

                <button className="botao-resenha">Resenhas  |  02</button>
                <button className="botao-icone" onClick={ () => setResenhas(!resenhas)}><img src="./images/down.svg" alt="" className="icone-down"/></button>

            </div>

            <div className="container-parte-resenhas">

                {resenhas && <LivroParteDois/>}

            </div>

        </div>

            <dialog open={resenhaNova}>

                <div className="div-textarea">

                    <textarea name="" id="resenha-nova" cols="30" rows="10" className="escrever-resenha" placeholder="Escreva nesse espaço a sua resenha...">
                    </textarea>

                    <button className="botao-cadastrar-resenha" onClick={salvarResenha}>Salvar Resenha</button>

                </div>


            </dialog>
            
    </div>
  )
}

export default LivroParteUm
