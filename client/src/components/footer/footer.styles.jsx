import styled from 'styled-components';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/amzinai-alkanas.svg';
import { MediaQuery } from '../../global.styles';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem var(--page-layout-padding);
  padding-top: 1.721rem;
  padding-bottom: 2.906rem;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;

  ${MediaQuery('_900')`
    flex-direction: row;
    padding-top: 4.712rem;
    padding-bottom: 4.712rem;
    justify-content: space-between;
  `}
`;

export const FooterLogo = styled(Logo)`
  width: 8.062rem;
  height: auto;
  fill: white;

  ${MediaQuery('_900')`
    width: 14.5rem;
  `}
`;

export const NavContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  max-width: fit-content;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
  }

  ${MediaQuery('_700')`
    flex-flow: row wrap;
    width: 100%;

    > div {
      align-items: start;
      padding: 0 2.5rem;
    }
  `}

  ${MediaQuery('_900')`
    margin-top: 0;
  `}
`;

export const NavItem = styled.h2`
  margin-bottom: 1.812rem;

  &:hover {
    color: #ff9b00;
    cursor: pointer;
  }

  ${MediaQuery('_900')`
    margin-bottom: 2.73rem;
  `}
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: -1.5rem;
  width: fit-content;

  > div {
    flex-grow: 1;
  }
`;

export const NavLink = styled(ReactNavLink)`
  margin-bottom: 1.812rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: #ff9b00;
  }

  ${MediaQuery('_900')`
    margin-bottom: 2.73rem;
  `}
`;
