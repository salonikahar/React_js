import React from 'react'
import {BrowserRouter,Route ,Routes} from "react-router-dom"
import Product from './components/product'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
