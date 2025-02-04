import React, { useState } from 'react';
import { Container } from './style';
import { Button, Input } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const registerHandler = () => {
        axios.post('https://cars-1-pku7.onrender.com/register', formData)
            .then((res) => {
                console.log("Success:", res.data);
                navigate('/verify');
            })
            .catch((err) => {
                console.error("API Error:", err);
            });
    };

    return (
        <Container>
            <Input name="username" placeholder='User name' onChange={handleChange} />
            <Input name="email" placeholder='Email' type="email" onChange={handleChange} />
            <Input name="password" placeholder='Password' type="password" onChange={handleChange} />
            <Input name="role" placeholder='Role' onChange={handleChange} />
            <Button onClick={registerHandler}>Register</Button>
            <NavLink to='/login'>Login</NavLink>
        </Container>
    );
};

export default RegisterPage;
