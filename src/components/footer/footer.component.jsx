import React from "react";

import {
  FooterContainer,
  LogoContainer,
  MenuContainer,
  SocialsContainer,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <LogoContainer>THIS IS LOGO</LogoContainer>
    <MenuContainer>
      <div>Pagrindinis</div>
      <div>Restoranų apžvalgos</div>
      <div>Receptai</div>
      <div>Apie mane</div>
      <div>Susisiekime</div>
    </MenuContainer>
    <SocialsContainer>
      <div>
        <div>FACEBOOK</div>
        <div>@amzinai.alkanas</div>
      </div>
      <div>
        <div>INSTAGRAM</div>
        <div>@amzinai.alkanas</div>
      </div>
      <div>
        <div>GMAIL</div>
        <div>amzinai.alkanas@gmail.com</div>
      </div>
      <div>
        <div>YOUTUBE</div>
        <div>@amzinai.alkanas</div>
      </div>
    </SocialsContainer>
  </FooterContainer>
);

export default Footer;