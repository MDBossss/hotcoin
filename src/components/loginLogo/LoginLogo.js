import React from 'react'
import Fire from "../fire/Fire"
import LoginBlob from '../loginBlob/LoginBlob'
import "./loginLogo.css";

const LoginLogo = () => {
  return (
    <div className="login-logo">
        <LoginBlob/>
        <Fire/>
        {/* <h1>HotCoin</h1> */}
    </div>
  )
}

export default LoginLogo