import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';

import MainHeader from '../navigation/MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import './MainNavigation.css';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {};
  setDrawerIsOpen(false);

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer onClick={closeDrawerHandler}>
        <nav>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <a href='/'>A Plant App</a>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
