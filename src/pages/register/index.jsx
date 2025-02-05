import React, { useState } from "react";
import { Container, Link, Span, Wrapper } from "./style";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GenericButton from "../../components/Generic/button";
import LoadingBtn from "../../components/loading";
import { useForm } from "react-hook-form";
import Title from "../../components/Generic/title";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const registerHandler = (data) => {
    setIsLoading(true);
    axios
      .post("https://cars-1-pku7.onrender.com/register", data)
      .then((res) => {
        toast.success("Elektron pochtangizga kod jo'natildi", {
          autoClose: 2000,
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/verify");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.response?.data?.msg || "Error", {
          autoClose: 1500,
          position: "top-center",
        });
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(registerHandler)}>
      <Container>
        <Title size={50} mb={50}>
          Registration page
        </Title>

        <FormControl
          sx={{ m: 1, width: "350px", height: 65 }}
          variant="outlined"
        >
          <InputLabel size="small">User Name</InputLabel>
          <OutlinedInput
            size="small"
            {...register("username", { required: "Username is required" })}
            label="User Name"
          />
          {errors.username && (
            <Title mt={8} size={12} color="red">
              {errors.username.message}
            </Title>
          )}
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "350px", height: 65 }}
          variant="outlined"
        >
          <InputLabel size="small">Email</InputLabel>
          <OutlinedInput
            size="small"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            label="Email"
          />
          {errors.username && (
            <Title mt={8} size={12} color="red">
              {errors.email.message}
            </Title>
          )}
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "350px", height: 65 }}
          variant="outlined"
        >
          <InputLabel size="small">Password</InputLabel>
          <OutlinedInput
            size="small"
            {...register("password", { required: "Password is required" })}
            label="Password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.username && (
            <Title mt={8} size={12} color="red">
              {errors.password.message}
            </Title>
          )}
        </FormControl>

        <FormControl sx={{ m: 1, width: "350px", height: 65 }}>
          <InputLabel id="demo-simple-select-label" size="small">
            Role
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Role"
            {...register("role", { required: "Role is required" })}
            size="small"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
          {errors.username && (
            <Title mt={8} size={12} color="red">
              {errors.role.message}
            </Title>
          )}
        </FormControl>

        <Wrapper>
          {isLoading ? (
            <LoadingBtn />
          ) : (
            <GenericButton width={350} type="submit">
              Sign Up
            </GenericButton>
          )}
          <Span>
            Do you have account?
            <Link to="/"> Sign In</Link>
          </Span>
        </Wrapper>
        <ToastContainer />
      </Container>
    </form>
  );
};

export default RegisterPage;
