import React from 'react';
import '../App.css';

const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-left">
          <a className="nav-item" href="/">Home</a>
        </li>
        <li className="nav-left">
          <a className="nav-item" href="/">Blog</a>
        </li>
        <li className="nav-right">
          <a className="nav-item" href="/">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
