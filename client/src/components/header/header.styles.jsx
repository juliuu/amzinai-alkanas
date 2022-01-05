import styled from 'styled-components';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/svg/amzinai-alkanas.svg';
import { MediaQuery } from '../../global.styles';

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 3.6rem;
  padding: 0rem var(--page-layout-padding);
  place-content: center space-between;
  background: ${({ isHeaderTransparent }) => (isHeaderTransparent ? 'transparent' : '#000000')};
  transition: all 0.5s ease;
  position: fixed;
  z-index: 9000;

  ${MediaQuery('_800')`
    place-content: center;
  `}
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
  position: absolute;
  right: ${({ isMenuActive }) => (isMenuActive ? '0' : '-100%')};
  top: 0;
  display: flex;
  flex-direction: column;
  height: auto;
  text-align: start;
  background: black;
  padding: 3.6rem var(--page-layout-padding) 2rem;
  border-bottom-left-radius: 2.5rem;
  transition: all 0.5s ease;
  > div {
    display: inherit;
    flex-direction: inherit;
    align-items: start;
  }

  ${MediaQuery('_800')`
    position: static;
    flex-direction: row;
    padding: 0;
    border-bottom-left-radius: 0;
    background: none;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > :last-child {
        padding-right: 0;
      }
    }`};
`;

export const NavLink = styled(ReactNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 100%;
  padding: 0.5rem 0;
  text-decoration: none;

  &.active {
    color: ${(props) => (props['data-active'] === undefined || props['data-active'] ? '#ff9b00' : '#FFFFFF')};
  }

  &:hover {
    color: #ff9b00;
  }

  ${MediaQuery('_800')`
    padding: 0 0.833rem;
  `}
`;

export const ButtonWrapper = styled.div`
  display: block;
  position: absolute;
  z-index: 9100;
  align-self: center;
  right: 0;
  padding-right: var(--page-layout-padding);

  ${MediaQuery('_800')`
    display: none;
  `};
`;

export const NavBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 80%;
  z-index: 8000;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 80%;
    }
  }
`;
