import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage/HomePage";
import { ErrorPage } from "./Components/Pages/ErrorPage";
import { Login } from "./Components/Pages/LoginP/Login";
import { Signup } from "./Components/Pages/SignupP/Signup";

const App: React.FC = () => {

 
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
         <Route path="/login" element={<Login />}/> 
           <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>
  );
};

export default App;

