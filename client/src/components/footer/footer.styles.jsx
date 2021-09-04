import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/svg/amzinai-alkanas.svg';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  color: white;
`;

export const FooterLogo = styled(Logo)`
  width: 14.5rem;
  fill: white;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: grey;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.h2`
  margin-bottom: 2rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-bottom: 2.5rem;
  margin: 0 2rem;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-between;

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;
