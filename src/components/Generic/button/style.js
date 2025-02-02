import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background-color: ${({ bg }) => (bg ? bg : "#2A85FF")};
  width: ${({ width }) => (width ? `${width}px` : "200px")};
  height: ${({ height }) => (height ? `${height}px` : "48px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}%` : "12px"};
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ size }) => (size ? `${size}px` : "15px")};
  font-weight: ${({ weight }) => (weight ? `${weight}px` : "700")};
  &:active {
    transform: scale(0.98);
  }
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
`;
