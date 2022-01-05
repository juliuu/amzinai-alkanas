import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { getSessionStorage } from '../../hooks/useStorage';
import { NavBackdrop, NavContainer, NavLogo, Logo, NavBar, NavLink, ButtonWrapper } from './header.styles';
import { Button } from '..';
import { breakpoints } from '../../global.styles';

const Header = () => {
  const { pathname, hash } = useLocation();
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });

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

  const handleMenuToggle = () => setIsMenuActive((previousState) => !previousState);

  useEffect(() => {
    const checkIfOutside = (event) => {
      if (
        isMenuActive &&
        ref.current &&
        buttonRef.current &&
        !ref.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuActive((previousState) => !previousState);
      }
    };

    document.addEventListener('mousedown', checkIfOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfOutside);
    };
  }, [isMenuActive]);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > breakpoints['_800'] && isMenuActive) {
      setIsMenuActive(false);
    }
  }, [size.width, isMenuActive]);

  return (
    <>
      {isMenuActive && <NavBackdrop />}
      <NavContainer isHeaderTransparent={isHeaderTransparent}>
        <NavLogo to="/">
          <Logo />
        </NavLogo>
        <NavBar ref={ref} isMenuActive={isMenuActive}>
          <div>
            <NavLink to="/" onClick={handleMenuToggle}>
              <h5>PAGRINDINIS</h5>
            </NavLink>
            <NavLink to="/apzvalgos" onClick={handleMenuToggle}>
              <h5>RESTORANŲ APŽVALGOS</h5>
            </NavLink>
            <NavLink to="/#top" data-active={hash === '#top'} onClick={handleMenuToggle}>
              <h5>RESTORANŲ TOP 10</h5>
            </NavLink>
            <NavLink to="/receptai" onClick={handleMenuToggle}>
              <h5>RECEPTAI</h5>
            </NavLink>
            {getSessionStorage('token') && (
              <NavLink to="/admin" onClick={handleMenuToggle}>
                <h5>ADMIN</h5>
              </NavLink>
            )}
          </div>
          <div>
            <NavLink to="/#apie" data-active={hash === '#apie'} onClick={handleMenuToggle}>
              <h5>APIE MANE</h5>
            </NavLink>
            <NavLink to="/#susisiekime" data-active={hash === '#susisiekime'} onClick={handleMenuToggle}>
              <h5>SUSISIEKIME</h5>
            </NavLink>
          </div>
        </NavBar>
        <ButtonWrapper ref={buttonRef}>
          {isMenuActive ? (
            <Button data-type="icon" color="white" onClick={handleMenuToggle} style={{ padding: '0' }}>
              <span className="material-icons-outlined">close</span>
            </Button>
          ) : (
            <Button data-type="icon" color="white" onClick={handleMenuToggle} style={{ padding: '0' }}>
              <span className="material-icons-outlined">menu</span>
            </Button>
          )}
        </ButtonWrapper>
      </NavContainer>
    </>
  );
};

export default Header;
