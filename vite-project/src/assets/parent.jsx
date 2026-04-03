import React from 'react'
import Child from './Child'
import { UserContext } from './UserContext'

function Parent() {
    const user="Vaibhav"
  return (
    <div>
        this is parent
   
            <Child />
      
    </div>
  )
}

export default Parent