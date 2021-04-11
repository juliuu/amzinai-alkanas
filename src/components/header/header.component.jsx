import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  TitleContainer,
  TitleLink,
  Logo,
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
      <HeaderWrapper>
        <LogoContainer to="/" onClick={() => setSelectedItem("/")}>
          <Logo />
        </LogoContainer>
        <TitleContainer>
          <span>
            <TitleLink
              to="/"
              selected={selectedItem === "/"}
              onClick={() => setSelectedItem("/")}
            >
              <h5>PAGRINDINIS</h5>
            </TitleLink>
            <TitleLink
              to="/apzvalgos"
              selected={selectedItem === "/apzvalgos"}
              onClick={() => setSelectedItem("/apzvalgos")}
            >
              <h5>RESTORANŲ APŽVALGOS</h5>
            </TitleLink>
            <TitleLink
              to="/top"
              selected={selectedItem === "/top"}
              onClick={() => setSelectedItem("/top")}
            >
              <h5>RESTORANŲ TOP 10</h5>
            </TitleLink>
            <TitleLink
              to="/receptai"
              selected={selectedItem === "/receptai"}
              onClick={() => setSelectedItem("/receptai")}
            >
              <h5>RECEPTAI</h5>
            </TitleLink>
          </span>
          {/* Coudn't find a better way to separate these sections without repeating code */}
          <span>
            <TitleLink
              to="/apie"
              selected={selectedItem === "/apie"}
              onClick={() => setSelectedItem("/apie")}
            >
              <h5>APIE MANE</h5>
            </TitleLink>
            <TitleLink
              to="/susisiekime"
              selected={selectedItem === "/susisiekime"}
              onClick={() => setSelectedItem("/susisiekime")}
            >
              <h5>SUSISIEKIME</h5>
            </TitleLink>
          </span>
        </TitleContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
