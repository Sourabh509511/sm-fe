import Loader from 'Assets/Icons/Loader';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 2;
    
`;

const Loading = () => {
    return (
        <Wrapper className="center">
            <Loader />
        </Wrapper>
    );
};

export default Loading;
