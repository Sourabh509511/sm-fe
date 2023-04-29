import Styled from 'styled-components';

export const Wrapper = Styled.div``;

export const HeaderText = Styled.div`
    font-weight: 600;
    font-size: 28px;
    line-height: 22px;
    margin-bottom: 26px;
`;

export const CategoryWrapper = Styled.div`
    margin-top: 20px;
    .wrapper{
        padding: 4px;
        &::-webkit-scrollbar {
         display: none;
        }
    }
`;
