import React from "react";

import { CardWrapper, Image } from "./imageCard.styles";

const ImageCard = ({ name, url }) => {
  return (
    <CardWrapper>
      <h4>{name}</h4>
      <Image>{url}</Image>
    </CardWrapper>
  );
};

export default ImageCard;
