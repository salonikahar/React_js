import React from 'react';

function AddToCart({ cart, dispatch }) {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>Shopping Cart ({cart.length})</h2>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
                                {item.name} - ${item.price}
                                <button
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: '#fff',
                                        padding: '5px 10px',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        marginLeft: '10px'
                                    }}
                                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default AddToCart;
