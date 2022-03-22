import React from 'react';

import { StyledTextIconButton } from './button.styles';

const IconButton = ({ children, ...restProps }) => {
  return <StyledTextIconButton {...restProps}>{children}</StyledTextIconButton>;
};

export default IconButton;
