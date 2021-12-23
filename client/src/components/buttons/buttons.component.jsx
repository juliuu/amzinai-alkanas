import React from 'react';

import LinkButton from './linkButton.component';
import LoadingButton from './loadingButton.component';
import GeneralButton from './generalButton.component';
import IconButton from './iconButton.component';
import CancelButton from './cancelButton.component';
import Dropdown from './dropdown.component';

const Button = (props) => {
  switch (props['data-type']) {
    case 'general':
      return <GeneralButton {...props} />;
    case 'link':
      return <LinkButton {...props} />;
    case 'loading':
      return <LoadingButton {...props} />;
    case 'cancel':
      return <CancelButton {...props} />;
    case 'icon':
      return <IconButton {...props} />;
    case 'dropdown':
      return <Dropdown {...props} />;
    default:
      return <GeneralButton {...props} />;
  }
};

export default Button;
