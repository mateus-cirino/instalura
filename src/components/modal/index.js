import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';
import { LockScrollGlobalStyle } from '../../theme';
import ModalMotion from './motion';
import ModalWrapperStyled from './style';
import closeIcon from '../../../public/pictures/close-icon.svg';
import ButtonStyled from '../button/style';

const Modal = ({ isOpen, onClose, children }) => {
  const onClickModal = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) {
      onClose();
    }
  };

  const CloseButton = (
    <ButtonStyled ghost display="flex" marginLeft="auto" onClick={onClose}>
      <Image src={closeIcon} alt="Icone para fechar o modal" />
    </ButtonStyled>
  );

  return (
    <ModalWrapperStyled isOpen={isOpen} onClick={onClickModal}>
      <ModalMotion isOpen={isOpen}>
        { isOpen  }
        {children({
          'data-modal-safe-area': 'true',
          CloseButton,
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
