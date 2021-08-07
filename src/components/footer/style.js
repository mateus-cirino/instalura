import styled, { css } from "styled-components";
import { breakpointsMedia } from "../../theme/utils";
import _get from "lodash/get";

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
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
`;

export default FooterWrapper;