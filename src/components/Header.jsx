import React from 'react';

function Header({nav}) {
    return (
        <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '15px 20px', 
            backgroundColor: '#333', 
            color: 'white' ,
            margin : '0',
        }}>
            <h2 style={{ margin: 0, fontSize: '24px' }}>My Store</h2>

            <div>
                <a href="/cart" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontSize: '18px', position: 'relative' }}>
                    🛒
                    <span style={{
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '0.5px 7px',
                        fontSize: '14px',
                        marginLeft: '5px',
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px'
                    }}>
                        {nav}
                    </span>
                </a>
            </div>
        </nav>
    );
}

export default Header;

