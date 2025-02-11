import React from 'react'

function Product({product}) {
    console.log('hello')
  return (
    <div>
        <img src={product.image} alt={product.name} />
        <h5>{product.name}</h5>
        <h6>${product.price}</h6>
    </div>
  )
}

export default Product
