import styled from 'styled-components';
import { propToStyle } from '../../theme/utils';

const Box = styled.div`
  ${propToStyle('width')}
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundColor')}
`;

export default Box;
