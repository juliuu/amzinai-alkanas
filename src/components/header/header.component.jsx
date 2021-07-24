import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  TitleContainer,
  TitleLink,
  Logo,
} from "./header.styles";

const handleScroll = (ref) => {
  ref.current.scrollIntoView();
};

const Header = ({ refs }) => {
  const { pathname, hash } = useLocation();
  const [selectedItem, setSelectedItem] = useState(pathname);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
    if (pathname !== "/" || hash) setIsHeaderTransparent(false);
    else setIsHeaderTransparent(true);

    switch (hash) {
      case "#about":
        handleScroll(refs.aboutRef);
        break;
      case "#contact":
        handleScroll(refs.contactRef);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }
  }, [pathname, hash, refs]);

  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setIsHeaderTransparent(false);
    } else {
      setIsHeaderTransparent(true);
    }
  };

  return (
    <HeaderContainer isHeaderTransparent={isHeaderTransparent}>
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
          <span>
            <TitleLink to="/#about" onClick={() => setSelectedItem("/")}>
              <h5>APIE MANE</h5>
            </TitleLink>
            <TitleLink to="/#contact" onClick={() => setSelectedItem("/")}>
              <h5>SUSISIEKIME</h5>
            </TitleLink>
          </span>
        </TitleContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
