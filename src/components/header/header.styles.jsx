import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 47px;
  width: 100%;
  background: ${(props) => (props.isHeaderTop ? "transparent" : "#000000")};
  transition: all 0.5s ease;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
`;

export const LogoContainer = styled(Link)`
  width: 58px;
  height: 28px;
  padding-left: 29px;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: start;
`;

export const TitleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? "#FF9B00" : "#FFFFFF")};
  height: 100%;
  padding: 0px 25px;
  margin: 0 1px;
  text-decoration: none;

  &:hover {
    color: #ff9b00;
  }

  &:first-child {
    padding-left: 60px;
  }
`;
