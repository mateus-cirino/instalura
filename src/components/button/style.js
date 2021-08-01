import styled, { css } from "styled-components"
import _get from "lodash/get"

const ButtonGhost = css`
    color: ${({ theme, variant }) => _get(theme, `colors.${variant}.color`)};
    background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => _get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => _get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover,
    &:focus {
        opacity: .5;
  }
`;

export default Button;