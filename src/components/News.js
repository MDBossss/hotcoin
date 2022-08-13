import React from 'react'
import {useEffect} from "react";
import Posts from './Posts';
import NewsHeader from './NewsHeader';

const News = ({setShowNav}) => {

  useEffect(() => {
    setShowNav(true);
  },[setShowNav])

  return (
    <div className='posts'>
      <NewsHeader/>
      <Posts/>
    </div>
  )
}

export default News