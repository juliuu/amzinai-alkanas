import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const SectionHeadingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column-reverse;
  align-items: center;

  > h1 {
    padding: 1rem 0;
  }

  ${MediaQuery('_700')`
    flex-flow: row wrap-reverse;
    align-items: center;
    justify-content: center;

    > h1 {
      padding: 0 2rem;
    }

    > div:first-child {
      flex: 1;
      place-content: center start;
    }

    ::after {
      content: "";
      flex: 1
    }`};
`;
