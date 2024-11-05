import { useState } from "react"
import "./LivroParteUm.css"
import LivroParteDois from "./LivroParteDois"

function LivroParteUm() {
    const [resenhas, setResenhas] = useState(false)

    function home(){
        alert("Home")
    }

    function configuracoes(){
        alert("Configurações")
    }

    function escrivania(){
        alert("Escrever Resenha")
    }
  return (
    <div>

        <div className="container-tela">

            <div className="parte-cima">

                <div className="parte-capa-livro">

                    <div className="capa-livro"></div>

                </div>

                <div className="parte-textos">

                    <div className="textos">

                        <div className="titulo-livro">

                            <h3>Título do livro</h3>

                        </div>

                        <div className="descricao-livro">

                            <h4>#autor</h4>
                            <h4>#editora</h4>
                            <h4>#ano</h4>
                            <h4>#volume</h4>

                        </div>

                        <div className="sinopse-livro">

                            <h3>RESUMO:</h3>
                            <label htmlFor="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium! Hic nihil deleniti totam asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium! Hic nihil deleniti totam asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium! Hic nihil deleniti totam asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nesciunt accusamus autem vel voluptates animi, libero ea, deserunt esse commodi fugiat maiores non quos accusantium! Hic nihil deleniti totam asperiores?Lorem ipsum dolor sit, amet consectetur adipisicing elit.</label>

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
                    <button className="botao-menu" onClick={configuracoes}><img src="./images/setting.svg" alt="" className="icone-botao"/></button>
                    <button className="botao-menu" onClick={escrivania}><img src="./images/pen.svg" alt="" className="icone-botao"/></button>

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
            
    </div>
  )
}

export default LivroParteUm
