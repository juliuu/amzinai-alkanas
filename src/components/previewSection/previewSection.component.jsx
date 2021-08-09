import React, { useEffect, useState } from "react";

import { PreviewContainer, PreviewWrapper } from "./previewSection.styles";
import SectionHeading from "../sectionHeading/sectionHeading.component";
import SectionCardCarousel from "../sectionCardCarousel/sectionCardCarousel.component";
import Button from "../button/button.component";

const PreviewSection = ({ title, linkTo, linkText, articles, dropdown }) => {
  const heading = { title, dropdown };

  const [filteredArticles, setFilteredArticles] = useState([]);
  const [filter, setFilter] = useState(dropdown[0].id);

  useEffect(() => {
    const size = 3; // TODO: set to 9 and limit front ent to show 3 elements, hide the rest
    const result = articles
      .sort((a, b) => b[filter] - a[filter])
      .slice(0, size);
    setFilteredArticles(result);
  }, [filter, articles]);

  const carousel = { linkText, articles: filteredArticles, linkTo };

  return (
    <PreviewContainer>
      <PreviewWrapper>
        <SectionHeading
          {...heading}
          onFilterChange={(value) => setFilter(value)}
        />
        <SectionCardCarousel {...carousel} />
        <Button to={linkTo}>Daugiau</Button>
      </PreviewWrapper>
    </PreviewContainer>
  );
};

export default PreviewSection;
