import React from "react";
import {
  Body,
  Container,
  Link,
  MainIcon,
  QuestionIcon,
  StoreIcon,
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
        <Link to="asosiy"><MainIcon /> Asosiy</Link>
        <Link to="e'lonlar"> <StoreIcon/> E'lonlar</Link>
        <Link to="savollar"> <QuestionIcon /> Savollar</Link>
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
