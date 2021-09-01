import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/svg/amzinai-alkanas.svg';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isHeaderTransparent ? 'transparent' : '#000000')};
  transition: all 0.5s ease;
  position: fixed;
  z-index: 9999;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: var(--page-layout-width);
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.833rem;
  height: 100%;
`;

export const Logo = styled(ReactLogo)`
  width: auto;
  height: 38px;
  fill: red;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  > span {
    display: flex;
    justify-content: space-between;

    > :last-child {
      padding-right: 0;
    }
  }
`;

export const TitleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? '#FF9B00' : '#FFFFFF')};
  height: 100%;
  padding: 0 0.833rem;
  text-decoration: none;

  &:hover {
    color: #ff9b00;
  }
`;
