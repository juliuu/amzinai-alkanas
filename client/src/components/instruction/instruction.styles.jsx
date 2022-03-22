import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const InstructionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.1rem;

  :last-of-type {
    margin-bottom: 2.5rem;
  }

  ${MediaQuery('_800')`
    flex-wrap: nowrap;
  `}
`;

export const InstructionPicture = styled.div`
  // TODO: change to img
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 19.89rem;
  aspect-ratio: 1.6;
  background-color: grey;
  justify-content: center;
  align-items: center;
  border-radius: 1.56rem;

  margin-bottom: 0.625rem;

  ${MediaQuery('_800')`
    margin-bottom: 0;
  `}
`;

export const InstructionStep = styled.span`
  font-size: 1.333rem;
  font-weight: bold;
  margin: 0 1.1rem;
`;
