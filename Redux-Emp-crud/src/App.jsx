import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewEmp from './Emp/ViewEmp'
import AddEmp from './Emp/AddEmp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewEmp/>}></Route>
        <Route path='/add' element={<AddEmp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
