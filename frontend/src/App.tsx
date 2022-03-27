import React from "react";
import { Login1 } from "./Components/Pages/Login/Login";
import { Signup } from "./Components/Pages/Signup/draft/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage/HomePage";
import { ErrorPage } from "./Components/Pages/ErrorPage";
import LoginForm from './Components/Pages/LoginP/LoginForm'
import SignupForm from "./Components/Pages/Signup/SignupForm";

const App: React.FC = () => {

 
  return (
    <>
    {/* <div>hi</div> */}
    {/* <HomePage /> */}
    {/* <Login /> */}
    {/* <Login /> */}
    <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/' element={<HomePage />} />
         <Route path="/login" element={<LoginForm />}/> 
         <Route path="/login2" element={<Login1 />}/> 
           <Route path="/signup" element={<SignupForm />} />
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>
    </>
  );
};

export default App;

