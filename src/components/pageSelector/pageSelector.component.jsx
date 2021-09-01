import React, { useState } from 'react';

import { SelectorWrapper, ArrowPrevious, PageNumber, ArrowNext } from './pageSelector.styles.jsx';

const PageSelector = ({ selectedPage, pageCount, onPageChange }) => {
  const [selected, setSelected] = useState(selectedPage);
  let pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(
      <PageNumber key={i} isSelected={selected === i ? true : false} onClick={() => handlePageSelect(i)}>
        {i}
      </PageNumber>
    );
  }

  const handlePageSelect = (value) => {
    setSelected(value);
    onPageChange(value);
  };

  const handlePageChange = (value) => {
    setSelected(selectedPage + value);
    onPageChange(selectedPage + value);
  };

  return (
    <SelectorWrapper>
      <ArrowPrevious onClick={() => handlePageChange(-1)} />
      {pageNumbers}
      <ArrowNext onClick={() => handlePageChange(1)} />
    </SelectorWrapper>
  );
};

export default PageSelector;
