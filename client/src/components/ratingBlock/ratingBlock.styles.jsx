import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/svg/rating-star.svg';
import { MediaQuery } from '../../global.styles';

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-top: 1px solid #7a7a7a;
  border-bottom: 1px solid #7a7a7a;

  padding: 1.25rem 0;
  margin-bottom: 1.25rem;

  > * {
    white-space: nowrap;
  }

  > p {
    font-weight: bold;
  }
`;

export const StarWrapper = styled.div`
  padding-top: 0.625rem;
  padding-bottom: 1.25rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: row-reverse;

  svg:hover,
  svg:hover ~ svg {
    fill: orange;
  }

  ${MediaQuery('_700')`
    padding-top: 0.55rem;
    padding-bottom: 1.11rem;
  `}
`;

export const StarIcon = styled(Star)`
  stroke: orange;
  stroke-width: 2px;
  fill: white;

  height: 2.18rem;
  fill: ${({ reviewrating, index }) =>
    reviewrating < 1 ? 'white' : index <= reviewrating ? 'orange' : 'white'};

  ${MediaQuery('_700')`
    height: 1.94rem;
  `}
`;
