import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Search from 'Components/Search';
// import LogoImage from 'Assets/Images/Logo3.svg';
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import * as Styles from './styles';
import { LocationEnum } from 'Constant';
import Logo from 'views/Logo';
import { useTypedSelector } from 'utils';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { loginUser } from 'redux/thunk/UserThunk';
import { useDispatch } from 'react-redux';

const Home = ({ currentLocation }: { currentLocation: string }) => {
    const navigate = useNavigate();

    return (
        <Styles.Actions
            className="cursor-pointer"
            isActive={currentLocation === LocationEnum.Home}
            onClick={() => navigate('/')}
        >
            Home
        </Styles.Actions>
    );
};
const About = ({ currentLocation }: { currentLocation: string }) => {
    const navigate = useNavigate();

    return (
        <Styles.Actions
            className="cursor-pointer"
            isActive={currentLocation === LocationEnum.About}
            onClick={() => navigate('about')}
        >
            About
        </Styles.Actions>
    );
};

const Contact = ({ currentLocation }: { currentLocation: string }) => {
    // const navigate = useNavigate();

    return (
        <Styles.Actions
            className="cursor-pointer"
            isActive={currentLocation === LocationEnum.ContactUs}
        >
            Contact&nbsp;us
        </Styles.Actions>
    );
};
const UploadFile = () => {
    // const navigate = useNavigate();

    return (
        <Styles.Actions className="cursor-pointer" isActive={false}>
            Upload&nbsp;file
        </Styles.Actions>
    );
};
const UserProfile = ({ size }: { size: number }) => {
    // const navigate = useNavigate();

    return (
        <Styles.Actions
            className="cursor-pointer profile center"
            isActive={false}
        >
            <CgProfile size={size} color="var(--base-green)" />
            &nbsp;<div>Sourabh</div>
        </Styles.Actions>
    );
};

const Login = ({ onClick }: { onClick(): void }) => {
    return (
        <Styles.Actions
            className="cursor-pointer profile center"
            isActive={false}
            onClick={() => onClick()}
        >
            Login
        </Styles.Actions>
    );
};

const LoginModal = ({ onClose }: { onClose(): void }) => {
    const [shouldShowPassword, setShouldShowPassword] = useState(false);
    const dispatch = useDispatch<any>();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function passwordShowHandler () {
        setShouldShowPassword(!shouldShowPassword);
    }

    async function loginHandler () {
        const status = await dispatch(loginUser(username, password));
        if (status === 200) {
            onClose();
        }
    }

    return (
        <Styles.LoginWrapper className="center flex-column">
            <Styles.LoginSpace className="center flex-column">
                <Styles.CloseIcon
                    onClick={() => onClose?.()}
                    className="cursor-pointer"
                >
                    <RxCross2 color="var(--base-green)" />
                </Styles.CloseIcon>
                <Logo />
                <Styles.StyledInput
                    placeholder="Username"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <div className="center w-80" style={{ gap: '2px' }}>
                    <Styles.StyledInput
                        placeholder="Password"
                        type={shouldShowPassword ? 'text' : 'password'}
                        className="w-100"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {shouldShowPassword ? (
                        <AiOutlineEye
                            className="cursor-pointer"
                            onClick={passwordShowHandler}
                            color="var(--base-green)"
                        />
                    ) : (
                        <AiOutlineEyeInvisible
                            className="cursor-pointer"
                            onClick={passwordShowHandler}
                            color="var(--base-green)"
                        />
                    )}
                </div>
                <Styles.StyledButton
                    className="cursor-pointer"
                    onClick={() => loginHandler()}
                >
                    Login
                </Styles.StyledButton>
            </Styles.LoginSpace>
        </Styles.LoginWrapper>
    );
};

const Navbar = () => {
    const location = useLocation();
    const currentLocation = location.pathname.split('/')[1];
    const [shouldShowDropdown, setShouldShowDropdown] = useState(false);
    const [shouldShowLoginModal, setShouldShowLoginModal] = useState(false);
    const user = useTypedSelector(store => store.user);

    function loginModalHandler () {
        setShouldShowLoginModal(!shouldShowLoginModal);
    }

    return (
        <Styles.Wrapper className="center">
            {shouldShowLoginModal && <LoginModal onClose={loginModalHandler} />}
            <Logo />
            <Styles.SearchWrapper className="align-center">
                <Search />
            </Styles.SearchWrapper>
            <div className="center action-links">
                <Home currentLocation={currentLocation} />
                <About currentLocation={currentLocation} />
                <Contact currentLocation={currentLocation} />
                {user.is_admin ? (
                    <>
                        <UploadFile />
                        <UserProfile size={24} />
                    </>
                ) : (
                    <Login onClick={loginModalHandler} />
                )}
            </div>
            <div className="burger">
                <GiHamburgerMenu
                    size={40}
                    color="var(--base-green)"
                    onClick={() => setShouldShowDropdown(!shouldShowDropdown)}
                />
                {shouldShowDropdown && (
                    <div
                        className="dropdown-content"
                        onClick={() =>
                            setShouldShowDropdown(!shouldShowDropdown)
                        }
                    >
                        <Home currentLocation={currentLocation} />
                        <About currentLocation={currentLocation} />
                        <Contact currentLocation={currentLocation} />
                        {user.is_admin ? (
                            <>
                                <UploadFile />
                                <UserProfile size={14} />
                            </>
                        ) : (
                            <Login onClick={loginModalHandler} />
                        )}
                    </div>
                )}
            </div>
        </Styles.Wrapper>
    );
};

export default Navbar;
