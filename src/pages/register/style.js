import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
`
export const Wrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
gap:20px;
`
export const Link = styled(NavLink)`
text-decoration:none;
display: flex;
justify-content:center;
align-items:center;
width: 100%;
height: 100%;
color:white
`