import React from 'react';
import ListPage from 'views/ListPage';
// import Navbar from 'views/Navbar';
// import Sidebar from 'views/Sidebar';
import * as Styles from './styles';

const Home = () => {
    return (
        <Styles.Wrapper className="overflow-hidden">
            {/* <Styles.BodyWrapper className="d-flex"> */}
            {/* <Sidebar /> */}
            <ListPage />
            {/* </Styles.BodyWrapper> */}
        </Styles.Wrapper>
    );
};

export default Home;
