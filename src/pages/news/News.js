import React from 'react'
import {useEffect,useState} from "react";
import Posts from '../../components/posts/Posts';
import NewsHeader from '../../components/newsHeader/NewsHeader';
import "./news.scss";

const News = ({setShowNav}) => {

  const [keyword,setKeyword] = useState("crypto");


  useEffect(() => {
    setShowNav(true);
  },[setShowNav])

  return (
    <div className='posts'>
      <NewsHeader setKeyword={setKeyword}/>
      <Posts keyword={keyword}/>
    </div>
  )
}

export default News