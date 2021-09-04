import React, { useEffect, useState } from 'react';

import { PreviewContainer, PreviewWrapper } from './previewSection.styles';
import SectionHeading from '../sectionHeading/sectionHeading.component';
import SectionCardCarousel from '../sectionCardCarousel/sectionCardCarousel.component';
import Button from '../button/button.component';

const PreviewSection = ({ title, linkTo, linkText, dropdown, data }) => {
  const heading = { title, dropdown };

  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(dropdown[0]._id);

  useEffect(() => {
    const size = 3; // TODO: set to 9 and limit front end to show 3 elements, hide the rest
    const result = data.sort((a, b) => b[filter] - a[filter]).slice(0, size);
    setFilteredData(result);
  }, [filter, data]);

  const carousel = { linkText, data: filteredData, linkTo };

  return (
    <PreviewContainer>
      <PreviewWrapper>
        <SectionHeading {...heading} onFilterChange={(value) => setFilter(value)} />
        <SectionCardCarousel {...carousel} />
        <Button to={linkTo}>Daugiau</Button>
      </PreviewWrapper>
    </PreviewContainer>
  );
};

export default PreviewSection;
