import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 100%;
  background: #000000;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;

export const LogoContainer = styled(Link)`
  width: 86px;
  height: 42px;
  padding-left: 25px;
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
  margin: 0 2px;
  text-decoration: none;

  &:hover {
    color: #FF9B00;
  }

  &:first-child {
    padding-left: 50px;
  }
`;
