import styled from "styled-components";
import image from "../../assets/intro-image.jpg";

export const IntroContainer = styled.div`
  height: var(--introSection-height);
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
  font-size: var(--heading-font-size);
  font-weight: 900;
  max-width: 40ch;
  margin: var(--heading-margins);
`;

export const SubHeading = styled.span`
  font-size: var(--subheading-font-size);
  font-style: italic;
  letter-spacing: 0.086rem;
  margin: var(--subheading-margins);
`;