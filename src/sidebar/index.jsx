import React from "react";
import { Container } from "./style";
import { side } from "../utils/sidebar";
import { Route, Routes } from "react-router-dom";
import Root from "../root";

const Sidebar = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Root />}>
          {side.map((value) => {
            const Element = value.element;
            return <Route path={value.path} element={<Element />}></Route>;
          })}
        </Route>
      </Routes>
    </Container>
  );
};

export default Sidebar;
