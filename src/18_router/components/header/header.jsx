import React from 'react';
import './header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><a href='/'>Home</a></li>
        <li><a href='/posts'>Posts</a></li>
        <li><a href='/contacts'>Contacts</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
