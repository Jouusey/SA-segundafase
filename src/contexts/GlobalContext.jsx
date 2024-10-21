import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
/* let bairro = 'Monte Verde' */

const [bairro, setBairro] = useState('Monte Verde')
const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])

    return(
        <GlobalContext.Provider value={{usuarioLogado, bairro, setBairro, vetorObjetosUsuarios, setVetorObjetosUsuarios}}>
            {children}
        </GlobalContext.Provider>
    )
}
