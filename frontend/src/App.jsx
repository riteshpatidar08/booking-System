import React from 'react'
import Login from './components/Login' ;
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}>
          
        </Route>

      </Routes>
    </div>
  )
}

export default App
