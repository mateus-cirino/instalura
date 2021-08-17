import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ModalWrapper from './style';

const Modal = ({ isOpen, onClose, children }) => {
  const onClickModal = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
    if (!isSafeArea) {
      onClose();
    }
  };
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClickModal}>
      <motion.div
        style={{
          display: 'flex',
          flex: 1,
          width: '50%',
          backgroundColor: 'white',
        }}
        variants={{
          open: {
            x: '0%',
            opacity: 1,
          },
          close: {
            x: '-100%',
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.5,
        }}
        animate={isOpen ? 'open' : 'close'}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
