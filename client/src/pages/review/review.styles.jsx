import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: calc(var(--navbar-height) + 1.25rem);
  padding-bottom: 1.75rem; // TODO: take a look here
  width: 100%;

  ${MediaQuery('_900')`
    padding-top: calc(var(--navbar-height) + 3.66rem);
    padding-bottom: 3.11rem;
  `}
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 var(--page-layout-padding);
  margin: 0 1.2rem;
`;

export const ReviewMainSection = styled.div`
  height: 100%;
  max-width: 50.722rem;

  > iframe {
    margin-top: 1.25rem;
    margin-bottom: 0.9rem;
    width: 100%;
    aspect-ratio: 1.777;
    border-radius: 1.75rem;
  }

  ${MediaQuery('_700')`
    > iframe {
      border-radius: 1.55rem;
    }
  `}
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 1.25rem 0;

  > h2 {
    font-size: 18px;
    margin-bottom: 0.8rem;
  }

  > h3 {
    font-size: 16px;
    text-decoration: underline;
  }

  ${MediaQuery('_700')`
    > h2, h3 {
      font-size: 24px;
    }

    margin: 1.111rem 0;
  `}
`;

export const ReviewHeadingWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  > h4 {
    font-size: 18px;
  }

  > h5 {
    padding: 0.5rem 0;
    font-size: 16px;
  }

  > p {
    color: #7a7a7a;
    font-size: 14px;
  }

  ${MediaQuery('_700')`
    > h4 {
      font-size: 24px;
    }

    > h5 {
      font-size: 20px;
    }
  `}
`;

export const ImageCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.625rem;
  margin-bottom: 1.2rem;
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    margin-bottom: 1.25rem;
    font-size: 18px;
  }

  ${MediaQuery('_700')`
    > h3 {
      font-size: 24px;
    }
  `}
`;
