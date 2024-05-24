import React from 'react';
import { Outlet } from 'react-router-dom';
import  Header from '../components/common/header/Header';
import  Sidebar from '../components/common/sidebar/Sidebar';
import { Box } from '@mui/material';
import useStyle from './style';

const AppLayout = () => {
  const classes = useStyle();
  return (
    <>
      <Header />
      <Sidebar />
       <Box component="main" className={classes.mainContent}>
        <Box className={classes.appContent}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
