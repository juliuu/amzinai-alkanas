import React, { useEffect, useState } from 'react';

import { TopContainer, TopWrapper, ListWrapper, TopList, ListItem, ItemNumber, ItemName } from './topSection.styles';

import SectionHeading from '../sectionHeading/sectionHeading.component';
import StarRating from '../starRating/starRating.component';
import Button from '../button/button.component';

const TopSection = ({ refs, title, dropdown, data }) => {
  const heading = { title, dropdown };

  const [firstPart, setFirstPart] = useState([]);
  const [secondPart, setSecondPart] = useState([]);

  const [filter, setFilter] = useState(dropdown[0]._id);

  useEffect(() => {
    const result = data.filter((item) => item.type === filter).sort((a, b) => b.rating - a.rating);

    setFirstPart(result.slice(0, 5));
    setSecondPart(result.slice(5, 10));
  }, [filter, data]);

  return (
    <TopContainer ref={refs.topRef}>
      <TopWrapper>
        <SectionHeading {...heading} onFilterChange={(value) => setFilter(value)} />
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
        <Button to="/apzvalgos">Daugiau</Button>
      </TopWrapper>
    </TopContainer>
  );
};

export default TopSection;
