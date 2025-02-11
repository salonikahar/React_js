import React from 'react';

function Product({ product, addToCart }) {
    console.log(product);
    
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
            />
            <h5 style={{ margin: '10px 0', fontSize: '16px', color: '#333' }}>{product.name}</h5>
            <h6 style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>${product.price}</h6>
            <button
                style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginTop: '10px'
                }}
                onClick={() => addToCart(product)} 
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
