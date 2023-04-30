import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    font-size: 18px;

    .search-icon {
        height: 44px;
        background: var(--base-green);
        border-radius: 0px 2px 2px 0px;
        width: 40px;
        border: 1px solid var(--base-green);
    }

    .cross-icon {
        position: absolute;
        right: 2px;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 42px;
    background-color: var(--anti-flash-white);
    border: 0;
    border-radius: 2px 0px 0px 2px;
    border: 1px solid var(--anti-flash-white);
    padding-left: 12px;

    &::placeholder {
        color: var(--grey);
    }

    &:focus {
        outline: 0;
        border: 1px solid var(--anti-flash-white);
    }
`;
