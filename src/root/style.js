import { NavLink } from "react-router-dom";
import styled from "styled-components";
import main from '../assets/icons/main.svg?react'
import question from '../assets/icons/question.svg?react'
import store from '../assets/icons/store.svg?react'

export const Container = styled.div`
  display: flex;
`;
export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 20%;
  height: 100vh;
  background-color: white;
  padding-left: 36px;
  padding-top: 80px;
`;

export const WrapperRight = styled.div`
  width: 80%;
  height: 100vh;
`;

export const WrapperTop = styled.div`
  width: 100%;
  height: 12vh;
  border-left: 1.7px solid rgb(228, 228, 228);
  background-color: white;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  text-decoration: none;
  color: #6f767e;
  font-size: 17px;
`;

export const Body = styled.div`
  padding: 20px;
  height: 88vh;
  background-color: rgb(228, 228, 228);
`;

export const MainIcon = styled(main)``
export const QuestionIcon = styled(question)``
export const StoreIcon = styled(store)``