import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
    height: number;
    width: number;
    isActive: boolean;
}>`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    border: 1px solid var(--border);
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    gap: 8px;
    cursor: pointer;
    position: relative;

    .image {
        border-radius: 8px 8px 0 0;
    }

    ${props =>
        props.isActive
            ? css`
                  background: var(--border);

                  .name {
                      color: var(--brand-main);
                  }
              `
            : ''}

    &:hover {
        background: var(--border);

        .name {
            color: var(--brand-main);
        }
    }
`;

export const Name = styled.div<{ fontSize?: string }>`
    font-size: ${props => props.fontSize ?? '12px'};
    font-weight: 500;
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 2px;
    background: white;
    border-radius: 50%;
`;

export const TextInput = styled.input`
    width: 90%;
    border: 1px solid var(--border);
    border-radius: 4px;

    &:focus {
        outline: 0;
        border: 1px solid var(--input-border);
        border-radius: 4px;
    }
`;
