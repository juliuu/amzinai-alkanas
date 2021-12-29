import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: var(--card-width);
  height: var(--card-height);
  padding: var(--card-padding);
  border-radius: var(--card-padding);
  font-size: var(--card-font-size);
  color: black;
  background: white;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 3px 6px #00000029;
  text-decoration: none;
`;

export const CardPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  width: 100%;
  min-height: var(--card-picture-min-height);
  border-radius: var(--card-padding);
  margin-bottom: 0.555rem;
`;

export const CardRating = styled.div`
  position: absolute;
  top: 0%;
  right: 5%;
  transform: translateY(30%);
  color: white;
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.555rem;

  > :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--card-heading-font-size);
  }

  > :last-child {
    flex-shrink: 0;
    color: hsl(0, 0%, 50%);
    font-weight: 100;
  }
`;

export const CardIntroduction = styled.div`
  text-align: start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 0.555rem;
`;

export const CardLink = styled.div`
  text-align: start;
  width: 100%;
  font-weight: 900;
  color: hsl(0, 0%, 50%);
  text-decoration: underline;
`;
