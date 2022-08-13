import React from "react";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import News from "./components/News"
import Bookmarks from "./components/Bookmarks";

function App() {

  const [showNav,setShowNav] = useState(true);


  return (
    <>
      <Navbar showNav={showNav}/>
      <Routes>
        <Route path="/login" element={<Login setShowNav={setShowNav}/>}/>
        <Route path="/" element={<News setShowNav={setShowNav}/>}/>
        <Route path="/bookmarks" element={<Bookmarks setShowNav={setShowNav}/>}/>
      </Routes>
    </>
  );
}

export default App;
