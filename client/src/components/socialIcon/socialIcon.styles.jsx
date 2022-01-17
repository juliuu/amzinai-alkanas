import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem 1.5rem;

  ${MediaQuery('_900')`
    align-items: start;
  `}
`;

export const IconBackground = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ withChildren }) => (withChildren ? '2.25rem' : '3.125rem')};
  height: ${({ withChildren }) => (withChildren ? '2.25rem' : '3.125rem')};
  margin-bottom: ${({ withChildren }) => (withChildren ? '0.373rem' : '0')};
  background: white;
  border: 3px solid red;
  border-radius: 50%;

  > * {
    width: 55%;
    height: 55%;
    fill: black;
  }

  ${MediaQuery('_900')`
    width: 2.77rem;
    height: 2.77rem;
    margin-bottom: 0.479rem;
  `}
`;
