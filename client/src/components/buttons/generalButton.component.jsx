import React from 'react';

import { StyledButton } from './button.styles';

const GeneralButton = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default GeneralButton;
