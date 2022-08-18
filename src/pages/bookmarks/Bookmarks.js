import React from 'react'
import {useEffect,useState} from "react";
import "./bookmarks.css";

const Bookmarks = ({setShowNav}) => {


  useEffect(() => {
    setShowNav(true);
  },[setShowNav])

  return (
    <h2>Bookmarked posts</h2>
  )
}

export default Bookmarks