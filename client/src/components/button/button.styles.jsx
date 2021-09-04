import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
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
`;
