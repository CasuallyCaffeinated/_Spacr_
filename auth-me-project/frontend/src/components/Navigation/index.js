// frontend/src/components/Navigation/index.js

//////////////////* NAVIGATION ////////////////

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup">{<i class="fas fa-user-plus"></i>}</NavLink>
        <NavLink to="/login">{<i class="fas fa-sign-in-alt"></i>}</NavLink>
        {/* <NavLink to="/demo">Demo Login</NavLink> */}
      </>
    );
  }

  return (
        <Navbar>
          <li className="navlink-item">
                <NavLink exact to="/">{<i class="fas fa-home"></i>}</NavLink>
                {isLoaded && sessionLinks}
          </li>
        </Navbar>
  );
}


function Navbar(props) {
  return (
<nav className="navbar">
      <ul className="navbar-nav-links">
        {props.children}
      </ul>
    </nav>
  )
}

export default Navigation;
