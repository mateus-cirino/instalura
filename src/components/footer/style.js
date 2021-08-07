import styled, { css } from "styled-components";
import _get from "lodash/get";
import { breakpointsMedia } from "../../theme/utils";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  padding-bottom: 28px;
  padding-top: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
    `,
  })}
`;

export default FooterWrapper;