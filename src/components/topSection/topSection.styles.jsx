import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background: black;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.6rem;
  width: 90rem; // TODO: remove this later
  height: fit-content;
  padding-bottom: 13rem;
`;

export const TopList = styled.ul`
  column-count: 2;
  font-size: 1.571rem;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 6.43rem;
`;

export const ListItem = styled.li`
  display: flex;
  width: fit-content;
  align-items: center;
  padding-bottom: 1.429rem;
  margin-right: 1.5rem;
`;

export const ItemNumber = styled.span`
  color: red;
  width: 3ch;
  padding-right: 1.36rem;
`;

export const ItemName = styled.span`
  width: 30ch;
`;

export const HonorableMentions = styled(Link)`
  align-self: flex-end;
  color: red;
  font-size: 16px;
  width: fit-content;
`;
