import React from 'react'
import './TelaPrincipal.css'

function TelaPrincipal() {


  return (

    <div className='container-tela-principal'>

        <div className='retangulo-um'>

            <div className='retangulo-dois'>

                <div className='retangulo-tres'>

                    <div className='div-elementos'>
                        
                        <img className='icons' src="../public/icons/ant-design--home-outlined.svg" alt="icon-home" />
                        <img className='icons' src="../public/icons/vscode-icons--file-type-light-config.svg" alt="icon-config" />

                    </div>

                    <div className="div-livros-esquerda">

                        <div className="div-barra-de-pesquisa">

                            <img className='icons' src="../public/icons/lsicon--search-outline.svg" alt="" />
                            <input className='inpt-pesquisa' type="text" placeholder='Pesquise um livro em específico'/>

                        </div>

                        <div className="div-Fila-livros-um">

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 1</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 2</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 3</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>
                            
                        </div>

                        <div className="div-Fila-livros-dois">

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                        </div>

                        <div className="div-contatos">

                            <div className="div-divisao-um"></div>
                            <div className="div-divisao-dois"></div>
                            <label className='labels' htmlFor="">Contact Us</label>

                        </div>
                    
                    </div>

                    <div className="div-livros-direita">

                        <div className="div-barra-de-pesquisa">

                        </div>

                        <div className="div-Fila-livros-um">

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>
    
                        </div>

                        <div className="div-Fila-livros-dois">

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                            <div className="div-box-titulo">
                                <div className="box"></div>
                                <p className='titulos-livros'>Título 4</p>
                            </div>

                        </div>

                        <div className="div-next-page">

                            <div className="div-divisao-um"></div>
                            <div className="div-divisao-dois"></div>

                            <div className="div-label-next-page">
                                <label className='label-next' htmlFor="">Next Page</label>
                            </div>

                        </div>

                    </div>

                    <div className="div-espaco-vazio">

                    </div>

                </div>

            </div>
            
        </div>
      
    </div>

  )
}


export default TelaPrincipal