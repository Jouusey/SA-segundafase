import React, { useState } from 'react'
import "./EstrelasBtn.css"

function EstrelasBtn() {



    const [notaUm, setNotaUm] = useState(<img className='btn-desfecho-img' src="public\images\streamline--star-2.svg" alt="" />)
    const [notaDois, setNotaDois] = useState(<img className='btn-desfecho-img' src="public\images\streamline--star-2.svg" alt="" />)


    function mudarNotaUm() {

        setNotaUm(<img className='btn-desfecho-img' src="public\images\streamline--star-2-solid.svg" alt="" />)
        setNotaDois(<img className='btn-desfecho-img' src="public\images\streamline--star-2.svg" alt="" />)
        
    }

    function mudarNotaDois() {

        setNotaUm(<img className='btn-desfecho-img' src="public\images\streamline--star-2-solid.svg" alt="" />)
        setNotaDois(<img className='btn-desfecho-img' src="public\images\streamline--star-2-solid.svg" alt="" />)
        
        
    }
/* 
    function mudarNotaTres() {
        
    }

    function mudarNotaQuatro() {
        
    }
    function mudarNotaCinco() {
        
    } */




  return (
    <div>



        <button onClick={mudarNotaUm} className='generoIsbn-desfecho-btn'>{notaUm}</button>
        <button onClick={mudarNotaDois} className='generoIsbn-desfecho-btn'>{notaDois}</button>


      {/*   <button onClick={mudarNotaTres} className='generoIsbn-desfecho-btn'></button>
        <button onClick={mudarNotaQuatro} className='generoIsbn-desfecho-btn'></button>
        <button onClick={mudarNotaCinco} className='generoIsbn-desfecho-btn'></button> */}
      
    </div>
  )
}

export default EstrelasBtn

