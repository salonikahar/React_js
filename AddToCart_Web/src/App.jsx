import React, { useState } from 'react';
import Product from '../components/Product';
import AddToCart from '../components/AddToCart';
import Header from '../components/Header';
import Footer from '../components/footer';

import productImage1 from './assets/images/about-product-1_x500.png';
import productImage2 from './assets/images/about-product-2_x500.png';
import productImage3 from './assets/images/about-product-3_x500.png';
import productImage4 from './assets/images/about-product-4_x500.png';
import productImage5 from './assets/images/about-product-5_x500.png';
import productImage6 from './assets/images/about-product-6_x500.png';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 10, image: productImage1 },
    { id: 2, name: "Product 2", price: 15, image: productImage2 },
    { id: 3, name: "Product 3", price: 20, image: productImage3 },
    { id: 4, name: "Product 4", price: 20, image: productImage4 },
    { id: 5, name: "Product 5", price: 20, image: productImage5 },
    { id: 6, name: "Product 6", price: 20, image: productImage6 }
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existItem = prevCart.find((i) => i.id === product.id);
      if (existItem) {
        return prevCart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const onAdd = (product) => {
    setCart((prevCart) => {
      const existItem = prevCart.find((i) => i.id === product.id);
      if (existItem) {
        return prevCart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const onRemove = (product) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product) {
            return {...item, quantity: item.quantity - 1};
          }
          return item;
        })
        .filter((i) => i.quantity > 0);
    });
  };

  const onDelete = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

const nav = cart.reduce((total, item) => total + item.quantity, 0);




  return (
    <div>
      <Header nav={nav}/>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <AddToCart cart={cart} onRemove={onRemove} onDelete={onDelete} onAdd={onAdd} />


      <Footer />
      
    </div>
  );
}

export default App;
