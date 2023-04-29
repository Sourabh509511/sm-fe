import { PADDING } from 'Constant';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 ${PADDING} 38px ${PADDING};
    gap: 40px;

    .footer-data {
        border-top: 2px solid rgba(0, 0, 0, 0.05);
        padding-top: 40px;
    }

    .foorter-links {
        border-top: 2px solid rgba(0, 0, 0, 0.05);
        padding-top: 47px;
    }
    .Text {
        mergin-bottom: 29px;
        // &:last-child
    }
`;

export const First = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 36px;
`;

export const Text = styled.div<{ highlight?: boolean }>`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 29px;
    color: ${props => (props.highlight ? 'var(--base-green)' : 'var(--font)')};
    gap: 3px;

    .last {
        margin-bottom: 0;
    }
`;

export const FooterDetails = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    gap: 7px;

    .data {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Links = styled.div`
    padding: 10px;
    width: 44px;
    height: 44px;
    background-color: var(--base-green);
    border-radius: 100%;
`;
