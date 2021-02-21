import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import headerItems from "../../assets/header.json";
import { ReactComponent as Logo } from "../../assets/amzinai-alkanas.red.svg";

import {
  HeaderContainer,
  LogoContainer,
  TitleContainer,
  TitleLink,
} from "./header.styles";

const Header = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);
  const [isHeaderTop, setIsHeaderTop] = useState(true);

  // TODO: header is transparent on different pages, should not.
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setIsHeaderTop(false);
    } else {
      setIsHeaderTop(true);
    }
  };

  return (
    <HeaderContainer isHeaderTop={isHeaderTop}>
      <LogoContainer to="/" onClick={() => setSelectedItem("/")}>
        <Logo />
      </LogoContainer>
      <TitleContainer>
        {headerItems.map((headerItem) => (
          <TitleLink
            key={headerItem.id}
            to={headerItem.link}
            selected={selectedItem === headerItem.link}
            onClick={() => setSelectedItem(headerItem.link)}
          >
            {headerItem.title.toUpperCase()}
          </TitleLink>
        ))}
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
