import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './style';
import ModalMotion from './motion';
import Box from '../box/style';

const Modal = ({ isOpen, onClose, children }) => {
  const onClickModal = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) {
      onClose();
    }
  };

  return (
    <ModalWrapper isOpen={isOpen} onClick={onClickModal}>
      <ModalMotion isOpen={isOpen}>
        {children({
          'data-modal-safe-area': 'true',
        })}
      </ModalMotion>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
