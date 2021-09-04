import React from 'react';

import StarRating from '../starRating/starRating.component';

import { ScoreWrapper, ScoreComments } from './reviewScore.styles';

const ReviewScore = (props) => {
  return (
    <ScoreWrapper>
      <StarRating>{props.rating}</StarRating>
      <ScoreComments>
        {props.category ? <b>{props.category.toUpperCase()}: </b> : null}
        {props.comment}
      </ScoreComments>
    </ScoreWrapper>
  );
};

export default ReviewScore;
