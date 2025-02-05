import React, { useState } from "react";
import { Container, Link, Wrapper } from "./style";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GenericButton from "../../components/Generic/button";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = () => {
    axios
      .post("https://cars-1-pku7.onrender.com/register", formData)
      .then((res) => {
        console.log("Success:", res.data);
        navigate("/verify");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        toast.error("Error", { autoClose: 1500 });
      });
  };

  return (
    <Container>
      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          type="text"
          name="username"
          placeholder="User name"
          size="small"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          type="email"
          name="email"
          placeholder="Email"
          size="small"
          onChange={handleChange}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          name="password"
          size="small"
          placeholder="Password"
          onChange={handleChange}
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

      <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
        <OutlinedInput
          type="role"
          name="Role"
          placeholder="Role"
          size="small"
          onChange={handleChange}
        />
      </FormControl>
      <Wrapper>
        <GenericButton width={165} onClick={registerHandler}>
          Sign Up
        </GenericButton>
        <GenericButton width={165}>
          <Link to="/login">Sign In</Link>
        </GenericButton>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
