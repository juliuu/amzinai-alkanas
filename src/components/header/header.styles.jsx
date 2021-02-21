import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 66px;
  width: 100%;
  background: ${(props) => (props.isHeaderTop ? "transparent" : "#000000")};
  transition: all 0.5s ease;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
`;

export const LogoContainer = styled(Link)`
  width: 79px;
  height: 38px;
  padding-left: 22px;
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
  padding: 0px 15px;
  text-decoration: none;

  &:hover {
    color: #ff9b00;
  }

  &:first-child {
    padding-left: 30px;
  }

  &:last-child {
    padding-right: 0;
    margin-right: 188px;
  }

  &:nth-last-child(2) {
    padding-left: 0;
    margin-left: auto;
  }
`;
