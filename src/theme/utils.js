import { css } from "styled-components";
import theme from ".";

const { breakpoints } = theme;

export const breakpointsMedia = (cssByBreakpoint) => {
  const breakpointsName = Object.keys(cssByBreakpoint);
  return breakpointsName
    .filter(
        it => breakpoints.hasOwnProperty(it)
    )
    .map(
    (it) => css`
      @media only screen and (min-width: ${breakpoints[it]}px) {
        ${cssByBreakpoint[it]}
      }
    `
  );
};
