import React from "react";

import {
  CardContainer,
  SomePicture,
  CardHeading,
  CardIntroduction,
  CardLink,
} from "./sectionCard.styles";

const SectionCard = (props) => {
  // TODO: add default values if children are missing
  const { imgUrl, heading, intro, to, linkText } = props;
  return (
    <CardContainer to={to}>
      <SomePicture>{imgUrl}</SomePicture>
      <CardHeading>{heading.toUpperCase()}</CardHeading>
      <CardIntroduction>{intro}</CardIntroduction>
      <CardLink>{linkText}</CardLink>
    </CardContainer>
  );
};

export default SectionCard;
