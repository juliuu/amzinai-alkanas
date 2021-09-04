import React from 'react';

import { SectionHeadingContainer } from './sectionHeading.styles';
import Dropdown from '../../components/dropdown/dropdown.component';

const SectionHeading = ({ title, dropdown, onFilterChange }) => {
  return (
    <SectionHeadingContainer>
      <Dropdown options={dropdown} onFilterChange={onFilterChange} />
      <h1>{title.toUpperCase()}</h1>
    </SectionHeadingContainer>
  );
};

export default SectionHeading;
