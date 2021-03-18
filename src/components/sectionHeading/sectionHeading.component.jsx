import React from "react";

import {
  SectionHeadingContainer,
  ButtonWrapper,
} from "./sectionHeading.styles";
import Button from "../../components/button/button.component"; // TODO: change to dropdown

const SectionHeading = ({ title, linkTo }) => (
  <SectionHeadingContainer>
    <ButtonWrapper>
      <Button to={linkTo}>Test Button</Button>
    </ButtonWrapper>
    <h1>{title.toUpperCase()}</h1>
  </SectionHeadingContainer>
);

export default SectionHeading;
