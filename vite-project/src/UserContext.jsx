import React, { createContext } from 'react'
import { useState } from 'react'


export const UserContext=createContext()


function UserProvider({children}) {

  const [user, setuser] = useState("Vaibhav Devkar")
  return (
    <UserContext.Provider value={{user, setuser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider