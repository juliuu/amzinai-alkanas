import styled from 'styled-components';

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  background: black;
  padding: 0rem var(--page-layout-padding);
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.472rem 0;
  height: fit-content;
  max-width: var(--home-page-content-width);
  width: 100%;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: var(--topSection-flex-direction);
  justify-content: center;
  align-items: center;
  margin: 8rem 0;
  width: 100%;
`;

export const TopList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50ch;

  &:first-child {
    margin-right: var(--firstChild-margin-right);
  }
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
