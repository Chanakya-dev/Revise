import React from 'react';
import './SideBar.css'; // Assuming the styles are in a separate CSS file

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>MoviesApp</h2>
      </div>
      <ul className="sidebar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#popular">Popular Movies</a></li>
        <li><a href="#genres">Genres</a></li>
        <li><a href="#favorites">Favorites</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </aside>
  );
}

export default SideBar;
