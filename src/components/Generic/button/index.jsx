import React from "react";
import { Container } from "./style";

const GenericButton = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default GenericButton;
