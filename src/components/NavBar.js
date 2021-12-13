import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <h1>Navbar</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/missions">Missions</Link>
    </nav>
  </div>
);

export default NavBar;
