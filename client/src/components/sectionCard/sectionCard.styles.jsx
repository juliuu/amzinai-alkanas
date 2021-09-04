import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 390px;
  padding: 35px;
  border-radius: 40px;
  justify-content: start;
  align-items: center;
  background: white;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 3px 6px #00000029;
  text-decoration: none;
  position: relative;
`;

export const SomePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  width: 100%;
  min-height: 200px;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const CardRating = styled.div`
  top: 0%;
  right: 5%;
  transform: translateY(30%);
  color: white;
  position: absolute;
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  width: 100%;
  margin-bottom: 7px;

  > :first-child {
    font-size: 20px;
    width: 18ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > :last-child {
    color: hsl(0, 0%, 50%);
  }
`;

export const CardIntroduction = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.143rem;
  font-weight: 300;
  margin-bottom: 14px;
`;

export const CardLink = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  color: #7a7a7a;
  text-decoration: underline;
`;
