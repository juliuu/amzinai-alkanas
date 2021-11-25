import styled from 'styled-components';

export const ModalContainer = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vh;
  overflow: hidden;
  background-color: hsla(0, 0%, 90%, 50%);
  backdrop-filter: blur(0.3rem);
  border-radius: 0.83rem;
  box-shadow: 0px 3px 6px hsl(0, 0, 0);
`;

export const ModalText = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: start;
  align-items: center;
  padding-left: 3rem;
`;

export const ModalActions = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 1rem 3rem 1rem 0;
  background-color: hsla(0, 0%, 80%, 50%);
  justify-content: end;
  align-items: center;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
`;
