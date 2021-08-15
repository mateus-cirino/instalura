import { css } from 'styled-components';
import theme from '.';

const { breakpoints } = theme;

export const breakpointsMedia = (cssByBreakpoint) => {
  const breakpointsName = Object.keys(cssByBreakpoint);
  return breakpointsName
    .filter((it) => Object.prototype.hasOwnProperty.call(breakpoints, it))
    .map(
      (it) => css`
        @media only screen and (min-width: ${breakpoints[it]}px) {
          ${cssByBreakpoint[it]}
        }
      `,
    );
};
export const propToStyle = (propName) => (props) => {
  const propValue = props[propName];

  if (typeof propValue === 'string') {
    if (propName === 'typographyVariant') {
      return propValue;
    }
    return {
      [propName]: propValue,
    };
  }

  if (typeof propValue === 'object') {
    if (propName === 'typographyVariant') {
      return breakpointsMedia({
        ...(propValue.xs && {
          xs: propValue.xs,
        }),
        ...(propValue.sm && {
          sm: propValue.sm,
        }),
        ...(propValue.md && {
          md: propValue.md,
        }),
        ...(propValue.lg && {
          lg: propValue.lg,
        }),
        ...(propValue.xl && {
          xl: propValue.xl,
        }),
      });
    }
    return breakpointsMedia({
      ...(propValue.xs && {
        xs: { [propName]: propValue.xs },
      }),
      ...(propValue.sm && {
        sm: { [propName]: propValue.sm },
      }),
      ...(propValue.md && {
        md: { [propName]: propValue.md },
      }),
      ...(propValue.lg && {
        lg: { [propName]: propValue.lg },
      }),
      ...(propValue.xl && {
        xl: { [propName]: propValue.xl },
      }),
    });
  }
  return {};
};
