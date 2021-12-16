import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-7xl flex justify-between border-b-2 p-4 items-center">
      <div className="flex space-x-4 items-center">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h1>Space Traveler</h1>
      </div>

      <nav className="space-x-4 items-center">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink
          to="/Missions"
        >
          Missions
        </NavLink>
        <NavLink
          to="/my-profile"
        >
          {' '}
          My profile
        </NavLink>
      </nav>
    </div>
  </div>
);

export default NavBar;
