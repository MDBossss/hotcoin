import React from 'react'
import {useEffect,useState,useContext} from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import Post from '../../components/post/Post';
import Loading from '../../components/loading/Loading';
import BookmarkAlert from '../../components/BookmarkAlert/BookmarkAlert';
import "./bookmarks.scss";

const Bookmarks = ({setShowNav}) => {

  const [articles,setArticles] = useState([])
  const [status,setStatus] = useState("false")
  const [starVisible] = useState(false)
  const {currentUser} = useContext(AuthContext)


  useEffect(() => {
    setShowNav(true);
    getDoc(doc(db,"users",currentUser.uid)).then(docSnap => {
      if(docSnap.exists()){
        // console.log("Document data:", docSnap.data())
        setArticles(docSnap.data())
        setStatus("ok")
      }
      else{
        //doc.data() is undefined
        console.log("No such document!")
        setStatus("false")
      }
    })
    
  },[setShowNav,articles])


  const handleDelete = async (id) =>{
    await updateDoc(doc(db,"users",currentUser.uid),{
      articles: articles.articles.filter(article => article._id !== id)
    })
    this.forceUpdate()
  }

  return (
    <div className="bookmarks">
        {articles.articles?.length < 1 ? <BookmarkAlert/> : <h2 className="title">Bookmarked posts</h2>  }
        {status === "ok" ? articles.articles?.map((article,index) => (
            <Post 
            key={index} 
            handleDelete={handleDelete} 
            starVisible={starVisible} 
            article={article} 
            author={article.author} 
            description={article.summary}  
            sourceName={article.clean_url} 
            title={article.title} 
            url={article.link} 
            imageUrl={article.media}/>
        )) : <Loading/>}
    </div>
  )
}

export default Bookmarks