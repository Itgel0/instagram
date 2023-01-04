import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



export const LogIn = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const Alert = () => {
    alert(
      `email: ${inputEmail.current.value}  password: ${inputPassword.current.value}`
    );
  };

  const logIn = () => {
    localStorage.setItem('uid', 'hello')
  }

  return (
    <div className="container">
      
      <div className="signUp">
        <div className="Big">LOG IN</div>
        <div className="line"></div>
      </div>
      <div className="Name">
        <p>Email</p>
        <input className="typer" ref={inputEmail} placeholder="Enter your gmail"></input>
        <div className="line2"></div>
      </div>
      <div className="Email">
        <p>Password</p>
        <input className="typer" ref={inputPassword} placeholder="Enter your password"></input>
        <div className="line3"></div>
      </div>
      <button className="blueBtn" onClick={Alert}>SUBMIT</button> 
    </div>
  );
};

export default LogIn;


// import React from 'react';

// export const SignInPage = () => {
//     return (
//         <div>
//             Sign in
//         </div>
//     )
// }