import React from 'react'
import {useState} from "react";
import {AiOutlineSearch} from "react-icons/ai";
import "./newsHeader.css";

const NewsHeader = ({setKeyword}) => {

    const today = (new Date()).toString().split(' ').splice(1,3).join(' ');
    const [input,setInput] = useState("");

    const handleKeyDown = (event) => {
      if(event.key === "Enter"){
        setKeyword(input);
        localStorage.setItem("keyword",JSON.stringify(input))
      }
    }

  return (
    <div className="news-header">
        <span>{today}</span>
        <div className="search-bar">
            <AiOutlineSearch className="icon" onClick={() => {
              setKeyword(input)
              localStorage.setItem("keyword",JSON.stringify(input))
            }}/>
            <input type="text" placeholder="Enter keywords..." 
            onChange={(e) => {
                setInput(e.target.value)
            }}
            onKeyDown={handleKeyDown}
            />
        </div>
        <h2>Daily feed</h2>
        
    </div>
  )
}

export default NewsHeader