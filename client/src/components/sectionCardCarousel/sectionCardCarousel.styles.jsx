import styled from 'styled-components';

export const SectionCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;

  > * {
    margin-right: 3rem;
  }

  > :last-child {
    margin-right: 0;
  }
`;
