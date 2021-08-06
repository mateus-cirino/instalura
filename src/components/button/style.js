import styled, { css } from "styled-components";
import _get from "lodash/get";

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
  font-weight: bold;
  opacity: 1;
  font-size: ${({ theme, textVariant }) =>
    _get(theme, `typographyVariants.${textVariant}.fontSize`)};
  font-weight: ${({ theme, textVariant }) =>
    _get(theme, `typographyVariants.${textVariant}.fontWeight`)};
  line-height: ${({ theme, textVariant }) =>
    _get(theme, `typographyVariants.${textVariant}.lineHeight`)};
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
    &:focus {
    opacity: 0.5;
  }
`;

export default Button;
