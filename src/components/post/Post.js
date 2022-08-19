import React from 'react'
import {useState,useContext} from "react";
import {AiFillStar} from "react-icons/ai";
import {motion} from "framer-motion"
import {BsChevronCompactDown} from "react-icons/bs";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext'; 
import { db } from '../../firebase';

import "./post.css";

const Post = ({article,author,description,sourceName,title,url,imageUrl}) => {

  const [starState,setStarState] = useState(false);
  const {currentUser} = useContext(AuthContext);




  const arrowDownVariants = {
    hover:{
      scale: 1.5,
      transition:{
        type:"spring",
        stiffness:"400",
        damping:"10"
      }
    }
  }

  const starVariants ={
    hover:{
      color:"#FFD700",
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
    hidden:{
      color: !starState ? "#808080" : "#FFD700"
    }
  }



  const handleClick = async () =>{
    setStarState(true)
    await updateDoc(doc(db,"users",currentUser.uid),{
      articles: arrayUnion(article)
    })
  }

  return (
    <div className="post">
      <div className="post-top">
        <div className="post-left" style={{
            backgroundImage:`url(${imageUrl})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>
          <div className="post-right">
            <span>• {author}, {sourceName}</span>
            <h3>{title}</h3>
          </div>
      </div>  
      <div className="post-bottom">
          <p>{description}</p>
          <motion.div className="arrow-down" variants={arrowDownVariants} whileHover="hover" onClick={() => window.open(url)}>
            <BsChevronCompactDown/>
          </motion.div>
      </div>
      <motion.div className={starState ? "selectedStar" : "star"}
        variants={starVariants}
        animate="hidden" 
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick}
         ><AiFillStar/></motion.div>  
    </div>
  )
}

export default Post