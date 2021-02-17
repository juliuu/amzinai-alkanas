import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../../assets/intro-image.jpg";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 720px;
  justify-content: center;
  align-items: center;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-color: black;
  color: white;
  box-shadow: 0px 3px 6px #000000;
  opacity: 0.65;
`;

export const Heading = styled.div``;

export const SubHeading = styled.div``;

export const AboutLink = styled(Link)``;
