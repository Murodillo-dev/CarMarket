import React from "react";
import { Container } from "./style";
import { side } from "../utils/sidebar";
import { Route, Routes } from "react-router-dom";
import Root from "../root";
import MainPage from "../pages/main";

const Sidebar = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Root />}>
        <Route path="/" element={<MainPage/>}/>
          {side.map((value) => {
            const Element = value.element;
            return <Route key={value.id} path={value.path} element={<Element />}></Route>;
          })}
        </Route>
      </Routes>
    </Container>
  );
};

export default Sidebar;
