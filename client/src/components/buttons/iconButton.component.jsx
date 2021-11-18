import React from 'react';

import { StyledIconButton } from './button.styles';

const IconButton = ({ children, ...restProps }) => {
  return <StyledIconButton {...restProps}>{children}</StyledIconButton>;
};

export default IconButton;
