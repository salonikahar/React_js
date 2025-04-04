import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Emp/Header'
import ViewEmp from './Emp/ViewEmp'
import AddEmp from './Emp/AddEmp'
import UpdateEmp from './Emp/UpdateEmp'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<AddEmp />}></Route>
        <Route path='/view' element={ <ViewEmp />}></Route>
        <Route path='/edit/:index' element={<UpdateEmp />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
