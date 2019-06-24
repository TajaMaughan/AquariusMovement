import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo center">
          Aquarius Movement
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
