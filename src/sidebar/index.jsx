import React from "react";
import { Container } from "./style";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import Root from "../root";
import MainPage from "../pages/main";
import VerifyPage from "../pages/verify";
import QuestionPage from "../pages/question";

const Sidebar = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/root" element={<Root />} >
          <Route path="/root" element={<MainPage />} />
          <Route path="asosiy" element={<MainPage />} />
          <Route path="e'lonlar" element={<MainPage />} />
          <Route path="savollar" element={<QuestionPage />} />
        </Route>

      </Routes>
    </Container>
  );
};

export default Sidebar;
