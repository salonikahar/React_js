import React from 'react'
import {BrowserRouter,Route ,Routes} from "react-router-dom"
import Product from './components/product'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AddPro from './components/AddPro';
import UpdatePro from './components/UpdatePro';
import SingleProduct from './components/SingleProduct';
import Review from './components/Review';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path='/add' element={<AddPro />}></Route>
          <Route path='/update/:ProductId' element={<UpdatePro />}></Route>
          <Route path='/SingleProduct/:ProductId' element={<SingleProduct />}></Route>
          <Route path='/review/:ProductId' element={<Review/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App