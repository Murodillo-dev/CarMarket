import React, { useRef } from "react";
import { Container } from "./style";
import { Button, FormControl, Input, OutlinedInput } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, Wrapper } from "../register/style";
import GenericButton from "../../components/Generic/button";

const VerifyPage = () => {
  const navigate = useNavigate();
  const codeRef = useRef(null);
  const emailRef = useRef(null);

  const verifyHandler = () => {
    const formData = {
      code: codeRef.current.value,
      email: emailRef.current.value,
    };
    axios
      .post("https://cars-1-pku7.onrender.com/verify", formData)
      .then((res) => {
        console.log("Success:", res.data);
        navigate("/root");
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          type="number"
          placeholder="Code"
          size="small"
          inputRef={codeRef}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          type="email"
          placeholder="Email"
          size="small"
          inputRef={emailRef}
        />
      </FormControl>

      <Wrapper>
        <GenericButton width={165}>
          <Link to="/register">Sign Up</Link>
        </GenericButton>
        <GenericButton width={165} onClick={verifyHandler}>
          Verify
        </GenericButton>
      </Wrapper>
    </Container>
  );
};

export default VerifyPage;
