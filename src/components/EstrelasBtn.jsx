import React, { useState } from 'react'

function EstrelasBtn() {



    const [notaUm, setNotaUm] = useState('')
    const [notaDois, setNotaDois] = useState('')


    function mudarNotaUm() {

        setNotaUm(<img className='btn-desfecho-img' src="public\images\streamline--star-2.svg" alt="" />)
        setNotaDois('')
        
    }

    function mudarNotaDois() {

        setNotaUm(<img className='btn-desfecho-img' src="public\images\streamline--star-2.svg" alt="" />)
        setNotaDois(<img className='btn-desfecho-img' src="public\images\streamline--star-2.svg" alt="" />)
        
        
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

