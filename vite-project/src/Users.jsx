import React,{ useEffect} from 'react'
import { useState } from 'react'
function Users() {
    const [users, setusers]= useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(date => setusers(data))
}, []);
  return (
    <div>
      {users.map(u =>  (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  )
}

export default Users
