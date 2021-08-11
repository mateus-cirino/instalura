import styled, { css } from 'styled-components';
import { breakpointsMedia, propToStyle } from '../../theme/utils';

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${(props) => {
    if (props.colSize) {
      if (typeof props.colSize === 'string' || typeof props.colSize === 'number') {
        props.flex = `0 0 ${(100 * props.colSize) / 12}%`;
        return propToStyle('flex');
      }
      props.flex = {};
      Object.keys(props.colSize).forEach((key) => {
        props.flex[key] = `0 0 ${(100 * props.colSize[key]) / 12}%`;
      });
      return propToStyle('flex');
    }
    return {};
  }}
  ${(props) => {
    if (props.colSize) {
      if (typeof props.colSize === 'string' || typeof props.colSize === 'number') {
        props.maxWidth = `${(100 * props.colSize) / 12}%`;
        return propToStyle('maxWidth');
      }
      props.maxWidth = {};
      Object.keys(props.colSize).forEach((key) => {
        props.maxWidth[key] = `${(100 * props.colSize[key]) / 12}%`;
      });
      return propToStyle('maxWidth');
    }
    return {};
  }}
  ${(props) => {
    if (props.offSet) {
      if (typeof props.offSet === 'string' || typeof props.offSet === 'number') {
        props.marginLeft = `${(100 * props.offSet) / 12}%`;
        return propToStyle('marginLeft');
      }
      Object.keys(props.offSet).forEach((key) => {
        props.offSet[key] = `${(100 * props.offSet[key]) / 12}%`;
      });
      props.marginLeft = {
        ...props.offSet,
      };
      return propToStyle('marginLeft');
    }
    return {};
  }}
`;

const Container = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  ${breakpointsMedia({
    xs: css`
      max-width: initial;

      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
