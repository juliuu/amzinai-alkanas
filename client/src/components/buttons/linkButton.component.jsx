import React from 'react';

import { StyledLink } from './button.styles';

const LinkButton = ({ children, ...restProps }) => {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

export default LinkButton;
