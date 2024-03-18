import React from 'react';
import HeaderOld from '../components/HeaderOld';
import FooterOld from '../components/FooterOld/';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <HeaderOld />
      {/* <Sidebar /> */}
      <Outlet />
      <FooterOld />
    </>
  );
};

export default Layout;
