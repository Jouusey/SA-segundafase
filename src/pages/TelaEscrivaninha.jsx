import React, { useContext, useEffect, useState } from 'react'
import "./TelaEscrivaninha.css"
import EstrelasBtn from '../components/EstrelasBtn'
import NavbarVertical from '../components/NavbarVertical'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'




function TelaEscrivaninha() {


  useEffect (() => {

    if(usuarioLogado == false){

      alert('Não há usuário logado, por favor, cadastre-se ou entre na sua conta.')
      navigate('/landingpage')
    }

  }, [])


  const navigate = useNavigate()
  const {usuarioLogado} = useContext(GlobalContext)

  const[tituloIsbn, setTitutloIsbn] = useState('Memoriums')
 
  const[capaIsbn, setCapaIsbn] = useState('')

  const[sinopseIsbn, setSinopseIsbn] = useState('"The Adventures of Sherlock Holmes" by Arthur Conan Doyle is a collection of detective stories written during the late 19th century. The book introduces the legendary detective Sherlock Holmes and his loyal companion, Dr. John Watson, as they embark on various intriguing cases, filled with mystery and clever deductions.')

  const[autorIsbn, setAutorIsbn] = useState('Arthur Conan')

  const[editoraIsbn, setEditoraIsbn] = useState('Rayzen')

  const[dataIsbn, setDataIsbn] = useState('1859-1930')

  return (
    
    
  <div className="tela-escrivaninha-container">

    <div className="escrivaninha-mesa">


      <div className="escrivaninha-documento">
                  
           <div className="documento-folha">
    


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


            <div className="container-informacoesLivro">


            <div className="informacoesLivro-esquerda">



                <div className="informacoesLivro-esquerda-capa">
                  {capaIsbn}
                </div>

                <label className='lbl-DadosLivro'>Autor:  {autorIsbn}</label>
                <label className='lbl-DadosLivro'>Editora:  {editoraIsbn}</label>
                <label className='lbl-DadosLivro'>Data:  {dataIsbn}</label>
                              
                              
                 


            </div>



            <div className="informacoesLivro-direita">



              <div className="informacoesLivro-direita-tituloSinopse">



                  <div className="meio-sinopse">

                  <label className='lbl-generos' htmlFor="">{tituloIsbn}</label>

                  <textarea className='sinopse-textArea' value={sinopseIsbn} name="" id="" cols="30" rows="10" readOnly></textarea>
          
                  </div>
                    

              </div>


              <div className="informacoesLivro-direita-generos">
                <label className='lbl-generos' htmlFor="">Generos</label>

                

          
              <button className='btn-generos'>Aventura</button>
              <button className='btn-generos'>Mistério</button>
              <button className='btn-generos'>Drama</button>
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
  