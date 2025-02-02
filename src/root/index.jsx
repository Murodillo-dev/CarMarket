import React from "react";
import {
  Body,
  Container,
  Link,
  WrapperLeft,
  WrapperRight,
  WrapperTop,
} from "./style";
import { side } from "../utils/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Root = () => {
  return (
    <Container>
      <WrapperLeft>
        {side.map((value) => {
          const { icon: Icon } = value;
          return (
            <Link to={value.path} key={value.id}>
              <Icon />
              {value.title}
            </Link>
          );
        })}
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
