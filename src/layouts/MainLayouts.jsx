import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Container from '../Components/Container/Container';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='bg-[#efefef]'>
            <Container>
                <Navbar></Navbar>
            </Container>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;