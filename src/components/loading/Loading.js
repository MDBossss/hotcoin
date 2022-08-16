import React from 'react'
import {motion} from "framer-motion";
import "./loading.css"


const loadingVariants ={
    visible:{
        rotate:[270,0,-270],
        borderRadius: ["16px","50%","16px"],
        transition:{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    },
    hidden:{
        x:"-50%"
    }
}

const Loading = () => {
  return (
    <div className="loadingContainer">
      <motion.div className='loading' variants={loadingVariants} animate="visible" initial="hidden"></motion.div>
      <h2>Loading...</h2>
    </div>

  )
}

export default Loading