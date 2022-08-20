import React from 'react'
import { useEffect } from 'react';
import {useState} from "react";
import Post from '../post/Post';
import Loading from '../loading/Loading';



const Posts = ({keyword}) => {

    const [articles,setArticles] = useState([]);
    const [status,setStatus] = useState("failed");
    const [starVisible,setStarVisible] = useState(true)

    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: keyword, lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
          'x-api-key': 'lS7wl5m8wb7-veU1o6EFcsWMmMdrjLU5BfB-m3xD1gI'
        }
      };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setArticles(response.data.articles);
            setStatus(response.data.status);
        }).catch(function (error) {
            console.error(error);
        });
    },[keyword])

  return (
    <>  
        {status === "ok" ? articles?.map((article,index) => (
            <Post key={index} starVisible={starVisible} article={article} author={article.author} description={article.summary}  sourceName={article.clean_url} title={article.title} url={article.link} imageUrl={article.media}/>
        )) : <Loading/>}
    </>
    
  )
}

export default Posts