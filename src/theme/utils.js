import { css } from 'styled-components';
import theme from '.';

const { breakpoints, typographyVariants } = theme;

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
      return typographyVariants[propValue];
    }
    return {
      [propName]: propValue,
    };
  }

  if (typeof propValue === 'object') {
    if (propName === 'typographyVariant') {
      return breakpointsMedia({
        ...(propValue.xs && {
          xs: typographyVariants[propValue.xs],
        }),
        ...(propValue.sm && {
          sm: typographyVariants[propValue.sm],
        }),
        ...(propValue.md && {
          md: typographyVariants[propValue.md],
        }),
        ...(propValue.lg && {
          lg: typographyVariants[propValue.lg],
        }),
        ...(propValue.xl && {
          xl: typographyVariants[propValue.xl],
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
