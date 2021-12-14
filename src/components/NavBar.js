import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-7xl flex justify-between border-b-2 p-4 items-center mb-8">
      <div className="flex space-x-4 items-center">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h1>Space Traveler</h1>
      </div>

      <nav className="space-x-4 items-center flex relative">
        <NavLink
          className="block transition-all duration-500 p-2 rounded-t-lg"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="block transition-all duration-500 p-2 rounded-t-lg"
          to="/Missions"
        >
          Missions
        </NavLink>
        <NavLink
          className="block transition-all duration-500 p-2 rounded-t-lg"
          to="/my-profile"
        >
          {' '}
          My profile
        </NavLink>
        <div className="transition-all duration-500 indicator w-20 h-8 bg-indigo-100 border-t border-l border-r border-indigo-500 absolute -bottom-5 rounded-t-lg" />
      </nav>
    </div>
  </div>
);

export default NavBar;
