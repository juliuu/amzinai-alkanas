import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  width: 132px;
  height: 46px;
  align-items: center;
  justify-content: center;
  /* TODO: to set radius independant of height, just set very large */
  border-radius: 10000rem;
  background: red;
  font-size: 1.143rem;
  font-weight: 900;
  color: white;
  text-decoration: none;
`;
