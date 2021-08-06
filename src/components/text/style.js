import styled from "styled-components";
import PropTypes from "prop-types";
import _get from "lodash/get";

const Text = styled.span`
  font-size: ${({ theme, textVariant }) =>
    _get(theme, `typographyVariants.${textVariant}.fontSize`)};
  font-weight: ${({ theme, textVariant }) =>
    _get(theme, `typographyVariants.${textVariant}.fontWeight`)};
  line-height: ${({ theme, textVariant }) =>
    _get(theme, `typographyVariants.${textVariant}.lineHeight`)};
`;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element]),
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "li", "p", "a", "span"]),
  textVariant: PropTypes.oneOf([
    "smallestException",
    "paragraph2",
    "paragraph1",
    "subTitle",
    "title",
  ]),
};

export default Text;
