import React from 'react';

import { PreviewContainer, PreviewWrapper } from './previewSection.styles';
import SectionHeading from '../sectionHeading/sectionHeading.component';
import SectionCardCarousel from '../sectionCardCarousel/sectionCardCarousel.component';
import Button from '../button/button.component';

const PreviewSection = ({ title, linkTo, linkText, dropdown, data, onChange }) => {
  const heading = { title, dropdown };
  const carousel = { linkText, data, linkTo };

  const handleFilterChange = (value) => {
    onChange(value);
  };

  return (
    <PreviewContainer>
      <PreviewWrapper>
        <SectionHeading {...heading} onFilterChange={handleFilterChange} />
        <SectionCardCarousel {...carousel} />
        <Button to={linkTo}>Daugiau</Button>
      </PreviewWrapper>
    </PreviewContainer>
  );
};

export default PreviewSection;
