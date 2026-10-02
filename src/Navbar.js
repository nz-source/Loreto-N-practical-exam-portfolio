import React from 'react';

function Navbar() {
  return (
    <nav
      style={{
        padding: '10px',
        backgroundColor: '#1387ca',
        color: 'white'
      }}
    >
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '20px'
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;