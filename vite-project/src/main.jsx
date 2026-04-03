import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Navbar from './Navbar.jsx'
import Button from './Button.jsx'
import Cricket from './Cricket.jsx'
import Users from './Users.jsx'
import Parent from './Parent.jsx'
import {Route,Routes,BrowserRouter} from 'react-router'
createRoot(document.getElementById('root')).render(
 // <StrictMode>
   // <App />
    //<Login/>
    //<Register/>
    //<Navbar/>
    //<Button/>
    
    
 // </StrictMode>,
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/login/log' element={<Login/>}/>
    <Route path='/reg' element={<Register/>}/>
    <Route path='/Nav' element={<Navbar/>}/>
    <Route path='/But' element={<Button/>}/>
    <Route path='/cricket' element={<Cricket team="CSK" opp="RR" num={10} />}/>
    <Route path='/Users' element={<Users/>}/>

    <Route path='/' element={<parent/>}/>  </Routes>
  </BrowserRouter>
)
