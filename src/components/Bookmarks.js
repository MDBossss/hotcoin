import React from 'react'
import {useEffect} from "react";

const Bookmarks = ({setShowNav}) => {

  useEffect(() => {
    setShowNav(true);
  },[setShowNav])

  return (
    <div>Bookmarks</div>
  )
}

export default Bookmarks