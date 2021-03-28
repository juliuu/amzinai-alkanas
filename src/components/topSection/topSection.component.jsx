import React from "react";

import {
  TopContainer,
  TopWrapper,
  TopList,
  ListItem,
  ItemNumber,
  ItemName,
  ItemRating,
} from "./topSection.styles";
import SectionHeading from "../sectionHeading/sectionHeading.component";

const TopSection = (props) => {
  const { title, linkTo, topList } = props;
  console.log("TOP LIST --> ", topList);
  const heading = { title, linkTo };

  return (
    <TopContainer>
      <TopWrapper>
        <SectionHeading {...heading} />
        <TopList>
          {topList.map((item) => (
            <ListItem key={item.id}>
              <ItemNumber>{item.id}.</ItemNumber>
              <ItemName>{item.name.toUpperCase()}</ItemName>
              <ItemRating>{item.rating}</ItemRating>
            </ListItem>
          ))}
        </TopList>
      </TopWrapper>
    </TopContainer>
  );
};

export default TopSection;
