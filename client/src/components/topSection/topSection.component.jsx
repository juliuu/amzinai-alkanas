import React from 'react';

import { TopContainer, TopWrapper, ListWrapper, TopList, ListItem, ItemNumber, ItemName } from './topSection.styles';
import { SectionHeading, StarRating } from '..';

const TopSection = ({ title, dropdown, data, onChange }) => {
  const heading = { title, dropdown };

  const firstPart = data.slice(0, 5);
  const secondPart = data.slice(5, 10);

  const handleFilterChange = (value) => {
    onChange(value);
  };

  return (
    <TopContainer id="#top">
      <TopWrapper>
        <SectionHeading {...heading} onFilterChange={handleFilterChange} />
        <ListWrapper>
          <TopList>
            {firstPart.map((item, index) => (
              <ListItem key={item._id}>
                <ItemNumber>{index + 1}.</ItemNumber>
                <ItemName>{item.heading.toUpperCase()}</ItemName>
                <StarRating>{item.rating}</StarRating>
              </ListItem>
            ))}
          </TopList>
          <TopList>
            {secondPart.map((item, index) => (
              <ListItem key={item._id}>
                <ItemNumber>{index + 6}.</ItemNumber>
                <ItemName>{item.heading.toUpperCase()}</ItemName>
                <StarRating>{item.rating}</StarRating>
              </ListItem>
            ))}
          </TopList>
        </ListWrapper>
      </TopWrapper>
    </TopContainer>
  );
};

export default TopSection;
