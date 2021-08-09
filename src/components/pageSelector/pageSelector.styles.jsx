import styled from "styled-components";
import { ReactComponent as PrevArrow } from "../../assets/arrow-previous.svg";
import { ReactComponent as NextArrow } from "../../assets/arrow-next.svg";

export const SelectorWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNumber = styled.h1`
  padding: 0.1rem 0.4rem;
  margin: 0 0.1rem;
  color: ${(props) => (props.isSelected ? "#ff9b00" : "#7a7a7a")};
  border: ${(props) => (props.isSelected ? "3px solid #ff9b00" : "")};
  border-radius: 100%;

  &:hover {
    color: #ff9b00;
  }
`;

const arrowStyles = `
  width: 1.5rem;
  > * {
    stroke: #7a7a7a;
  }
  &:hover {
    > * {
      stroke: #ff9b00;
    }
  }
`;

// When disabled opacity to 0.4
export const ArrowPrevious = styled(PrevArrow)`
  ${arrowStyles}
`;

// When disabled opacity to 0.4
export const ArrowNext = styled(NextArrow)`
  ${arrowStyles}
`;
