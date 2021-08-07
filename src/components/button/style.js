import styled, { css } from "styled-components";
import _get from "lodash/get";
import { breakpointsMedia } from "../../theme/utils";

const ButtonGhost = css`
  color: ${({ theme, colorVariant }) =>
    _get(theme, `colors.${colorVariant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, colorVariant }) =>
    _get(theme, `colors.${colorVariant}.contrastText`)};
  background-color: ${({ theme, colorVariant }) =>
    _get(theme, `colors.${colorVariant}.color`)};
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

export default Button;
