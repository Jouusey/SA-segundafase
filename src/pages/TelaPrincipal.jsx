import React, { useEffect } from 'react'
import './TelaPrincipal.css'

function TelaPrincipal() {

//    function name(params) {
//      function(){
         
//      }
//    }


    useEffect(() => {
        alert("oi")
    }, [])


  return (

    <div className='container-tela-principal'>

        <div className='retangulo-um'>

            <div className='retangulo-dois'>

                <div className='retangulo-tres'>

                    <div className='div-espaco-vazio'>
                        
                        {/* <div className="div-home-escrivaninha">
                            
                            <button className="btns">
                                <img className='icons' src="../public/icons/ant-design--home-outlined.svg" alt="icon-home" />
                            </button>

                            <button className="btns">
                                <img className='icons' src="public/icons/escrita.png" alt="icon-escrivaninha" />
                            </button>
                            
                        </div>

                        <button className="btns">
                            <img className='icons' src="public/icons/barra-de-menu.png" alt="menu-hamburg" />
                        </button> */}

                    </div>

                    <div className="div-livros-esquerda">

                        <div className="div-barra-de-pesquisa">

                            <input className='inpt-pesquisa' type="text" placeholder='Pesquise um livro em específico'/>

                            <button className="btn-pesquisar">
                                <img className='icons-pesquisar' src="public/icons/big-search-len.png" alt="" />
                            </button>

                        </div>

                        <div className="div-Fila-livros">

                            <div className="div-nome-do-site">
                                <h1>Resenha na casa</h1>
                            </div>

                            <div className='logo-site'>logo site</div>


                            <p> Você que gosta de ler e se perder ao navegar na opinião de outros leitores sobre os teus livros preferidos? 
                            </p>

                            <p>Esse é o espaço ideial para você, leia e compartilhe as tuas resenhas na nossa plataforma!</p>

                            {/* <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 1</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 2</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 3</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 4</p>
                                </button>
                            </div> */}
                            
                        </div>

                        <div className="div-Fila-livros">

                            <button>Cadastrar-se</button>

                            <button>Entrar</button>

                            {/* <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 5</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 6</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 7</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 8</p>
                                </button>
                            </div> */}

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
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 1</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 2</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 3</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 4</p>
                                </button>
                            </div>
    
                        </div>

                        <div className="div-Fila-livros">

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 5</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 6</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 7</p>
                                </button>
                            </div>

                            <div className="div-box-titulo">
                                <button className="btn-livro-home">
                                    <div className="box"></div>
                                    <p className='titulos-livros'>Título 8</p>
                                </button>
                            </div>

                        </div>

                        <div className="div-next-page">

                            <div className="div-divisao-um"></div>
                            <div className="div-divisao-dois"></div>

                            <div className="div-label-next-page">
                                
                                <button className='btn-next-page'>Next Page</button>

                            </div>

                        </div>

                    </div>

                    <div className="div-elementos">

                    <div className="div-home-escrivaninha">
                            
                            <button className="btns">
                                <img className='icons' src="../public/icons/ant-design--home-outlined.svg" alt="icon-home" />
                            </button>

                            <button className="btns">
                                <img className='icons' src="public/icons/escrita.png" alt="icon-escrivaninha" />
                            </button>
                            
                        </div>

                        <button className="btns">
                            <img className='icons' src="public/icons/barra-de-menu.png" alt="menu-hamburg" />
                        </button>

                    </div>

                </div>

            </div>
            
        </div>
      
    </div>

  )
}


export default TelaPrincipal