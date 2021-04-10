import React from "react";

import { StyledLink } from "./button.styles";

const Button = (props) => {
  // TODO: make button togglable to dropdown
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
};

export default Button;
