import styled from "styled-components";
import plus from "../../assets/icons/plus.svg?react";
export const Plus = styled(plus)``;
export const Path = styled.div`
  color: #1a1d1f;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Box = styled.div`
  width: 20px;
  height: 35px;
  background-color: ${({ bg }) => (bg ? bg : "#ffd88d")};
  border-radius: 5px;
`;
export const Action = styled.div`
  display: flex;
  gap: 30px;
`;
