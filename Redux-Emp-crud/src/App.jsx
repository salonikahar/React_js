import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewEmp from './Emp/ViewEmp'
import AddEmp from './Emp/AddEmp'
import UpdateEmp from './Emp/UpdateEmp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewEmp />}></Route>
        <Route path='/add' element={<AddEmp />}></Route>
        <Route path='/edit/:index' element={<UpdateEmp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
