import React from 'react';
import styled from 'styled-components';
import Spices from 'Assets/Icons/Spices';

const LogoName = styled.div`
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: var(--base-green);
`;
const Tagline = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--grey);
`;

const Logo = () => {
    return (
        <div className="align-center">
            <Spices size={24} />
            <div>
                <LogoName>
                    Surya&nbsp;Masale
                </LogoName>
                <Tagline>
                    We make your taste
                </Tagline>
            </div>
        </div>
    );
};

export default Logo;
