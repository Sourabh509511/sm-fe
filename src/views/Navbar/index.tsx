import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from 'Components/Search';
// import LogoImage from 'Assets/Images/Logo3.svg';
import { CgProfile } from 'react-icons/cg';
import * as Styles from './styles';
import { LocationEnum } from 'Constant';
import Logo from 'views/Logo';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentLocation = location.pathname.split('/')[1];
    return (
        <Styles.Wrapper className="d-flex">
            {/* <Styles.Brand className="center"> */}
            {/* <Styles.Logo
                src={LogoImage}
                alt="logo"
                onClick={() => navigate('/')}
            /> */}
            <Logo
            // nameFontSize={21} tagLineSize={14}
            />
            {/* </Styles.Brand> */}
            <Styles.SearchWrapper className="align-center">
                <Search />
            </Styles.SearchWrapper>
            <div className="center action-links">
                <Styles.Actions
                    className="cursor-pointer"
                    isActive={currentLocation === LocationEnum.Home}
                    onClick={() => navigate('/')}
                >
                    Home
                </Styles.Actions>
                <Styles.Actions
                    className="cursor-pointer"
                    isActive={currentLocation === LocationEnum.About}
                    onClick={() => navigate('about')}
                >
                    About
                </Styles.Actions>
                <Styles.Actions
                    className="cursor-pointer"
                    isActive={currentLocation === LocationEnum.ContactUs}
                >
                    Contact&nbsp;us
                </Styles.Actions>
                <div className="user-dropdown">
                    <Styles.Actions className="cursor-pointer" isActive={false}>
                        Upload&nbsp;file
                    </Styles.Actions>
                </div>
                <Styles.Actions
                    className="cursor-pointer profile center"
                    isActive={false}
                >
                    <CgProfile size={24} color="var(--base-green)" />
                    &nbsp;<div>Sourabh</div>``
                </Styles.Actions>
            </div>
        </Styles.Wrapper>
    );
};

export default Navbar;
