import React from 'react'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import LoginLogo from "../../components/loginLogo/LoginLogo";
import LoginButton from "../../components/loginButton/LoginButton"
import "./login.css";

const Login = ({setShowNav}) => {

    useEffect(() => {
        setShowNav(false);
    },[setShowNav])

  return (
    <div className="login">
        <LoginLogo/>
          <LoginButton/>
          <Link to="/news" className="guest"><span>Guest Mode</span></Link>

    </div>
  )
}

export default Login