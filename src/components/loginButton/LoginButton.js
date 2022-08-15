import React from 'react'
import {motion} from "framer-motion"
import "./loginButton.css";

const LoginButton = () => {
  return (
    <motion.button className='login-button button'>Login</motion.button>
  )
}

export default LoginButton