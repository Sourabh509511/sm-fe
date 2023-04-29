import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'views/Logo';
import { FiMapPin } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { TbClockHour9 } from 'react-icons/tb';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram, GrTwitter } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';
import * as Styles from './styles';
import { LocationEnum } from 'Constant';

const Footer = () => {
    const location = useLocation();
    const currentLocation = location.pathname.split('/')[1];

    return (
        <Styles.Wrapper className="d-flex flex-column">
            <div className="space-between footer-data">
                <div>
                    <Styles.First>
                        <Logo
                        // nameFontSize={28} tagLineSize={14}
                        />
                    </Styles.First>
                    <Styles.Text className="align-center">
                        <FiMapPin color="var(--base-green)" />
                        <Styles.FooterDetails className="d-flex">
                            Address:
                            <div className="data">
                                Fifth pusta, Sonia vihar, Delhi-110094
                            </div>
                        </Styles.FooterDetails>
                    </Styles.Text>
                    <Styles.Text className="align-center">
                        <BiPhone color="var(--base-green)" />
                        <Styles.FooterDetails className="d-flex">
                            Call Us: <div className="data">1234567890</div>
                        </Styles.FooterDetails>
                    </Styles.Text>
                    <Styles.Text className="align-center">
                        <AiOutlineMail color="var(--base-green)" />
                        <Styles.FooterDetails className="d-flex">
                            Email: <div className="data">abc@gmail.com</div>
                        </Styles.FooterDetails>
                    </Styles.Text>
                    <Styles.Text className="last align-center">
                        <TbClockHour9 color="var(--base-green)" />
                        <Styles.FooterDetails className="d-flex">
                            Work Hours:
                            <div className="data">8:00 - 20:00, Everyday</div>
                        </Styles.FooterDetails>
                    </Styles.Text>
                </div>
                <div>
                    <Styles.First>Useful links</Styles.First>
                    <Link to="about">
                        <Styles.Text
                            highlight={currentLocation === LocationEnum.About}
                        >
                            About&nbsp;Us
                        </Styles.Text>
                    </Link>
                    <Link to="#">
                        <Styles.Text className="last cursor-pointer">
                            Contact&nbsp;Us
                        </Styles.Text>
                    </Link>
                </div>
            </div>
            <div className="space-between foorter-links">
                <Styles.Text>© 2022, All rights reserved</Styles.Text>
                <div className="d-flex" style={{ gap: '16px' }}>
                    <Styles.Links className="center">
                        <FaFacebookF color="white" size={24} />
                    </Styles.Links>
                    <Styles.Links className="center">
                        <RiLinkedinFill color="white" size={24} />
                    </Styles.Links>
                    <Styles.Links className="center">
                        <GrInstagram color="white" size={24} />
                    </Styles.Links>
                    <Styles.Links className="center">
                        <GrTwitter color="white" size={24} />
                    </Styles.Links>
                </div>
            </div>
        </Styles.Wrapper>
    );
};

export default Footer;
