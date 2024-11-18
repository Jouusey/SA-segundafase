import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
/* let bairro = 'Monte Verde' */

const [bairro, setBairro] = useState('Monte Verde')
const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])
const [usuarioLogado, setUsuarioLogado] = useState(false)
const [posicaoUsuario, setPosicaoUsuario] = useState('vazio')

    return(
        <GlobalContext.Provider value={{bairro, setBairro, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado, posicaoUsuario, setPosicaoUsuario}}>
            {children}
        </GlobalContext.Provider>
    )
}
