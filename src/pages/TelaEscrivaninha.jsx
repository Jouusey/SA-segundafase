import React, { useState } from 'react'
import "./TelaEscrivaninha.css"
import EstrelasBtn from '../components/EstrelasBtn'
import NavbarVertical from '../components/NavbarVertical'

function TelaEscrivaninha() {



  const[tituloIsbn, setTitutloIsbn] = useState('Titulo')
 
  const[capaIsbn, setCapaIsbn] = useState('')

  const[sinopseIsbn, setSinopseIsbn] = useState('"The Adventures of Sherlock Holmes" by Arthur Conan Doyle is a collection of detective stories written during the late 19th century. The book introduces the legendary detective Sherlock Holmes and his loyal companion, Dr. John Watson, as they embark on various intriguing cases, filled with mystery and clever deductions.')

  const[autorIsbn, setAutorIsbn] = useState('Doyle, Arthur Conan')

  const[editoraIsbn, setEditoraIsbn] = useState('Rayzen')

  const[dataIsbn, setDataIsbn] = useState('1859-1930')

  return (
    
    
  <div className="tela-escrivaninha-container">

    <div className="escrivaninha-mesa">


      <div className="escrivaninha-documento">
                  
           <div className="documento-folha">
    <Navbar/>


            <div className="folha-topo">

              <button className='folha-topo-btn'>
                <img className='img-lixo-escrivaninha' src="public\images\output-onlinepngtools.png" alt="" /> 
              </button>
            
              <input maxLength={18} className='inpt-tituloResenha' placeholder='TITULO' type="text" />


            </div>
            <div className="folha-conteudo">

              <textarea placeholder='Começe sua resenha aqui...' maxLength={800} className='inpt-resenha' name="resenha" id="" cols="10" rows="10" ></textarea>

             
            </div>
            <div className="folha-desfecho">

              <label className='lbl-desfecho' htmlFor="">Preview</label>

            </div>


            </div>

        </div>


        <div className="escrivaninha-container-generoIsbn">

          <div className="container-generoIsnb">

            <div className="generoIsbn-topo"></div>

            <div className="generoIsbn-conteudo">


              <div className="conteudo-titulos">

                  <label className='lbl-generoIsbn-titulos' htmlFor="">GENEROS</label>
                  <label className='lbl-generoIsbn-titulos' htmlFor="">ISBN</label>
              </div>

              <div className="conteudo-janela">


                <div className="generoIsbn-espacoEsquerda"></div>

                <div className="generoIsbn-linha"></div>

                  <div className="conteudo-escolhaGenero">



                  <div className="escolhaGenero-colunaEsquerda">

                  <div className="colunaEsquerda-generos">
                        
                     <label className='lbl-escolhaGenero' htmlFor="">Aventura</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Açao</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Romance</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Mistério</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Suspense</label>
  
                  </div>



                      <div className="colunaEsquerda-Checkbox">
                        
                    <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                    <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                    <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                    <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                    <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                    
                      </div>

                
              </div>
              

                  <div className="escolhaGenero-colunaDireita">


                  <div className="colunaDireita-generos">

                  <label className='lbl-escolhaGenero' htmlFor="">Sci-fi</label>
                  <label className='lbl-escolhaGenero' htmlFor="">Instrução</label>
                  <label className='lbl-escolhaGenero' htmlFor="">Escolares</label>

                  </div>

                  <div className="colunaDireita-checkbox">

                  <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                  <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                  <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                  </div>


                  
                  </div>

                  
                <div className="generoIsbn-linha"></div>
                
                <div className="generoIsbn-espacoEsquerda"></div>

             
              </div>





                <div className="conteudo-informacoesIsbn">

                  <div className="informacoesIsbn-topo">

                    <input maxLength={40} placeholder='Digite o codigo ISBN' className='inpt-codigoIsbn' type="text" /> 
                    <button className='btnPesquisa-insformacoesIsbn-topo' >  
                    <img className='informacoesIsbn-topo-lupaImg' src="public\images\lets-icons--search.svg" alt="" />
                    </button>

                  </div>
                  
                  <div className="informacoesIsbn-meio">


                    <div className="informacoesIsbn-meio-parteCapa">

                      <div className="parteCapa-divCapa">

                        {capaIsbn}

                      </div>


                    </div>


                    <div className="informacoesIsbn-meio-bio">


                      <div className="meio-titulo">
                      {tituloIsbn}
                      </div>

                      <div className="meio-sinopse">


<textarea className='sinopse-textArea' value={sinopseIsbn} name="" id="" cols="30" rows="10" readOnly></textarea>
                    
    
                      </div>

                    


                    </div>

                  </div>

                  <div className="informacoesIsbn-credito">

                    <label className='informacoesIsbn-lbl' htmlFor="">AUTOR-</label>  {autorIsbn}

                  </div>

                  <div className="informacoesIsbn-credito">
                    
                  <label className='informacoesIsbn-lbl' htmlFor="">EDITORA-</label> {editoraIsbn}

                  </div>

                  <div className="informacoesIsbn-desfecho">

                  <label className='informacoesIsbn-lbl' htmlFor="">Data</label>  {dataIsbn}

                  </div>


                </div>

              </div>



            </div>

            <div className="generoIsbn-desfecho">

              <label className='desfecho-lbl' htmlFor="">Nota do livro: </label>

              <div className="estrelas-div">


              <EstrelasBtn />

              </div>

           
              <button className='btn-escrivaninha'>ENVIAR → </button>
            </div>

          </div>
          

        </div>




        <div className="escrivaninha-navbarVertical">

          <NavbarVertical />

        </div>



    </div>

  </div>    

 
  )
}

export default TelaEscrivaninha
