import { PADDING } from 'Constant';
import Styled, { css } from 'styled-components';

export const Wrapper = Styled.div`
    height:10%;
    border-bottom: 2px solid var(--grey);
    padding: 17px ${PADDING};
    gap: 43px;

    .action-links{
        gap:20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
    }
    
    .profile{
        gap: 4px;
        &:hover {
            position: relative;
            .user-dropdown{
                display: block;
            }
        }
    }s

`;

// export const Brand = Styled.div`
//     border-right:2px solid var(--border);
//     width:14%;
//     font-weight:500;
//     overflow: hidden;
//     background-color: var(--brand-main)
// `;

export const SearchWrapper = Styled.div`
    width: 620px;

    .user-dropdown{
        display: none;
        position: absolute;
        z-index: 1;
    }
`;

export const Logo = Styled.img`
    height: inherit;
    cursor: pointer;
    // margin-right: 53px;
    width:14%;
`;

export const Actions = Styled.div<{ isActive: boolean }>`
    ${props =>
        props.isActive
            ? css`
                  color: var(--base-green);
                  font-weight: 800;
              `
            : ''}

`;
