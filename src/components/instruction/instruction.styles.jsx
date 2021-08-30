import styled from "styled-components";

export const InstructionWrapper = styled.div`
  display: flex;
  margin-top: 1.1rem;

  :last-of-type {
      margin-bottom: 2.5rem;
  }
`;

export const InstructionPicture = styled.div`
  // TODO: change to img
  display: flex;
  flex-shrink: 0;
  width: 19.89rem;
  height: 12.22rem;
  background-color: grey;
  justify-content: center;
  align-items: center;
  border-radius: 1.56rem;
`;

export const InstructionStep = styled.span`
  font-size: 1.333rem;
  font-weight: bold;
  margin: 0 1.1rem;
`;
