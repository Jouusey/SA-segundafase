import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./TelaUsuarioConfigs.css"
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

function TelaUsuarioConfigs() {
  return (
    <div className="usuarioConfigs-container">

      <div className="usuarioConfigs-div-esquerda">

      </div>

      <div className="usuarioConfigs-body">

        <div className="usuarioConfigs-body-cima">

        </div>

        <div className="usuarioConfigs-body-meio">

        </div>

        <div className="usuarioConfigs-body-baixo">

        </div>

      </div>

      <div className="usuarioConfigs-navbar-container">

        <div className="usuarioConfigs-navbar-cima"></div>

        <div className="usuarioConfigs-navbar-meio"></div>

        <div className="usuarioConfigs-navbar-baixo"></div>

      </div>
      
    </div>
  )
}

export default TelaUsuarioConfigs
