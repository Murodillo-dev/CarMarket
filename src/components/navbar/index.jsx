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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const outHandler = async () => {
    const token = Cookie.get("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.post("https://cars-1-pku7.onrender.com/logout", {}, config);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <WrapperLeft>
        <GenericButton onClick={outHandler} width={180}>
          Tizimdan chiqish
          <UserIcon />
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
