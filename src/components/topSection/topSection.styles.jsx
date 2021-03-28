import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  height: 57.143rem;
  justify-content: center;
  color: white;
  background: black;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.6rem;
  width: 90rem; // TODO: remove this later
`;

export const TopList = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1.571rem;
`;

export const ListItem = styled.span`
  display: flex;
  width: fit-content;
  padding-bottom: 1.429rem;
`;

export const ItemNumber = styled.span`
  color: red;
  width: 3ch;
  padding-right: 1.36rem;
`;

export const ItemName = styled.span`
  width: 15ch;
`;

export const ItemRating = styled.div`
  background: grey;
  color: yellow;
  padding-left: 1.36rem;
`;
