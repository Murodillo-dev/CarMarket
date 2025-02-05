import React, { useRef, useState } from "react";
import { Container } from "./style";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, Wrapper } from "../register/style";
import GenericButton from "../../components/Generic/button";
import { toast, ToastContainer } from "react-toastify";
import LoadingBtn from "../../components/loading";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginHandler = () => {
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (formData.email != "" && formData.password != "") {
      setIsLoading(true);
      axios
        .post("https://cars-1-pku7.onrender.com/login", formData)
        .then((res) => {
          console.log("Success:", res.data);
          if (res.data.createtoken) {
            Cookies.set("token", res.data.createtoken, { expires: 7 });
            Cookies.set("refreshToken", res.data.createtoken, { expires: 7 });
          }
          navigate("/root");
        })
        .catch((err) => {
          setIsLoading(false);
          console.error("API Error:", err);
          toast.error("Email va Parolni xato kiritildi", {
            position: "top-center",
          });
        });
    } else {
      toast.error("Email va Parolni kiritish majburiy", {
        position: "top-center",
      });
    }
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          type="email"
          placeholder="Email"
          size="small"
          inputRef={emailRef}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          size="small"
          placeholder="Password"
          inputRef={passwordRef}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Wrapper>
        <GenericButton width={165}>
          <Link to="/register">Sign Up</Link>
        </GenericButton>

        {isLoading ? (
          <LoadingBtn />
        ) : (
          <GenericButton width={165} onClick={loginHandler}>
            Login
          </GenericButton>
        )}
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
