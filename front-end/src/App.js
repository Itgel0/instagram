import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import LogIn from "./pages/log-in-page";
import SignUpPage from "./pages/sign-up-page";
import "./styles/App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
