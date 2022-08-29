import React from 'react'
import Fire from "../fire/Fire"
import LoginBlob from '../loginBlob/LoginBlob'
import "./loginLogo.scss";

const LoginLogo = () => {
  return (
    <div className="login-logo">
        <LoginBlob/>
        <Fire/>
    </div>
  )
}

export default LoginLogo