import React from 'react'
import "./TelaEscrivaninha.css"

function TelaEscrivaninha() {



  return (
    
    
  <div className="tela-escrivaninha-container">

    <div className="escrivaninha-mesa">


      <div className="escrivaninha-documento">
                  
           <div className="documento-folha">


            <div className="folha-topo">

              <img className='img-lixo-escrivaninha' src="public\images\octicon--trashcan-16.svg" alt="" />
              <input maxLength={18} className='inpt-tituloResenha' placeholder='TITULO' type="text" />


            </div>
            <div className="folha-conteudo">

              <textarea maxLength={800} className='inpt-resenha' name="resenha" id="" cols="10" rows="10">AH</textarea>

             
            </div>
            <div className="folha-desfecho">

              <label className='lbl-desfecho' htmlFor="">Preview</label>

            </div>


            </div>

        </div>


        <div className="escrivaninha-container-generoIsbn">

          <div className="container-generoIsnb">

            <div className="genetoIsbn-topo"></div>

            <div className="generoIsbn-conteudo">


              <div className="conteudo-titulos">

                  <label className='lbl-generoIsbn-titulos' htmlFor="">GENEROS</label>
                  <label className='lbl-generoIsbn-titulos' htmlFor="">ISBN</label>
              </div>

              <div className="conteudo-janela">

                  <div className="conteudo-escolhaGenero">



                  <div className="escolhaGenero-colunaEsquerda">

                  <div className="colunaEsquerda-generos">
                        
                     <label className='lbl-escolhaGenero' htmlFor="">Aventura</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Acao</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Romance</label>
                     <label className='lbl-escolhaGenero' htmlFor="">Misterio</label>
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
                  <label className='lbl-escolhaGenero' htmlFor="">Instrucao</label>
                  <label className='lbl-escolhaGenero' htmlFor="">Escolares</label>

                  </div>

                  <div className="colunaDireita-checkbox">

                  <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                  <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                  <input className='escolhaGenero-checkbox' type="checkbox" name="" id="" />
                  </div>


                  
                  </div>
                
             
              </div>

              <div className="conteudo-informacoesIsbn">




              </div>

              </div>



            </div>

            <div className="generoIsbn-desfecho">

              <button className='btn-escrivaninha'>ENVIAR</button>
            </div>


          </div>
          

        </div>




        <div className="escrivaninha-navbarVertical"></div>



    </div>

  </div>    

 
  )
}

export default TelaEscrivaninha
