import React from 'react';

import {
  FooterContainer,
  FooterLogo,
  NavContainer,
  NavItem,
  NavLink,
  SocialContainer,
} from './footer.styles';

import SocialIcon from '../socialIcon/socialIcon.component';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo />
      <NavContainer>
        <div>
          <NavLink to="/">
            <h2>PAGRINDINIS</h2>
          </NavLink>
          <NavLink to="/apzvalgos">
            <h2>RESTORANŲ APŽVALGOS</h2>
          </NavLink>
          <NavLink to="/#top">
            <h2>RESTORANŲ TOP 10</h2>
          </NavLink>
        </div>
        <div>
          <NavLink to="/receptai">
            <h2>RECEPTAI</h2>
          </NavLink>
          <NavLink to="/#apie">
            <h2>APIE MANE</h2>
          </NavLink>
          <NavLink to="/#susisiekime">
            <h2>SUSISIEKITE</h2>
          </NavLink>
        </div>
      </NavContainer>
      <SocialContainer>
        <div>
          <SocialIcon icon="facebook" link="https://facebook.com">
            @amzinai.alkanas
          </SocialIcon>
          <SocialIcon icon="gmail" link="https://gmail.com">
            amzinai.alkanas@gmail.com
          </SocialIcon>
        </div>
        <div>
          <SocialIcon icon="instagram" link="https://instagram.com">
            @amzinai.alkanas
          </SocialIcon>
          <SocialIcon icon="youtube" link="https://youtube.com">
            @amzinai.alkanas
          </SocialIcon>
        </div>
      </SocialContainer>
    </FooterContainer>
  );
};

export default Footer;
