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

export const StyledTextIconButton = styled.button`
  ${buttonStyle};
  background: none;
  border: 2px solid red;
  color: red;
  height: 2rem;

  p {
    font-size: var(--button-font-size) !important;
    text-decoration: none !important;
  }

  > :first-child {
    padding-right: 0.6rem;
  }

  ${hoverStyle};
`;

export const StyledCancelButton = styled.button`
  font-size: inherit;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#e3e3e3')};
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
  ${hoverStyle};

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

export const DropdownContainer = styled.div`
  position: relative;
  width: fit-content;
  min-width: ${({ width }) => `${width}ch`};
  max-width: ${({ width }) => `${width + 6}ch`};
`;

export const DropdownHeader = styled.div`
  ${buttonStyle}
  justify-content: space-between;
  border-radius: ${(props) => (props.isOpen ? '1.2rem 1.2rem 0 0' : '1.2rem')};
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  > :last-child {
    margin-left: 0.5em;
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
`;

export const DropdownList = styled.ul`
  width: inherit;
  background: red;
  font-size: var(--button-font-size);
  padding: var(--button-padding);
  color: white;
  border-radius: 0 0 1.2rem 1.2rem;

  :hover {
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
  white-space: nowrap;
  padding-right: 1em;

  &:last-child {
    margin-bottom: 0;
  }

  :hover {
    font-weight: 900;
  }
`;
