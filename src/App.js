import React from 'react'
import Singin from './Pages/Singin/Singin'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Singup from './Pages/Singup/Singup'

const App = () => {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Singin></Singin>}/>
      <Route path='/singup' element={<Singup></Singup>}/>
    </Routes>
    </BrowserRouter>
   
  
  )
}

export default App