import React from "react";

import { PreviewContainer } from "./previewSection.styles";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import SectionCardCarousel from "../sectionCardCarousel/sectionCardCarousel.component";
import Button from "../button/button.component";

const PreviewSection = ({ 0: props }) => {
  const { title, linkTo, linkText, articles } = props;
  const carousel = { linkText, articles, linkTo };
  const heading = { title, linkTo };
  return (
    <PreviewContainer>
      <SectionHeading {...heading} />
      <SectionCardCarousel {...carousel} />
      <Button to={linkTo}>Daugiau</Button>
    </PreviewContainer>
  );
};

export default PreviewSection;
