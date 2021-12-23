import React from 'react';

import { SectionHeadingContainer, ButtonWrapper } from './sectionHeading.styles';
import { Button } from '..';

const SectionHeading = ({ title, dropdown, onFilterChange }) => {
  return (
    <SectionHeadingContainer>
      <ButtonWrapper>
        <Button data-type="dropdown" options={dropdown} onFilterChange={onFilterChange} />
      </ButtonWrapper>
      <h1>{title.toUpperCase()}</h1>
    </SectionHeadingContainer>
  );
};

export default SectionHeading;
