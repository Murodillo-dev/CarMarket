import styled from "styled-components";

export const Container = styled.div`
  color: ${({ color }) => (color ? color : "#33383f")};
  font-size: ${({size}) => (size ? `${size}px` : "14px")};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;
