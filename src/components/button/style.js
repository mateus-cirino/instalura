import styled, { css } from 'styled-components';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../theme/utils';

const ButtonGhost = css`
  color: ${({ theme, colorVariant }) => _get(theme, `colors.${colorVariant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, colorVariant }) => _get(theme, `colors.${colorVariant}.contrastText`)};
  background-color: ${({ theme, colorVariant }) => _get(theme, `colors.${colorVariant}.color`)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  ${propToStyle('typographyVariant')}
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
  ghost: PropTypes.oneOfType([PropTypes.bool]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;
