import React from 'react'
import { useEffect } from 'react';
import {useState} from "react";
import Post from './Post';



const Posts = () => {

    const [keyword,setKeyword] = useState("bitcoin");
    const [articles,setArticles] = useState();
    const [status,setStatus] = useState("failed");
    const [totalResults,setTotalResults] = useState(0);
    const today = new Date().toISOString().slice(0,10)


    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=${today}&to=${today}&sortBy=popularity&apiKey=8075b5481a474ed58b5166fb8a8706ee&language=en
        `)
        .then((response) => response.json())
        .then((data) => {
            setArticles(data.articles);
            setStatus(data.status);
            setTotalResults(data.totalResults);
        })
    },[keyword]);
        

  return (
    <>  
        {status === "ok" ? articles.map((article,index) => (
            <Post key={index} author={article.author} content={article.content} description={article.description} publishedAt={article.publishedAt} sourceName={article.source.name} title={article.title} url={article.url} imageUrl={article.urlToImage}/>
        )) : <h2>not lmao</h2>}
    </>
    
  )
}

export default Posts