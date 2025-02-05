import React, { useRef } from 'react';
import { Container } from './style';
import { Button, Input } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const VerifyPage = () => {
    const navigate = useNavigate();
    const codeRef = useRef(null);
    const emailRef = useRef(null);

    const verifyHandler = () => {
        const formData = {
            code: codeRef.current.value,
            email: emailRef.current.value,
        };
        // const token = Cookies.get('refreshToken')
        // const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {}

        axios.post('https://cars-1-pku7.onrender.com/verify', formData)
            .then((res) => {
                console.log("Success:", res.data);
                navigate('/root');
            })
            .catch((err) => {
                console.error("API Error:", err);
            });
    };

    return (
        <Container>
            <Input inputRef={emailRef} placeholder='Enter email' type="email" />
            <Input inputRef={codeRef} placeholder='Enter code' type="text" />
            <Button>
                <NavLink to='/register'>Register</NavLink>
            </Button>
            <Button onClick={verifyHandler}>Verify</Button>
        </Container>
    );
};

export default VerifyPage;
