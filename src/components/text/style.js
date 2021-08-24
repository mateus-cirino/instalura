import styled from 'styled-components';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { propToStyle } from '../../theme/utils';

const TextStyled = styled.span`
  color: ${({ theme, colorVariant }) => _get(theme, `colors.${colorVariant}.color`)};
  ${propToStyle('typographyVariant')}
  ${propToStyle('textAlign')}
`;

TextStyled.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'li', 'p', 'a', 'span']),
  typographyVariant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default TextStyled;
