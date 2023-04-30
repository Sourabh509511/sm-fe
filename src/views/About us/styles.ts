import { PADDING, PADDING_SM } from 'Constant';
import { device } from 'media';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: ${PADDING};

    ${device.largeViewport} {
        padding: ${PADDING_SM};
    }
`;
