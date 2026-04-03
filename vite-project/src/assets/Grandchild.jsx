import React, { useContext } from 'react'
import { UserContext } from './UserContext'


function GrandChild() {
const {user, setuser} = useContext(UserContext)
  return (
    <div>
        this is grandchild
      hello {user}
    </div>
  )
}

export default GrandChild