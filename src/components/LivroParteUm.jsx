import { useContext, useState } from "react"
import "./LivroParteUm.css"
import LivroParteDois from "./LivroParteDois"
import EstrelasBtn from "./EstrelasBtn"
import NavbarVertical from "./NavbarVertical"
import { GlobalContext } from "../contexts/GlobalContext"
import { useLocation, useNavigate } from "react-router-dom";

function LivroParteUm() {

    const {biblioteca} = useContext(GlobalContext);
    const location = useLocation();
    const navigate = useNavigate();

    // Verifica se o state tem o índice
    const index = location.state?.index;

    // Pega o livro pelo índice
    const livro = biblioteca[index]; 

    // chama o componente dois do livro
    const [resenhas, setResenhas] = useState(false) 

  return (
    <div>

        <div className="container-tela">

            <div className="parte-cima">

                <div className="parte-capa-livro">

                    <div className="capa-livro">
                        <img src={livro.capaLivro} alt="" className="imagem-capa-livro"/>
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
                            <h6 className="h3-tituloLivro">Título: {livro.tituloLivro}</h6>
                        </div>

                        <div className="descricao-livro">
                            <h6 className="h4-descricaoLivro">ISBN: {livro.isbnLivro}</h6>
                        </div>

                        <div className="descricao-livro">
                            <h6>Autor/a: {livro.autorLivro}</h6>   <h6>Editora: {livro.editoraLivro}</h6>
                        </div>

                        <div className="descricao-livro"> 
                            <h6>Ano: {livro.anoLivro}</h6>
                        </div>

                        <div className="sinopse-livro">


                            <label className="lbl-sinopseLivro" htmlFor="">{livro.sinopseLivro}</label>

                        </div>

                        <div className="genero-livro">

                            {livro.generoLivro && livro.generoLivro.length > 0 ? (
                                livro.generoLivro.map((genero, index) => (
                                    <div key={index} className="box-genero">#{genero}</div>
                                ))
                                ) : (
                                <div className="box-genero">#SemGênero</div>
                            )}

                        </div>

                    </div>

                </div>

                <div className="parte-menus">

                    <NavbarVertical />                  

                </div>

            </div>

            <div className="parte-baixo">

                <button className="botao-resenha">Resenhas  |  0</button>



                <button className="botao-icone" onClick={ () => setResenhas(!resenhas)}><img src="./images/down.svg" alt="" className="icone-down"/></button>


            </div>

            <div className="container-parte-resenhas">

                {resenhas && <LivroParteDois nomeUsuario={"Jaime"} />}

            </div>

        </div>
            
    </div>
  )
}

export default LivroParteUm
