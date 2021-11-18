import React from 'react';

import { StyledCancelButton } from './button.styles';

const CancelButton = ({ children, ...restProps }) => {
  return <StyledCancelButton {...restProps}>{children}</StyledCancelButton>;
};

export default CancelButton;
