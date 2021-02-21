import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../assets/intro-image.jpg";

export const IntroContainer = styled.div`
  height: 720px;
  background-image: url(${image});
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  background-color: black;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`;

export const IntroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.65);
`;

export const Heading = styled.div`
  font-size: 42px;
  margin: 0 30px 20px;
`;

export const SubHeading = styled.div`
  font-size: 22px;
  margin: 0 30px 40px;
`;

export const AboutLink = styled(Link)`
  display: flex;
  width: 132px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  background: red;
  font-size: 18px;
  color: white;
  text-decoration: none;
`;
