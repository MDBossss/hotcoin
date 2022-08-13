import React from 'react'
import {AiFillStar} from "react-icons/ai";
import {BsChevronCompactDown} from "react-icons/bs";

const Post = ({author,content,description,publishedAt,sourceName,title,url,imageUrl}) => {
  return (
    <div className="post">
      <div className="post-top">
        <div className="post-left" style={{
            background:`url(${imageUrl})`,backgroundSize:"cover",backgroundPosition:"center"}}>
          </div>
          <div className="post-right">
            <span>• {author}</span>
            <h3>{title}</h3>
          </div>
      </div>  
      <div className="post-bottom">
          <p>{description}</p>
          <div className="arrow-down">
            <BsChevronCompactDown/>
          </div>
      </div>
      <div className="star"><AiFillStar/></div>  
    </div>
  )
}

export default Post