import { useState } from "react"
import "./LivroParteUm.css"
import LivroParteDois from "./LivroParteDois"
import { Navigate, useNavigate } from "react-router-dom"

function LivroParteUm() {

    const navigate = useNavigate()

    // este serve para chamar o componente da parte dois do livro que contém todas as resenhas do referido livro...
    const [resenhas, setResenhas] = useState(false) 

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

                    <button className="botao-menu" onClick={() => navigate("/telaprincipal")}><img src="./images/home.svg" alt="" className="icone-botao"/></button>

                </div>

            </div>

            <div className="parte-baixo">

                <button className="botao-resenha">Resenhas  |  02</button>
                <button className="botao-icone" onClick={ () => setResenhas(!resenhas)}><img src="./images/down.svg" alt="" className="icone-down"/></button>

            </div>

            <div className="container-parte-resenhas">

                {resenhas && <LivroParteDois nomeUsuario={"Jaime"} resenhaDoLivro={'Olá'}/>}

            </div>

        </div>

    </div>
  )
}

export default LivroParteUm
