import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../theme/utils';

const ImagemWrapper = styled.div`
    ${propToStyle('marginRight')}
`;

ImagemWrapper.propTypes = {
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ImagemWrapper;
