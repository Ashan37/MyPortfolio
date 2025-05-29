import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./src/assets/mypic.png" alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to='/' className="desktopMenuListItem">Home</Link>
        <Link to='client'  className="desktopMenuListItem">Clients</Link>
        <Link to='/about'  className="desktopMenuListItem">About</Link>
        <Link to='/portfolio'  className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
