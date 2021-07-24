import React from "react";

import { SectionCardContainer } from "./sectionCardCarousel.styles";
import SectionCard from "../sectionCard/sectionCard.component";

const SectionCardCarousel = (props) => {
  const { articles, linkTo, linkText } = props;

  return (
    <SectionCardContainer>
      {articles.map((article) => (
        <SectionCard
          key={article.id}
          imgUrl={article.imgUrl}
          heading={article.heading}
          intro={article.intro}
          rating={article.rating}
          to={linkTo}
          linkText={linkText}
        />
      ))}
    </SectionCardContainer>
  );
};

export default SectionCardCarousel;
