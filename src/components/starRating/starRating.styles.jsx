import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/rating-star.svg";

export const StarWrapper = styled.div`
  display: flex;
  position: relative;
  margin-left: 1.36rem;
`;

export const StarIcon = styled(Star)`
  width: 3.7rem;
  height: 3.36rem;
  fill: orange;
`;

export const Rating = styled.span`
  position: absolute;
  display: flex;
  font-weight: 900;
  margin-top: 21%;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;
