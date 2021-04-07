import React from "react";

import { StarWrapper, StarIcon, Rating } from "./starRating.styles";

const StarRating = (props) => (
  <StarWrapper>
    <StarIcon />
    <Rating>{props.children}</Rating>
  </StarWrapper>
);

export default StarRating;
