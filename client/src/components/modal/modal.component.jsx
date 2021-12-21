import React from 'react';

import { ModalContainer, ModalWrapper, ModalText, ModalActions, ModalClose } from './modal.styles';
import { Button } from '../';

const Modal = ({ children, onConfirm, onCancel, actionCompleted }) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalClose>
          <Button data-type="icon" color="#ff9b00" onClick={onCancel}>
            <span className="material-icons-outlined">close</span>
          </Button>
        </ModalClose>
        <ModalText>{children}</ModalText>
        <ModalActions>
          <Button data-type="cancel" onClick={onCancel} color="#ff9b00">
            Atšaukti
          </Button>
          <Button
            data-type="loading"
            onClick={onConfirm}
            formSent={actionCompleted}
            value="Patvirtinti"
            valueConfirmed="Atlikta"
          />
        </ModalActions>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
