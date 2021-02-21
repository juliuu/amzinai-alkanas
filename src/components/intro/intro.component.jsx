import React from "react";

import {
  IntroWrapper,
  IntroContainer,
  Heading,
  SubHeading,
} from "./intro.styles";

import Button from "../button/button.component";

const Intro = ({ 0: props }) => {
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

export default Intro;
