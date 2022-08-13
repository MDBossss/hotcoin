import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";

const NewsHeader = () => {

    const today = (new Date()).toString().split(' ').splice(1,3).join(' ');

  return (
    <div className="news-header">
        <span>{today}</span>
        <div className="search-bar">
            <AiOutlineSearch className="icon"/>
            <input type="text" />
        </div>
        <h2>Daily feed</h2>
        
    </div>
  )
}

export default NewsHeader