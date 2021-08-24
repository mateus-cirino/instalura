import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
  transition-duration: 500ms;
`;

ModalWrapperStyled.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ModalWrapperStyled;
