import React from 'react'
import Product from './components/Product'
import AddToCart from './components/AddToCart'
import productImage from './assets/images/about-product-1_x500.png';

function App() {

  const product = {name : "product1",
                   price : 10,
                   image : productImage,
    
  }

  return (
    <>
      <Product product={product}/>
        <AddToCart/> 
    </>
  )
}

export default App
