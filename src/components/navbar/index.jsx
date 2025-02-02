import React from "react";
import {
  Container,
  UserIcon,
  WrapperLeft,
  WrapperRight,
  NofityOn,
  UserImg,
} from "./style";
import GenericButton from "../Generic/button";
import avatar from "../../assets/images/avatar.webp";

const Navbar = () => {
  return (
    <Container>
      <WrapperLeft>
        <GenericButton>
          {" "}
          <UserIcon />
          Asosiyga qaytish
        </GenericButton>
      </WrapperLeft>

      <WrapperRight>
        <NofityOn />
        <UserImg src={avatar} />
      </WrapperRight>
    </Container>
  );
};

export default Navbar;
