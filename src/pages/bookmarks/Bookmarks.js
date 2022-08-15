import React from 'react'
import {useEffect} from "react";
import "./bookmarks.css";

const Bookmarks = ({setShowNav}) => {

  useEffect(() => {
    setShowNav(true);
  },[setShowNav])

  return (
    <div>Bookmarks</div>
  )
}

export default Bookmarks