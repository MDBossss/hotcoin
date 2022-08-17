import React from "react";
import {useState,useContext} from "react";
import {Routes, Route,Navigate} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import { AuthContext } from "./context/AuthContext";

function App() {

  const [showNav,setShowNav] = useState(true);

  const {currentUser} = useContext(AuthContext);

  const RequireAuth =({children}) => {
    return currentUser ? children : <Navigate to="/login"/>
  }


  return (
    <>
      <Navbar showNav={showNav}/>
      <Routes>
        <Route path="/login" element={<Login setShowNav={setShowNav}/>}/>
        <Route path="/" element={<RequireAuth><News setShowNav={setShowNav}/></RequireAuth>}/>
        <Route path="/bookmarks" element={<RequireAuth><Bookmarks setShowNav={setShowNav}/></RequireAuth>}/>
      </Routes>
    </>
  );
}

export default App;
