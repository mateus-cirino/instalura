import PropTypes from 'prop-types';
import React from 'react';
import { LockScrollGlobalStyle } from '../../theme';
import ModalMotion from './motion';
import ModalWrapperStyled from './style';

const Modal = ({ isOpen, onClose, children }) => {
  const onClickModal = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) {
      onClose();
    }
  };

  return (
    <ModalWrapperStyled isOpen={isOpen} onClick={onClickModal}>
      <ModalMotion isOpen={isOpen}>
        { isOpen && <LockScrollGlobalStyle /> }
        {children({
          'data-modal-safe-area': 'true',
        })}
      </ModalMotion>
    </ModalWrapperStyled>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
