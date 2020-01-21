import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
        <NavLink to="/">
        HELLO!
      </NavLink>
    </div>
  );
}

export default NavBar;