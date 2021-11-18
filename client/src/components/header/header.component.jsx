import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getSessionStorage } from '../../hooks/useStorage';
import { NavContainer, NavLogo, Logo, NavBar, NavLink } from './header.styles';

const Header = () => {
  const { pathname, hash } = useLocation();
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);

  useEffect(() => {
    if (pathname !== '/' || hash) setIsHeaderTransparent(false);
    else setIsHeaderTransparent(true);
  }, [pathname, hash]);

  window.onscroll = () => {
    if (pathname === '/')
      return document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
        ? setIsHeaderTransparent(false)
        : setIsHeaderTransparent(true);

    return setIsHeaderTransparent(false);
  };

  return (
    <NavContainer isHeaderTransparent={isHeaderTransparent}>
      <NavLogo to="/">
        <Logo />
      </NavLogo>
      <NavBar>
        <div>
          <NavLink to="/">
            <h5>PAGRINDINIS</h5>
          </NavLink>
          <NavLink to="/apzvalgos">
            <h5>RESTORANŲ APŽVALGOS</h5>
          </NavLink>
          <NavLink to="/#top" data-active={hash === '#top'}>
            <h5>RESTORANŲ TOP 10</h5>
          </NavLink>
          <NavLink to="/receptai">
            <h5>RECEPTAI</h5>
          </NavLink>
          {getSessionStorage('token') && (
            <NavLink to="/admin">
              <h5>ADMIN</h5>
            </NavLink>
          )}
        </div>
        <div>
          <NavLink to="/#apie" data-active={hash === '#apie'}>
            <h5>APIE MANE</h5>
          </NavLink>
          <NavLink to="/#susisiekime" data-active={hash === '#susisiekime'}>
            <h5>SUSISIEKIME</h5>
          </NavLink>
        </div>
      </NavBar>
    </NavContainer>
  );
};

export default Header;
