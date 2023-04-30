import { PADDING, PADDING_SM } from 'Constant';
import { device } from 'media';
import Styled, { css } from 'styled-components';

export const Wrapper = Styled.div`
    height:10%;
    border-bottom: 2px solid var(--grey);
    padding: 17px ${PADDING};
    gap: 43px;

    ${device.largeViewport}{
        gap: 15px;
        padding: 17px ${PADDING_SM};
    }
    
    .burger{
        display: none;
        
        ${device.mediumViewport}{
            display: block;
        }
    }

    .action-links{
        gap:20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        ${device.mediumViewport}{
            display: none;
        }
    }

    .burger {
        position: relative;
      }
      
    .dropdown-content {
        position: absolute;
        background-color: white;
        color: var(--font);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        right: 0;
    }
`;

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

    ${device.largeViewport}{
        font-size: 10px;
    }

    ${device.mediumViewport}{
        font-size: 16px;
    }
`;

export const LoginWrapper = Styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
`;

export const LoginSpace = Styled.div`
    width: 60%;
    height: 60%;
    background: white;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 3px rgba(0,0,0,0.75);
    position: relative;
`;

export const StyledInput = Styled.input`
    width: 80%;
    border-radius: 4px;
    border: 1px solid var(--border);
    height: 25px;

    &:focus {
        outline: 0;
        border: 1px solid var(--base-green);
        border-radius: 4px;
    }
`;

export const CloseIcon = Styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const StyledButton = Styled.button`
    height: 25px;
    width: 80%;
    border-radius: 4px;
    border: 1px solid var(--base-green);
    background: var(--base-green);
    color: var(--anti-flash-white);

    &:active {
        background: rgba(59, 183, 126, 0.75);
    }
`;

// rgba(59, 183, 126, 0.5)
