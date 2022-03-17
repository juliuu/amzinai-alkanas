import styled from 'styled-components';
import { MediaQuery } from '../../global.styles';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;
  min-width: 11.75rem;
  aspect-ratio: 1.64;
  ${MediaQuery('_700')`
    min-width: 24.83rem;
  `}
`;

export const Image = styled.div`
  // TODO: change this to image!!
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin-top: 0.3rem;
`;
