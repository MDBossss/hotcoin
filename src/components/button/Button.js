import React from 'react'
import {motion} from "framer-motion"
import "./button.css";

const Button = ({text,}) => {
  return (
    <motion.button className='
    button'>{text}</motion.button>
  )
}

export default Button