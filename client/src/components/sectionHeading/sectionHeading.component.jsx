import React from 'react';

import { SectionHeadingContainer } from './sectionHeading.styles';
import { Button } from '..';

const SectionHeading = ({ title, dropdown, onFilterChange }) => {
  return (
    <SectionHeadingContainer>
      <div>
        <Button data-type="dropdown" options={dropdown} onFilterChange={onFilterChange} />
      </div>
      <h1>{title.toUpperCase()}</h1>
    </SectionHeadingContainer>
  );
};

export default SectionHeading;
