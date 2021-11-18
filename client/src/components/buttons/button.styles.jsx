import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: red;
  font-size: var(--button-font-size);
  padding: var(--button-padding);
  font-weight: 900;
  color: white;
  text-decoration: none;
  border: none;
  transition: all 0.1s ease-in-out;
`;

const hoverStyle = css`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const StyledLink = styled(Link)`
  ${buttonStyle};
  ${hoverStyle}
`;

export const StyledButton = styled.button`
  ${buttonStyle};
  ${hoverStyle}
`;

export const StyledIconButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.color ? props.color : '#000000')};
  transition: all 0.2s ease-in-out;

  ${hoverStyle}
`;

export const StyledCancelButton = styled.button`
  font-size: inherit;
  font-weight: bold;
  color: #e3e3e3;
  margin-right: 1rem;
  height: 2.5rem;
  background-color: transparent;
  border: 0;

  :hover {
    cursor: pointer;
  }
`;

export const MotionButton = styled(motion.button)`
  font-size: inherit;
  font-weight: bold;
  color: white;
  background-color: red;
  height: 2.5rem;
  border-radius: 2.5rem;
  padding: 0 1rem;
  border: none;

  :disabled {
    background-color: #e3e3e3;
    cursor: default;
    pointer-events: none;
  }
`;

export const LoadingWrapper = styled(motion.div)`
  display: flex;
`;

export const LoadingBall = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: white;
  margin: 0 2px;
`;
