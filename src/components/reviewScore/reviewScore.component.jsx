import React from "react";

import StarRating from "../starRating/starRating.component";

import { ScoreWrapper, ScoreComments } from "./reviewScore.styles";

const ReviewScore = (props) => {
  return (
    <ScoreWrapper>
      <StarRating>{props.rating}</StarRating>
      <ScoreComments>
        {() => {
          if (props.category) {
            return <b>{props.category.toUpperCase()}: </b>;
          }
        }}
        {props.comment}
      </ScoreComments>
    </ScoreWrapper>
  );
  // return <div> HELO </div>;
};

export default ReviewScore;
