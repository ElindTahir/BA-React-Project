import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import logo from '../../img/ReactLogo.png'

function Navbar() {
  return (
    <div className="navbar p-3 d-flex align-items-center shadow" style={{ justifyContent: 'space-between' }}>
      <div className="text-center paragraph p-2">
        <p className="mb-0">Performance Testing einer Webanwendung in React</p>
      </div>
      <div className="logoContainer">
        <img src={logo} alt="Angular Logo" />
      </div>
    </div>
  );
}

export default Navbar;