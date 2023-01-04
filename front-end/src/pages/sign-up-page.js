import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/SignUp.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export const SignUpPage = () => {
  const inputEmail = useRef();
  const inputPass = useRef();

  // const Alert = () => {
  //   alert(
  //     `name: ${inputName.current.value}  email: ${inputEmail.current.value}`
  //   );
  // };

  const signUp = async () => {
    const res = await axios.post("http://localhost:8000/user", {
      email: inputEmail.current.value,
      password: inputPass.current.value,
    });

    alert('user created')
  };

  return (
    <div className="container">
      <div className="signUp">
        <div className="Big">SIGN UP</div>
        <div className="line"></div>
      </div>
      <div className="Name">
        <p>Email</p>
        <input
          className="typer"
          ref={inputEmail}
          placeholder="Enter your name"
        ></input>
        <div className="line2"></div>
      </div>
      <div className="Email">
        <p>Password</p>
        <input
          className="typer"
          ref={inputPass}
          placeholder="Enter your gmail"
        ></input>
        <div className="line3"></div>
      </div>
      <button className="blueBtn" onClick={signUp}>
        SUBMIT
      </button>
    </div>
  );
};

export default SignUpPage;

// import React from 'react';

// export const SignInPage = () => {
//     return (
//         <div>
//             Sign in
//         </div>
//     )
// }
