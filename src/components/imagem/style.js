import styled from "styled-components";
import { propToStyle } from "../../theme/utils";
import PropTypes from "prop-types";

const ImagemWrapper = styled.div`
    ${propToStyle('marginRight')}
`;

ImagemWrapper.propTypes = {
    marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ImagemWrapper