import React from 'react';

import {
  CardContainer,
  CardPicture,
  CardHeading,
  CardIntroduction,
  CardLink,
  CardRating,
} from './sectionCard.styles';

import StarRating from '../starRating/starRating.component';

const SectionCard = (props) => {
  const { imgUrl, heading, intro, rating, to, linkText, timestamp } = props;
  return (
    <CardContainer to={to}>
      <CardRating>
        <StarRating>{rating}</StarRating>
      </CardRating>
      <CardPicture>{imgUrl}</CardPicture>
      <CardHeading>
        <h3>{heading.toUpperCase()}</h3>
        <span>{timestamp}</span>
      </CardHeading>
      <CardIntroduction>{intro}</CardIntroduction>
      <CardLink>{linkText}</CardLink>
    </CardContainer>
  );
};

export default SectionCard;
