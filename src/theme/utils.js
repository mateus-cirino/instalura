import { css } from 'styled-components';
import _get from 'lodash/get';
import theme from '.';

const { breakpoints } = theme;

export const breakpointsMedia = (cssByBreakpoint) => {
  const breakpointsName = Object.keys(cssByBreakpoint);
  return breakpointsName
    .filter((it) => Object.prototype.hasOwnProperty(breakpoints, it)
    .map(
      (it) => css`
        @media only screen and (min-width: ${breakpoints[it]}px) {
          ${cssByBreakpoint[it]}
        }
      `,
    );
};

const getTypographyVariant = ({ theme }, typographyVariant) => ({
  fontSize: _get(theme, `typographyVariants.${typographyVariant}.fontSize`),
  fontWeight: _get(
    theme,
    `typographyVariants.${typographyVariant}.fontWeight`,
  ),
  lineHeight: _get(
    theme,
    `typographyVariants.${typographyVariant}.lineHeight`,
  ),
});

export const propToStyle = (propName) => (props) => {
  const propValue = props[propName];

  if (typeof propValue === 'string') {
    if (propName === 'typographyVariant') {
      return getTypographyVariant(props, propValue);
    }
    return {
      [propName]: propValue,
    };
  }

  if (typeof propValue === 'object') {
    if (propName === 'typographyVariant') {
      return breakpointsMedia({
        ...(propValue.xs && {
          xs: getTypographyVariant(props, propValue.xs),
        }),
        ...(propValue.sm && {
          sm: getTypographyVariant(props, propValue.sm),
        }),
        ...(propValue.md && {
          md: getTypographyVariant(props, propValue.md),
        }),
        ...(propValue.lg && {
          lg: getTypographyVariant(props, propValue.lg),
        }),
        ...(propValue.xl && {
          xl: getTypographyVariant(props, propValue.xl),
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
};
