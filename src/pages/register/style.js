import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  color: #6f767e;
  font-weight: 400;
`;
export const Span = styled.span`
  color: #6f767e;
  font-weight: 400;
`;
