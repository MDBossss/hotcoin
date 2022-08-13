import React from 'react'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import LoginLogo from './LoginLogo';
import LoginButton from './LoginButton';

const Login = ({setShowNav}) => {

    useEffect(() => {
        setShowNav(false);
    },[setShowNav])

  return (
    <div className="login">
        <LoginLogo/>
        <LoginButton/>
        <Link to="/" className="guest"><span>Guest Mode</span></Link>
    </div>
  )
}

export default Login