import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header bg-dark text-white p-3">
      <div className="container">
        <h1>My Website</h1>
        <nav>
          <ul className="d-flex list-unstyled">
            <li><Link to="/" className="text-white mx-3">Home</Link></li>
            <li><Link to="/about" className="text-white mx-3">About</Link></li>
            <li><Link to="/login" className="text-white mx-3">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;