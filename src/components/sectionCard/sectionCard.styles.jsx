import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const SomePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  width: 100%;
  /* height: 200px; */
  min-height: 200px;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  font-size: 20px;
  margin-bottom: 7px;
`;

export const CardIntroduction = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  margin-bottom: 14px;
`;

export const CardLink = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  font-size: 16px;
  color: #7A7A7A;
  text-decoration: underline;
`;
