import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  font-size: inherit;
  font-weight: bold;
  color: white;
  background-color: red;
  height: 2.5rem;
  border-radius: 2.5rem;
  padding: 0 1rem;
  border: none;

  :hover {
    cursor: pointer;
  }

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
