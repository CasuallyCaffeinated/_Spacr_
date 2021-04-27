// import { Navigation } from "./Navigation";

//TODO: Make the splash page.
//TODO: This page will consist of 3 main parts.
//? #1 The header, which contains the navigation bar and all the links
//? #2 The main body, which will have a series of images transitioning
//? #3 The footer with all the social media links


//* HOMEPAGE COMPONENT *//
import './SplashPage.css'
import Footer from "../Footer/index"
import apod2 from "../../imgs/apod2.jpg";

//todo: import all the necessary hooks and actions
import React, { useState } from 'react';
import { useHistory, Link, NavLink } from 'react-router-dom';

function HomePage() {


    return (
        <div>
            {/* <div id="main-body"> */}
            <img src={apod2} alt="APOD" />
            {/* </div> */}
            <Footer />
        </div>
    )
}

export default HomePage;
