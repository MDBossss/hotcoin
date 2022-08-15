import React from 'react'
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {BsHouseFill,BsFillBarChartFill, BsFillBookmarkFill, BsFillPersonFill} from "react-icons/bs";
import "./navbar.css";


const Navbar = ({showNav}) => {


  return (
    <nav className="navbar"  style={{display: !showNav && "none"}}>
      <NavLink className={({isActive}) => isActive ? "selected" : "nav-item"} to="/news"><BsHouseFill size={24}/></NavLink>
      <NavLink className={({isActive}) => isActive ? "selected" : "nav-item"} to="/bookmarks"><BsFillBookmarkFill size={24}/></NavLink>
      <NavLink className={({isActive}) => isActive ? "selected" : "nav-item"} to="/charts"><BsFillBarChartFill size={24}/></NavLink>
      <NavLink className={({isActive}) => isActive ? "selected" : "nav-item"} to="/profile"><BsFillPersonFill size={24}/></NavLink>
    </nav>
  )
}

export default Navbar