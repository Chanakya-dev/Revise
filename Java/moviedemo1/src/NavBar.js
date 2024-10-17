import React from 'react';
import './NavBar.css';  // Assuming the styles are in a separate CSS file

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MoviesApp</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <form className="search-form"> 
  <input type="text" placeholder="Search..." className="navbar-search" />
  <button type='submit'>Search</button>
</form>

        <button className="navbar-login">Login</button>
      </div>
    </nav>
  );
}

export default NavBar;
