import React from 'react'
import Fire from './Fire'
import LoginBlob from './LoginBlob'

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