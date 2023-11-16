// Navbar.jsx

import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        {/* Remove the logo */}
        <span className="navbar-brand">Fortress in Pixels</span>
      </div>
      <div className="navbar-center">
        {/* Add your search bar here */}
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-right">
        {/* Add your login/signup options here */}
        <span>Login / Signup</span>
      </div>
    </header>
  );
}

export default Navbar;
