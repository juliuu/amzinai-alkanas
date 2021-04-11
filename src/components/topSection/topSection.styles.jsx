import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  background: black;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.6rem;
  width: 100%;
  max-width: var(--page-layout-width);
  height: fit-content;
  padding-bottom: 13rem;
  margin: 0 1rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`;

export const TopList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50ch;
`;

export const ListItem = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 1.111rem;

  > :last-child {
    margin-left: auto;
  }
`;

export const ItemNumber = styled.span`
  color: red;
  width: 3ch;
  padding-right: 1.36rem;
`;

export const ItemName = styled.span`
  width: 100%;
  max-width: 37ch;
  padding-right: 1rem;
`;
