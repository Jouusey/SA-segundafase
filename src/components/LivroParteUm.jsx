import { useContext, useState } from "react"
import "./LivroParteUm.css"
import LivroParteDois from "./LivroParteDois"
import EstrelasBtn from "./EstrelasBtn"
import NavbarVertical from "./NavbarVertical"
import { GlobalContext } from "../contexts/GlobalContext"

function LivroParteUm(props) {

    const {biblioteca} = useContext(GlobalContext)

    // Estado para armazenar a lista de resenhas
    const [resenhasLivro, setResenhasLivro] = useState([])

    // Estado para armazenar o valor do textarea
    const [texto, setTexto] = useState("")

    const salvarResenha = () => {

        // let nome = prompt("Digite seu nome: ")
        // Adiciona o valor atual do textarea na lista e reseta o textarea
        setResenhasLivro([...resenhasLivro, texto]);
        alert("Resenha salva com sucesso!")
        setTexto(""); // Limpa o textarea

        console.log({resenhasLivro})
        setResenhaNova(false)  
      };

    const [resenhas, setResenhas] = useState(false) // este serve para chamar o componente da parte dois do livro que contém todas as resenhas do referido livro...

    const [resenhaNova, setResenhaNova] = useState(false) //este useState é para controlar a caixa de digitar a resenha do livro...


    function home(){
        // quando este botão for clicado, tem que direcionar o usuário a página inicial...
        alert("Home")
    }

  return (
    <div>

        <div className="container-tela">

            <div className="parte-cima">

                <div className="parte-capa-livro">

                    <div className="capa-livro">
                        <img src="./images/capa-livro.png" alt="" className="imagem-capa-livro"/>
                        {/* {props.capa} */}
                    </div>

                    <div className="parte-classificacao">

<div className="estrelas-btn-livro">

<EstrelasBtn />

</div>

                  

                    </div>

                </div>

                <div className="parte-textos">

                    <div className="textos">

                        <div className="titulo-livro">
                            <h6 className="h3-tituloLivro">Título: {props.titulo}</h6>
                        </div>

                        <div className="descricao-livro">
                            <h6 className="h4-descricaoLivro">ISBN: {props.isbn}</h6>
                        </div>

                        <div className="descricao-livro">
                            <h6>Autor/a: {props.autor}</h6>   <h6>Editora: {props.editora}</h6>
                        </div>

                        <div className="descricao-livro"> 
                            <h6>Ano: {props.ano}</h6>
                        </div>

                        <div className="sinopse-livro">


                            <label className="lbl-sinopseLivro" htmlFor="">{props.sinopse}</label>

                        </div>

                        <div className="genero-livro">

                            <div className="box-genero">#genero1</div>
                            <div className="box-genero">#genero2</div>
                            <div className="box-genero">#genero3</div>

                        </div>

                    </div>

                </div>

                <div className="parte-menus">

                    <NavbarVertical />                  

                </div>

            </div>

            <div className="parte-baixo">

                <button className="botao-resenha">Resenhas  |  {resenhasLivro.length}</button>



                <button className="botao-icone" onClick={ () => setResenhas(!resenhas)}><img src="./images/down.svg" alt="" className="icone-down"/></button>


            </div>

            <div className="container-parte-resenhas">

                {resenhas && <LivroParteDois nomeUsuario={"Jaime"} resenhaDoLivro={resenhasLivro[0]}/>}

            </div>

        </div>

            <dialog open={resenhaNova}>

                <div className="div-textarea">

                    <textarea maxLength={800} name="" id="resenha-nova" cols="30" rows="10" className="escrever-resenha" placeholder="Escreva nesse espaço a sua resenha..."
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
                    >
                    </textarea>

                    <button className="botao-cadastrar-resenha" onClick={salvarResenha}>Salvar Resenha</button>

                </div>

            </dialog>
            
    </div>
  )
}

export default LivroParteUm
