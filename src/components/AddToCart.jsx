import React from 'react';

function AddToCart({ cart, onAdd, onRemove, onDelete }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={{ marginTop: '20px', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping Cart ({cart.length})</h2>
            {cart.length > 0 ? (
                <>
                    <div>
                        {cart.map((item) => (
                            <div key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '15px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
                                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover', marginRight: '15px' }} />
                                <div style={{ flexGrow: 1 }}>
                                    <h4 style={{ margin: 0 }}>{item.name}</h4>
                                    <p style={{ margin: '5px 0', fontSize: '14px' }}>${item.price} x {item.quantity}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button
                                        style={{
                                            backgroundColor: '#28a745',
                                            color: '#fff',
                                            padding: '5px 10px',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            marginRight: '5px'
                                        }}
                                        onClick={() => onAdd(item)}
                                    >
                                        +
                                    </button>
                                    <span style={{ margin: '0 10px', fontSize: '16px' }}>{item.quantity}</span>
                                    <button
                                        style={{
                                            backgroundColor: item.quantity === 1 ? '#ccc' : '#dc3545',
                                            color: '#fff',
                                            padding: '5px 11px',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            marginRight: '10px'
                                        }}
                                        onClick={() => onRemove(item.id)}
                                    >
                                        -
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: '#ff0000',
                                            color: '#fff',
                                            padding: '5px 10px',
                                            border: 'none',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            marginLeft: '10px'
                                        }}
                                        onClick={() => onDelete(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ${totalPrice.toFixed(2)}</h3>
                </>
            ) : (
                <p style={{ textAlign: 'center', fontSize: '16px', color: '#777' }}>Your cart is empty.</p>
            )}
        </div>
    );
}

export default AddToCart;
