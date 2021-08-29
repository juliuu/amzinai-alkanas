import React from "react";

import { SidebarContainer } from "./sidebar.styles";
import SidebarCard from "../sectionCard/sectionCard.component";

const SideBar = ({ children, title, linkTo, linkText }) => {
  return (
    <SidebarContainer>
      <h2>{title.toUpperCase()}</h2>
      {children.map((item) => (
        <SidebarCard
          key={item.id}
          imgUrl={item.imgUrl}
          heading={item.heading}
          intro={item.intro}
          rating={item.rating}
          to={`${linkTo}/${item.id}`}
          linkText={linkText}
        />
      ))}
    </SidebarContainer>
  );
};

export default SideBar;
