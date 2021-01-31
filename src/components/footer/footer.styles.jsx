import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-rows: 360px;
  grid-template-columns: 64px repeat(2, 1fr);
  column-gap: 100px;
  color: white;
  background: #ff0000;
`;

export const LogoContainer = styled.div`
  align-self: center;
  text-align: center;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px 30px;
  align-self: center;
  justify-content: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const SocialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 15px 30px;
  align-self: center;
  justify-content: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;