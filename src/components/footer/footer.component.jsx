import React from 'react';

import { FooterContainer, FooterLogo, NavContainer, NavWrapper, NavItem, SocialContainer, SocialIconWrapper } from './footer.styles';

import SocialIcon from '../socialIcon/socialIcon.component';

//TODO: finish with the styles
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo />
      <NavContainer>
        <NavWrapper>
          <NavItem>PAGRINDINIS</NavItem>
          <NavItem>RESTORANŲ APŽVALGOS</NavItem>
          <NavItem>RESTORANŲ TOP 10</NavItem>
        </NavWrapper>
        <NavWrapper>
          <NavItem>RECEPTAI</NavItem>
          <NavItem>APIE MANE</NavItem>
          <NavItem>SUSISIEKIME</NavItem>
        </NavWrapper>
      </NavContainer>
      <SocialContainer>
        <SocialIconWrapper>
          <div>
            <SocialIcon icon="facebook" link="https://facebook.com" />
            @amzinai.alkanas
            <SocialIcon icon="gmail" link="https://gmail.com" />
            amzinai.alkanas@gmail.com
          </div>
          <div>
            <SocialIcon icon="instagram" link="https://instagram.com" />
            @amzinai.alkanas
            <SocialIcon icon="youtube" link="https://youtube.com" />
            @amzinai.alkanas
          </div>
        </SocialIconWrapper>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
