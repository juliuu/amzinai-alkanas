import React from "react";

import { PreviewContainer, PreviewWrapper } from "./previewSection.styles";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import SectionCardCarousel from "../sectionCardCarousel/sectionCardCarousel.component";
import Button from "../button/button.component";

const PreviewSection = (props) => {
  const { title, linkTo, linkText, articles } = props;
  const carousel = { linkText, articles, linkTo };
  const heading = { title, linkTo };
  return (
    <PreviewContainer>
      <PreviewWrapper>
        <SectionHeading {...heading} />
        <SectionCardCarousel {...carousel} />
        <Button to={linkTo}>Daugiau</Button>
      </PreviewWrapper>
    </PreviewContainer>
  );
};

export default PreviewSection;
