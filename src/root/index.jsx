import React from "react";
import {
  Body,
  Container,
  Link,
  WrapperLeft,
  WrapperRight,
  WrapperTop,
} from "./style";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Root = () => {
  return (
    <Container>
      <WrapperLeft>
        <Link to="asosiy">Asosiy</Link>
        <Link to="asosiy">Asosiy</Link>
        <Link to="asosiy">Asosiy</Link>
      </WrapperLeft>

      <WrapperRight>
        <WrapperTop>
          <Navbar />
        </WrapperTop>
        <Body>
          <Outlet />
        </Body>
      </WrapperRight>
    </Container>
  );
};

export default Root;
