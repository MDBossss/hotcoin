import React from 'react'
import {FiLogOut} from "react-icons/fi";
import {BiUserCircle} from "react-icons/bi";
import {signOut } from "firebase/auth";
import { auth } from '../../firebase';
import {motion} from "framer-motion";
import {BsNewspaper,BsBookmarkStarFill} from "react-icons/bs";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import "./profile.css"

const Profile = () => {

    const {currentUser} = useContext(AuthContext)
    let navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() =>{
            //Sign-out successful.
            localStorage.setItem("user",null)
            console.log("signed out")
            navigate("/login")
        }).catch((error) => {
            //An error happened
            console.log(error)
        })
    }

    const buttonVariants = {
        hover:{
            scale:0.9
          },
          tap:{
            scale:1.5,
            transition:{
              type:"spring",
              stiffness:"1000",
              damping:"1"
            }
          },
    }

  return (
    <div className="profile">
        <div className="top">
            <h2>My profile</h2>
            <motion.div 
                className="logout" 
                onClick={handleLogout}
                variants={buttonVariants}
                whileHover="hover"
                >
                <h4>Logout</h4>
                <FiLogOut/>
            </motion.div>
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
            <motion.div 
                className="item"
                variants={buttonVariants}
                whileHover="hover"
                onClick={() => navigate("/")}>
                <BsNewspaper className='icn'/>
                <h3>News</h3>
            </motion.div>
            <motion.div 
                className="item"
                variants={buttonVariants}
                whileHover="hover" 
                onClick={() => navigate("/bookmarks")}>
                <BsBookmarkStarFill className='icn'/>
                <h3>Bookmarks</h3>
            </motion.div>
        </div>
    </div>
  )
}

export default Profile