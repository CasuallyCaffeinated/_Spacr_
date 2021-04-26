//* ADDED LOG IN COMPONENT TO THE APP COMPONENT *//

//todo: import everything that is needed from the log in component:
import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';


import LoginFormPage from './components/LoginFormPage';
import SignupPage from './components/SignUpPage';
import Navigation from "./components/Navigation";
import HomePage from "./components/SplashPage"

import * as sessionActionCreators from "./store/session";
// import SplashPage from './components/SplashPage';



function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActionCreators.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
        <Navigation isLoaded={isLoaded} />
        <HomePage />
        {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
              <SignupPage />
          </Route>
        </Switch>
        )}
    </>
  );
}

export default App;
