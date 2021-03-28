import React from "react";

import {
  IntroWrapper,
  IntroContainer,
  Heading,
  SubHeading,
} from "./introSection.styles";

import Button from "../button/button.component";

const IntroSection = (props) => {
  return (
    <IntroContainer>
      <IntroWrapper>
        <Heading>{props.heading}</Heading>
        <SubHeading>{props.subheading}</SubHeading>
        <Button to={props.linkTo}>{props.buttonText}</Button>
      </IntroWrapper>
    </IntroContainer>
  );
};

export default IntroSection;
