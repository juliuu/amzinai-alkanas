import React from "react";

import {
  TopContainer,
  TopWrapper,
  ListWrapper,
  TopList,
  ListItem,
  ItemNumber,
  ItemName,
} from "./topSection.styles";

import SectionHeading from "../sectionHeading/sectionHeading.component";
import StarRating from "../starRating/starRating.component";

const TopSection = (props) => {
  const { title, linkTo, topList } = props;
  const heading = { title, linkTo };

  const firstPart = topList.slice(0, 5);
  const secondPart = topList.slice(5, 10);

  return (
    <TopContainer>
      <TopWrapper>
        <SectionHeading {...heading} />
        <ListWrapper>
          <TopList>
            {firstPart.map((item) => (
              <ListItem key={item.id}>
                <ItemNumber>{item.id}.</ItemNumber>
                <ItemName>{item.name.toUpperCase()}</ItemName>
                <StarRating>{item.rating}</StarRating>
              </ListItem>
            ))}
          </TopList>
          <TopList>
            {secondPart.map((item) => (
              <ListItem key={item.id}>
                <ItemNumber>{item.id}.</ItemNumber>
                <ItemName>{item.name.toUpperCase()}</ItemName>
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
