import React from 'react';

const Header = () => {
  return (
    <header className="header bg-dark text-white p-3">
      <div className="container">
        <h1>My Website</h1>
        <nav>
          <ul className="d-flex list-unstyled">
            <li><a href="/" className="text-white mx-3">Home</a></li>
            <li><a href="/about" className="text-white mx-3">About</a></li>
            <li><a href="/contact" className="text-white mx-3">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
