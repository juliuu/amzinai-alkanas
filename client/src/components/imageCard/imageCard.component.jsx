import React from 'react';

import { CardWrapper, Image } from './imageCard.styles';

const ImageCard = ({ name, url }) => {
  return (
    <CardWrapper>
      <p>{name}</p>
      <Image>{url}</Image>
    </CardWrapper>
  );
};

export default ImageCard;
