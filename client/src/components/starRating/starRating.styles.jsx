import styled from 'styled-components';
import { ReactComponent as Star } from '../../assets/svg/rating-star.svg';

export const StarWrapper = styled.div`
  flex-shrink: 0;
  width: 3.7rem;
  height: 3.36rem;
  position: relative;
`;

export const StarIcon = styled(Star)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: orange;
`;

export const Rating = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -43%);
  font-weight: 900;
`;
