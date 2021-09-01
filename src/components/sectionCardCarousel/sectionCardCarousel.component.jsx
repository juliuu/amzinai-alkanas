import React from 'react';

import { SectionCardContainer } from './sectionCardCarousel.styles';
import SectionCard from '../sectionCard/sectionCard.component';

const SectionCardCarousel = (props) => {
  const { data, linkTo, linkText } = props;

  return (
    <SectionCardContainer>
      {data.map((item) => (
        <SectionCard
          key={item._id}
          imgUrl={item.imgUrl}
          heading={item.heading}
          intro={item.intro}
          rating={item.rating}
          to={linkTo}
          linkText={linkText}
        />
      ))}
    </SectionCardContainer>
  );
};

export default SectionCardCarousel;
