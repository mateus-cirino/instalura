import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../theme/utils';

const ImagemWrapperStyled = styled.div`
    ${propToStyle('marginRight')}
`;

ImagemWrapperStyled.propTypes = {
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ImagemWrapperStyled;
