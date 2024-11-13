import React from 'react'
import './ResenhasConfigs.css'
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import EstrelasBtn from './EstrelasBtn'
import EstrelaCass from './EstrelaCass'

function ResenhasConfigs() {
  return (
    <div className='resenhas-container'>

        {/* <img src="./images/star.svg" alt="" className="icone-estrela"/> */}
        <div className="resenhas-usuario">

            <div className="resenhas-usuario-capa">

            </div>

            <div className="resenhas-usuario-infos">

                <div className="resenhas-usuario-titulo">
                    <label className='lbl-titulo'>Nadando com os peixes</label>
                </div>

                <div className="resenhas-usuario-estrelas">

                    <EstrelaCass/>

                </div>

            </div>
        </div>

    </div>
  )
}

export default ResenhasConfigs
