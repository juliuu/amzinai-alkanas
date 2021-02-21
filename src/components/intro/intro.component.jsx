import React from "react";

import {
  IntroWrapper,
  IntroContainer,
  Heading,
  SubHeading,
  AboutLink,
} from "./intro.styles";

const Intro = () => (
  <IntroContainer>
    <IntroWrapper>
      <Heading>Labas! Nori išbandyti naujus, patikimus restoranus ar atrasti naujų receptų?</Heading>
      <SubHeading>Sveikas atvykęs į mano tinklaraštį!</SubHeading>
      {/* TODO: extract AboutLink to a separate button component */}
      <AboutLink to="/apie">Apie mane</AboutLink>
    </IntroWrapper>
  </IntroContainer>
);

export default Intro;
