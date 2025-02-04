import React, { useRef } from 'react';
import { Container } from './style';
import { Button, Input } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const loginHandler = () => {
        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axios.post('https://cars-1-pku7.onrender.com/login', formData)
            .then((res) => {
                console.log("Success:", res.data);
                if (res.data.createtoken) {
                    Cookies.set('token', res.data.createtoken, { expires: 7 });
                }
                navigate('/root');
            })
            .catch((err) => {
                console.error("API Error:", err);
            });
    };

    return (
        <Container>
            <Input inputRef={emailRef} placeholder='Email' type="email" />
            <Input inputRef={passwordRef} placeholder='Password' type="password" />
            <Button>
                <NavLink to='/register'>Register</NavLink>
            </Button>
            <Button onClick={loginHandler}>Login</Button>
        </Container>
    );
};

export default LoginPage;
