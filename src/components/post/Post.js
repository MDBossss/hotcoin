import React from 'react'
import {useState,useContext} from "react";
import {AiFillStar} from "react-icons/ai";
import {motion} from "framer-motion"
import {BsChevronCompactDown} from "react-icons/bs";
import {AiFillMinusCircle} from "react-icons/ai";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext'; 
import { db } from '../../firebase';

import "./post.css";

const Post = ({handleDelete, article, starVisible ,author,description,sourceName,title,url,imageUrl}) => {

  const [starState,setStarState] = useState(false);
  const [minusState,setMinusState] = useState(false);
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

  const minusVariants ={
    hover:{
      color:"#ff0000",
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
      color: !minusState ? "#808080" : "#ff0000"
    }
  }



  const handleAdd = async () =>{
    setStarState(true)
    await updateDoc(doc(db,"users",currentUser.uid),{
      articles: arrayUnion(article)
    })
  }

  const handleRemove = () => {
    setMinusState(true)
    handleDelete(article._id)
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
          <motion.div 
            className="arrow-down" 
            variants={arrowDownVariants} 
            whileHover="hover" 
            onClick={() => window.open(url)}>
            <BsChevronCompactDown/>
          </motion.div>
      </div>
      {starVisible ? <motion.div 
        className={starState ? "selectedStar" : "star"}
        variants={starVariants}
        animate="hidden" 
        whileHover="hover"
        whileTap="tap"
        onClick={handleAdd}
         ><AiFillStar/></motion.div>
        : <motion.div
        className={minusState ? "selectedMinus" : "minus"}
        variants={minusVariants}
        animate="hidden"
        whileHover="hover"
        whileTap="tap"
        onClick={handleRemove}
        ><AiFillMinusCircle/></motion.div>}
 
    </div>
  )
}

export default Post