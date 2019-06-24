import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">
          Aquarius Movement
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
