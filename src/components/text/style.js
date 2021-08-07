import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import _get from "lodash/get";
import { propToStyle } from "../../theme/utils";

const Text = styled.span`
  color: ${({ theme, colorVariant }) =>
    _get(theme, `colors.${colorVariant}.color`)};
  ${propToStyle('typographyVariant')}
  ${propToStyle('textAlign')}
`;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "li", "p", "a", "span"]),
};

export default Text;
