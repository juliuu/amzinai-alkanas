import styled from 'styled-components';

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3.6rem;
  padding-bottom: 2rem;
  margin: 0 15.5rem;
`;

export const AdminTitle = styled.h1`
  width: 100%;
  padding: 1.1rem 0;
  border-bottom: 2px solid hsl(194, 7%, 54%);
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: black;
  color: white;
  text-align: center;
`;

export const TR = styled.tr`
  vertical-align: middle;

  border: 1px solid hsl(194, 7%, 54%);
`;

export const TH = styled.th`
  padding: 0.5rem 1rem;

  :first-child {
    padding-left: 2.7rem;
  }

  :last-child {
    padding-right: 2.7rem;
  }
`;

export const TBody = styled.tbody`
  text-align: center;

  tr {
    :hover {
      background-color: #e3e3e3;
    }
  }
`;

export const TD = styled.td`
  padding: 0.5rem 1rem;
  font-size: 0.89rem;

  :first-child {
    padding-left: 2.7rem;
    text-align: start;
    font-style: italic;
  }

  :last-child {
    padding-right: 2.7rem;
  }
`;

export const Flattened = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`;
