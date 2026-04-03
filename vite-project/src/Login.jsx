import React from 'react'
import { useState } from 'react'

function login() {
  //readable
  //writable
  const[a,seta]= useState(0)
  //a is readable element
  // set is a writeable
  // useState(10) 10 is the default value of a
  return (
    <div>
      <h1>This is my login components</h1>
    {a}
    </div>
  )
}

export default login
