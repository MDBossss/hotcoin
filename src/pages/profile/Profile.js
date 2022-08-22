import React from 'react'
import {FiLogOut} from "react-icons/fi";
import {BiUserCircle} from "react-icons/bi";
import {BsNewspaper,BsBookmarkStarFill} from "react-icons/bs";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import "./profile.css"

const Profile = () => {

    const {currentUser} = useContext(AuthContext)
    let navigate = useNavigate();

  return (
    <div className="profile">
        <div className="top">
            <h2>My profile</h2>
            <div className="logout">
                <h4>Logout</h4>
                <FiLogOut/>
            </div>
        </div>
        <div className="card">
            <div className="left">
                <BiUserCircle/>
            </div>
            <div className="right">
                <h3>{currentUser.email}</h3>
            </div>
        </div>
        <div className="navigation">
            <div className="item" onClick={() => navigate("/")}>
                <BsNewspaper className='icn'/>
                <h3>News</h3>
            </div>
            <div className="item" onClick={() => navigate("/bookmarks")}>
                <BsBookmarkStarFill className='icn'/>
                <h3>Bookmarks</h3>
            </div>
        </div>
    </div>
  )
}

export default Profile