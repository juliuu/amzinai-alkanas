import React from 'react';

import { CardContainer, SomePicture, CardHeading, CardIntroduction, CardLink, CardRating } from './sectionCard.styles';

import StarRating from '../starRating/starRating.component';

// TODO: timestamp!!!!
const SectionCard = (props) => {
  const { imgUrl, heading, intro, rating, to, linkText } = props;
  return (
    <CardContainer to={to}>
      <CardRating>
        <StarRating>{rating}</StarRating>
      </CardRating>
      <SomePicture>{imgUrl}</SomePicture>
      <CardHeading>
        <h3>{heading.toUpperCase()}</h3>
        <span>2021-07-24</span>
      </CardHeading>
      <CardIntroduction>{intro}</CardIntroduction>
      <CardLink>{linkText}</CardLink>
    </CardContainer>
  );
};

export default SectionCard;
