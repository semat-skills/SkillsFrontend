import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import { ErrorPage } from "./Pages/ErrorPage";
import { Login } from "./Pages/LoginPage/Login";
import { Signup } from "./Pages/SignupPage/Signup";
import { FunctionalPage } from "./Pages/FunctionalPage/FunctionalPage";
import { NewCardPage } from "./Pages/NewCardPage/NewCardPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/functional" element={<FunctionalPage />} />
      <Route path="/newcard" element={<NewCardPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
