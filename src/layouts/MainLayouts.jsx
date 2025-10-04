import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Container from '../Container/Container';

const MainLayouts = () => {
    return (
        <div className='bg-[#efefef]'>
            <Container>
                <Navbar></Navbar>
            </Container>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;