import React from 'react';

function Footer({ foot }) {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '2px', marginTop: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ marginTop: '16px', color: 'white', fontSize: '14px' }}>&copy; @myCart All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
