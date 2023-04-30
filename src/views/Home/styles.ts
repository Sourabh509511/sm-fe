import { PADDING, PADDING_SM } from 'Constant';
import { device } from 'media';
import Styled from 'styled-components';

export const Wrapper = Styled.div`
    padding: 0 ${PADDING} 27px ${PADDING};

    ${device.largeViewport} {
        padding: 0 ${PADDING_SM} 27px ${PADDING_SM};
    }
`;

export const BodyWrapper = Styled.div`
    height:90%;
`;
