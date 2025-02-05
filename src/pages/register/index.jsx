import React, { useState } from "react";
import { Container } from "./style";
import { Button, Input } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = () => {
    axios
      .post("https://cars-1-pku7.onrender.com/register", formData)
      .then((res) => {
        console.log("Success:", res.data);
        // toast.success("Emailni tekshiring kod jonatildi", { autoClose: 1500 })
        navigate("/verify");
      })
      .catch((err) => {
        alert(err.response.data.msg);
        toast.error("Error", { autoClose: 1500 });
      });
  };

  return (
    <Container>
      <Input name="username" placeholder="User name" onChange={handleChange} />
      <Input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <Input name="role" placeholder="Role" onChange={handleChange} />
      <Button onClick={registerHandler}>Register</Button>
      <NavLink to="/login">Login</NavLink>
    </Container>
  );
};

export default RegisterPage;
