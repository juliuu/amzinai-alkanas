import styled from 'styled-components';

export const SectionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin-right: 3rem;
  }

  > :last-child {
    margin-right: 0;
  }
`;
