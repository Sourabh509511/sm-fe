import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'views/Navbar/index';
import Footer from 'views/Footer/index';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
