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
    {title.toUpperCase()}
  </SectionHeadingContainer>
);

export default SectionHeading;
