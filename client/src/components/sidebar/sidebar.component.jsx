import React from 'react';

import { SidebarContainer } from './sidebar.styles';
import SidebarCard from '../sectionCard/sectionCard.component';

import { toDate } from '../../utils';

const SideBar = ({ children, title, linkTo, linkText }) => {
  return (
    <SidebarContainer>
      <h3>{title.toUpperCase()}</h3>
      {children.map((item) => (
        <SidebarCard
          key={item._id}
          imgUrl={item.imgUrl}
          heading={item.heading}
          intro={item.intro}
          rating={item.rating}
          to={`${linkTo}/${item._id}`}
          linkText={linkText}
          timestamp={toDate(item.timestamp)}
        />
      ))}
    </SidebarContainer>
  );
};

export default SideBar;
