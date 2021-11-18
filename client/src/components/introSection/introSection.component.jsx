import React from 'react';

import { IntroWrapper, IntroContainer, Heading, SubHeading } from './introSection.styles';
import { Button } from '..';

const IntroSection = (props) => {
  return (
    <IntroContainer>
      <IntroWrapper>
        <Heading>{props.heading}</Heading>
        <SubHeading>{props.subheading}</SubHeading>
        <Button to={props.linkTo} data-type="link">
          {props.buttonText}
        </Button>
      </IntroWrapper>
    </IntroContainer>
  );
};

export default IntroSection;
