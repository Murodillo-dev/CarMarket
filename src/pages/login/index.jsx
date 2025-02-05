import React, { useRef, useState } from "react";
import { Container } from "./style";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, Span, Wrapper } from "../register/style";
import GenericButton from "../../components/Generic/button";
import { toast, ToastContainer } from "react-toastify";
import LoadingBtn from "../../components/loading";
import { useForm } from "react-hook-form";
import Title from "../../components/Generic/title";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const loginHandler = async () => {
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (formData.email !== "" && formData.password !== "") {
      setIsLoading(true);
      setEmail("");
      setPassword("");

      try {
        const response = await axios.post(
          "https://cars-1-pku7.onrender.com/login",
          formData
        );
        console.log("Success:", response.data);

        if (response.data.createtoken) {
          Cookies.set("token", response.data.createtoken, { expires: 7 });
          Cookies.set("refreshToken", response.data.createtoken, {
            expires: 7,
          });
          navigate("/root");
        } else {
          setIsLoading(false);
          toast.error("Email va Parol xato kiritilgan", {
            position: "top-center",
          });
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    } else {
      setEmail("Email is required");
      setPassword("Password is required");
    }
  };

  return (
    <Container>
       <Title size={50} mb={50}>Login page</Title>
      <FormControl sx={{ m: 1, width: "350px", height: 65 }} variant="outlined">
        <InputLabel id="user-label" size="small">
          Email
        </InputLabel>
        <OutlinedInput
          labelId='id="email-label"'
          id="email-label"
          label="Email"
          type="email"
          size="small"
          inputRef={emailRef}
        />
        <Title color="red" size={12} mt={10}>
          {email}
        </Title>
      </FormControl>

      <FormControl sx={{ m: 1, width: "350px", height: 65 }} variant="outlined">
        <InputLabel id="password-label" size="small">
          Password
        </InputLabel>
        <OutlinedInput
          labelId='id="password-label"'
          id="password-label"
          label="Password"
          size="small"
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
        <Title color="red" size={12} mt={10}>
          {password}
        </Title>
      </FormControl>

      <Wrapper>
        {isLoading ? (
          <LoadingBtn />
        ) : (
          <GenericButton width={350} onClick={loginHandler}>
            Login
          </GenericButton>
        )}

        <Span>
          Don't you have an account?
          <Link to="/register">Sign Up</Link>
        </Span>
      </Wrapper>

      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
