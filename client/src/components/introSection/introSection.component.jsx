import React from 'react';

import { IntroContainer, IntroWrapper, ShadowWrapper, Heading, SubHeading } from './introSection.styles';
import { Button } from '..';

const IntroSection = (props) => {
  return (
    <IntroContainer>
      <ShadowWrapper>
        <IntroWrapper>
          <Heading>{props.heading}</Heading>
          <SubHeading>{props.subheading}</SubHeading>
          <Button to={props.linkTo} data-type="link">
            {props.buttonText}
          </Button>
        </IntroWrapper>
      </ShadowWrapper>
    </IntroContainer>
  );
};

export default IntroSection;
