import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider =({children}) => {
   const [ Reload, setReload ] = useState(false)

   return(
      <Context.Provider value={{ Reload, setReload }}>
         {children}
      </Context.Provider>
   )
}