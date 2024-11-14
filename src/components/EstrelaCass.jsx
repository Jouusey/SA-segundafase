import React, { useState } from 'react'
import './EstrelaCass.css'


function EstrelaCass() {

    const [notaUm, setNotaUm] = useState(<img className='img-estrela' src="public\images\streamline--star-2.svg" alt="" />)
    const [notaDois, setNotaDois] = useState(<img className='img-estrela' src="public\images\streamline--star-2.svg" alt="" />)
    const [notaTres, setNotaTres] = useState(<img className='img-estrela' src="public\images\streamline--star-2.svg" alt="" />)
    const [notaQuatro, setNotaQuatro] = useState(<img className='img-estrela' src="public\images\streamline--star-2.svg" alt="" />)
    const [notaCinco, setNotaCinco] = useState(<img className='img-estrela' src="public\images\streamline--star-2.svg" alt="" />)

  return (
    <div>
        
        <button className='btn-nota'>{notaUm}</button>
        <button className='btn-nota'>{notaDois}</button>
        <button className='btn-nota'>{notaTres}</button>
        <button className='btn-nota'>{notaQuatro}</button>
        <button className='btn-nota'>{notaCinco}</button>
      
    </div>
  )
}

export default EstrelaCass
