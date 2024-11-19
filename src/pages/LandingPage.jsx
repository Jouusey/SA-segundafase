import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import './LandingPage.css'
import Navbar from '../components/Navbar'

function LandingPage() {

    const navigate = useNavigate()



  return (

    <div className='container-landing-page'>

        <div className='retangulo-um'>

            <div className='retangulo-dois'>

                <div className='retangulo-tres'>

                    <div className='div-espaco-vazio'>

                    </div>

                    <div className="div-esquerda">

                        <div className="div-barra-de-pesquisa">

                            <input className='inpt-pesquisa' type="text" placeholder='Pesquise um livro em específico'/>

                            <button className="btn-pesquisar">
                                <img className='icons-pesquisar' src="public/icons/big-search-len.png" alt="" />
                            </button>

                        </div>

                        <div className="container-logo-nome">

                            <div className="div-nome-do-site">
                                <h1>Nome do site</h1>
                            </div>

                            <div className='div-logo-site'>logo site</div>

                            
                        </div>

                        <div className="div-informacoes">

                            <div className="div-slogan">
                              <p> Gostas de ler e se perder ao navegar na opinião de outros leitores sobre os teus livros preferidos?
                              </p>
                              <p>Esse é o espaço ideial para você, leia e compartilhe suas resenhas na nossa plataforma!</p>
                            </div>

                            <div className="div-btns">
                                <button className='btn-cadastro'onClick={() => {navigate("/telacadastro")}}>Cadastrar-se</button>
                                <button className='btn-logar' onClick={() => {navigate("/telalogin")}}>Entrar</button>
                            </div>


                        </div>

                        <div className="container-contatos">

                            <div className="divisao-um"></div>
                            <div className="divisao-dois"></div>

                            <button className="btn-contacts">Contact Us</button>

                        </div>
                    
                    </div>

                    <div className="container-livros-direita">

                        <div className="div-espaco-vazio-landing">

                        </div>

                        <div className="div-Fila-livros-landing">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                   
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                   
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                   
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                   
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>
    
                        </div>

                        <div className="div-Fila-livros-landing">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                   
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                  
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                   
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                  
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>Título 16</p>
                                </button>
                            </div>

                        </div>

                        <div className="div-divisoes-direita">
                            

                            <div className="div-divisao-um"></div>
                            <div className="div-divisao-dois"></div>

                        </div>

                    </div>

                    <div className="div-elementos">

                        <div className="div-home-escrivaninha">
                            
                            
                        </div>


                    </div>

                </div>

            </div>
            
        </div>
      
    </div>

  )
}

export default LandingPage
