import React from "react";
import { Footer } from "./Components/Features/Footer/Footer";
import { Login } from "./Components/Pages/Login/Login";
import { Signup } from "./Components/Pages/Signup/Signup";


import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage/HomePage";
import { ErrorPage } from "./Components/Pages/ErrorPage";

const App: React.FC = () => {

 
  return (
    <>
    {/* <MainContainer/>  */}
    {/* <Login></Login> */}
    {/* <Signup></Signup> */}

    <Routes>
        <Route path='/' element={<HomePage />} />
         <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
