import React from 'react';

import { PreviewContainer, PreviewWrapper } from './previewSection.styles';
import { Button, SectionHeading, SectionCardCarousel } from '..';

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
        <Button to={linkTo} data-type="link">
          Daugiau
        </Button>
      </PreviewWrapper>
    </PreviewContainer>
  );
};

export default PreviewSection;
