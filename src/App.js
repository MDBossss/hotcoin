import React from "react";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Bookmarks from "./pages/bookmarks/Bookmarks";

function App() {

  const [showNav,setShowNav] = useState(true);


  return (
    <>
      <Navbar showNav={showNav}/>
      <Routes>
        <Route path="/" element={<Login setShowNav={setShowNav}/>}/>
        <Route path="/news" element={<News setShowNav={setShowNav}/>}/>
        <Route path="/bookmarks" element={<Bookmarks setShowNav={setShowNav}/>}/>
      </Routes>
    </>
  );
}

export default App;
