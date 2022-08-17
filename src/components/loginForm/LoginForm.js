import React from 'react'
import {useState,useContext} from "react";
import Button from '../button/Button';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import "./loginForm.css"

const LoginForm = ({loginState,setLoginState}) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("signed in")
        setError(false);
        dispatch({type:"LOGIN",payload:user})
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  }


  return (
    <div className='form'>
      {error && <span className='alert'>Wrong password or email!</span>}
      <label>E-mail</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      <div className='empty' onClick={handleLogin}><Button text="Login"/></div>
      <span onClick={() => setLoginState(!loginState)}>Register</span>
    </div>
  )
}

export default LoginForm