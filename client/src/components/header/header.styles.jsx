import styled from 'styled-components';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/svg/amzinai-alkanas.svg';

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 3.6rem;
  padding: 0 clamp(1rem, calc((100vw - var(--page-layout-width)) / 2), 20vw);
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isHeaderTransparent ? 'transparent' : '#000000')};
  transition: all 0.5s ease;
  position: fixed;
  z-index: 100;
`;

export const NavLogo = styled(ReactNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.833rem;
  height: 100%;
`;

export const Logo = styled(ReactLogo)`
  width: auto;
  height: 80%;
  fill: red;
`;

export const NavBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: space-between;

    > :last-child {
      padding-right: 0;
    }
  }
`;

export const NavLink = styled(ReactNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 100%;
  padding: 0 0.833rem;
  text-decoration: none;

  &.active {
    color: ${(props) => (props['data-active'] === undefined || props['data-active'] ? '#ff9b00' : '#FFFFFF')};
  }

  &:hover {
    color: #ff9b00;
  }
`;
