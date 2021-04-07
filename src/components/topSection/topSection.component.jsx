import React from "react";

import {
  TopContainer,
  TopWrapper,
  TopList,
  ListItem,
  ItemNumber,
  ItemName,
  HonorableMentions,
} from "./topSection.styles";

import SectionHeading from "../sectionHeading/sectionHeading.component";
import StarRating from "../starRating/starRating.component";

const TopSection = (props) => {
  const { title, linkTo, topList } = props;
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
              <StarRating>{item.rating}</StarRating>
            </ListItem>
          ))}
        </TopList>
        <HonorableMentions to="/apzvalgos">Į sąrašą nepatekę restoranai</HonorableMentions>
      </TopWrapper>
    </TopContainer>
  );
};

export default TopSection;
