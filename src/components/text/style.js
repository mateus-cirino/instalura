import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import _get from "lodash/get";
import { breakpointsMedia } from "../../theme/utils";


const Text = styled.span`
  ${({ theme }) => breakpointsMedia(
    {
      xs: css`
        font-size: ${_get(
          theme,
          `typographyVariants.smallestException.fontSize`
        )};
        font-weight: ${_get(
          theme,
          `typographyVariants.smallestException.fontWeight`
        )};
        line-height: ${_get(
          theme,
          `typographyVariants.smallestException.lineHeight`
        )};
      `,
      md: css`
        font-size: ${_get(
          theme,
          `typographyVariants.paragraph1.fontSize`
        )};
        font-weight: ${_get(
          theme,
          `typographyVariants.paragraph1.fontWeight`
        )};
        line-height: ${_get(
          theme,
          `typographyVariants.paragraph1.lineHeight`
        )};
      `,
    }
  )}
`;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element]),
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "li", "p", "a", "span"]),
};

export default Text;
