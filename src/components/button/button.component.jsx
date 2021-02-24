import React from "react";

import { StyledLink } from "./button.styles";

const Button = (props) => {
  // TODO: make button size responsive to text length
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
};

export default Button;
