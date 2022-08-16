import React from 'react'
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import LoginLogo from "../../components/loginLogo/LoginLogo";
import "./login.css";
import LoginForm from '../../components/loginForm/LoginForm';
import RegisterForm from '../../components/registerForm/RegisterForm';

const Login = ({setShowNav}) => {

    const [loginState,setLoginState] = useState(false);

    useEffect(() => {
        setShowNav(false);
    },[setShowNav])

  return (
    <div className="login">
        <LoginLogo/>
        {!loginState ? <LoginForm loginState={loginState} setLoginState={setLoginState}/> : <RegisterForm loginState={loginState} setLoginState={setLoginState}/>}

    </div>
  )
}

export default Login