import React, { useState } from 'react';
import Product from './components/Product';
import AddToCart from './components/AddToCart';

import productImage1 from './assets/images/about-product-1_x500.png';
import productImage2 from './assets/images/about-product-2_x500.png';
import productImage3 from './assets/images/about-product-3_x500.png';
import productImage4 from './assets/images/about-product-4_x500.png';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 10, image: productImage1 },
    { id: 2, name: "Product 2", price: 15, image: productImage2 },
    { id: 3, name: "Product 3", price: 20, image: productImage3 },
    { id: 4, name: "Product 4", price: 20, image: productImage4 },
    { id: 5, name: "Product 5", price: 20, image: productImage3 },
    { id: 6, name: "Product 6", price: 20, image: productImage3 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} /> 
        ))}
      </div>

      <AddToCart cart={cart} />
    </div>
  );
}

export default App;
