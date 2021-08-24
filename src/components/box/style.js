import styled from 'styled-components';
import { propToStyle } from '../../theme/utils';

const BoxStyled = styled.div`
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
  ${propToStyle('marginLeft')}
  box-shadow: -10px 0px 24px rgba(7, 12, 14, 0.1);
`;

export default BoxStyled;
