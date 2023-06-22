import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Main;