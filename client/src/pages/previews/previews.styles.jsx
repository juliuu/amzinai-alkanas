import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const PreviewPageContainer = styled.div`
  display: flex;
  padding-top: calc(var(--navbar-height) + 1.25rem);
  padding-bottom: 1.75rem;
  width: 100%;

  ${MediaQuery('_900')`
    padding-top: calc(var(--navbar-height) + 3.944rem);
    padding-bottom: 3.11rem;
  `}
`;

export const PreviewWrapper = styled.div`
  height: 100%;
  padding: 0rem var(--page-layout-padding);
`;

export const PreviewHeadingWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.597rem;

  > div {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 0.875rem;

    h1 {
      text-align: center;
      white-space: nowrap;
    }
  }

  ${MediaQuery('_1200')`
    flex-direction: row;
    margin-bottom: 4.388rem;

    > div {
      margin-bottom: 0;
    }

    > :nth-child(1) {
      flex-wrap: nowrap;
    }

    > :nth-child(2) {
      order: -1;
      justify-content: start;
    }

    > :nth-child(3) {
      justify-content: end;
    }
  `}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.187rem;
  width: 100%;
  height: 100%;
  margin-bottom: 1.715rem;

  ${MediaQuery('_900')`
    row-gap: 1.83rem;
    column-gap: 2.11rem;
    margin-bottom: 4.44rem;
  `};
`;
