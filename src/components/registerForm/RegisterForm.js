import React from 'react'
import {useState} from "react";
import Button from '../button/Button';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc} from "firebase/firestore";
import {auth,db} from "../../firebase";

import "./registerForm.scss";

const RegisterForm = ({loginState,setLoginState}) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = () => {
      console.log("pressed")
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setDoc(doc(db,"users",user.uid),{
            articles: null
          })
          setLoginState(!loginState)
        })
        .catch((error) => {
          console.log(error)
        });
    }

  return (
    <div className='form'>
      <label>E-mail</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      <div  onClick={handleLogin} className="empty"><Button text="Register"/></div>
      <span onClick={() => setLoginState(!loginState)}>Login</span>
    </div>
  )
}

export default RegisterForm