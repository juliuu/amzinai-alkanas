import styled from 'styled-components';
import image from '../../assets/img/intro-image.jpg';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: var(--introSection-height);
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${image});
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`;

// TODO: see if possible to apply box-shadow to IntroContainer instead of this wrapper
export const ShadowWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  padding: 0rem var(--page-layout-padding);
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  max-width: var(--main-page-content-width);
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
