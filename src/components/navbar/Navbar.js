import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsHouseFill,
  BsFillBarChartFill,
  BsFillBookmarkFill,
  BsFillPersonFill,
} from "react-icons/bs";
import "./navbar.scss";

const Navbar = ({ showNav }) => {
  return (
    <nav className="navbar" style={{ display: !showNav && "none" }}>
      <div className="nav-wrapper">
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "nav-item")}
          to="/"
        >
          <BsHouseFill size={24} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "nav-item")}
          to="/bookmarks"
        >
          <BsFillBookmarkFill size={24} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "nav-item")}
          to="/charts"
        >
          <BsFillBarChartFill size={24} />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : "nav-item")}
          to="/profile"
        >
          <BsFillPersonFill size={24} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
