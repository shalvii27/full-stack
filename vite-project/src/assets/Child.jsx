import React, { useContext } from 'react'
import GrandChild from '/GrandChild'
import { UserContext } from './UserContext'

function Child() {
   
  return (
    <div>
        this is child
      <GrandChild />
    </div>
  )
}

export default Child

// prop drilling
// context api