import styled from "styled-components";

export const Container = styled.div`
  color: #33383f;
  font-size: 14px;
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;
