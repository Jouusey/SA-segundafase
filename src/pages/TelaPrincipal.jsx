import React, { useContext, useEffect, useState } from 'react'
import './TelaPrincipal.css'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function TelaPrincipal() {
    
    const {posicaoUsuario}=useContext(GlobalContext)
    const {biblioteca}=useContext(GlobalContext)

  return (

    <div className='container-tela-principal'>

        <div className='retangulo-um'>

            <div className='retangulo-dois'>

                <div className='retangulo-tres'>

                    <div className='div-espaco-vazio'>                     

                    </div>

                    <div className="div-livros-esquerda">

                        <div className="div-barra-de-pesquisa">

                            <input className='inpt-pesquisa' type="text" placeholder='Pesquise um livro em específico'/>

                            <button className="btn-pesquisar">
                                <img className='icons-pesquisar' src="public/icons/big-search-len.png" alt="" />
                            </button>

                        </div>

                        <div className="div-Fila-livros">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[0].tituloLivro}</p>
                                </button>
                                
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                              <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[1].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[5].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[3].tituloLivro}</p>
                                </button>
                            </div>
                            
                        </div>

                        <div className="div-Fila-livros">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[6].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[7].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[8].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[9].tituloLivro}</p>
                                </button>
                            </div>

                        </div>

                        <div className="div-contatos">

                            <div className="div-divisao-um"></div>
                            <div className="div-divisao-dois"></div>

                            <button className="btn-contacts">Contact Us</button>

                        </div>
                    
                    </div>

                    <div className="div-livros-direita">

                        <div className="div-barra-de-pesquisa">

                        </div>

                        <div className="div-Fila-livros">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[10].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[11].tituloLivro}</p>

                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[12].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[13].tituloLivro}</p>
                                </button>
                            </div>
    
                        </div>

                        <div className="div-Fila-livros">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[14].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[15].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[16].tituloLivro}</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">

                                  <Link to="/telalivro">
                                    <div className="box"></div></Link>
                                    <p className='titulos-livros'>{biblioteca[17].tituloLivro}</p>
                                </button>
                            </div>

                        </div>

                        <div className="div-next-page">

                            <div className="div-divisao-um"></div>
                            <div className="div-divisao-dois"></div>

                            <div className="div-label-next-page">
                             
                                
                                <button className='btn-next-page' onClick={() => {console.log(posicaoUsuario)}}>Next Page</button>

                            </div>

                        </div>

                    </div>

                    <div className="div-elementos">

                    <div className="div-home-escrivaninha">
                            
                            <Link to="/telaprincipal">
                            <button className="btns">
                                <img src="../public/icons/ant-design--home-outlined.svg" alt="" className="icone-botao"/>
                            </button>
                            </Link>


                            <Link to="/telaescrivaninha"> 
                            <button className="btns"> 
                            <img src="public/icons/escrita.png" alt="" className="icone-botao"/> 
                            </button>
                            </Link>

                          
                            
                        </div>
                        <Link to="/telausuarioconfigs"> 
                        <button className="btns">  
                        <img src="./public/images/setting.svg" alt="" className="icone-botao"/>
                        </button>
                        </Link>

                    </div>

                </div>

            </div>
            
        </div>
      
    </div>

  )
}


export default TelaPrincipal