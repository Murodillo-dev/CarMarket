import styled from "styled-components";
import exit from "../../assets/icons/exit.svg?react";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(112, 111, 111, 0.65);
`;
export const Wrapper = styled.div`
  max-width: 1200px;
  height: auto;
  border-radius: 15px;
  background-color: white;
  margin: auto;
  padding: 24px 32px 100px 32px;
  margin-top: 85px;
`;
export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
export const WrapperLeft = styled.div``;
export const WrapperRight = styled.div``;
export const Exit = styled(exit)``;
