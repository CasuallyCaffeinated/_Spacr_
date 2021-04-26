//* SIGNUP FORM COMPONENT *//
import './SignupForm.css'

//todo: import all the necessary hooks and actions
import React, { useState } from 'react';
import * as sessionActionCreators from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function SignupPage() {
    //? All the the react-redux hooks:
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    //? useState hooks:
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);


    //? React-router
    const history = useHistory()

    // if (sessionUser) history.push("/");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setErrors([]);
          return dispatch(sessionActionCreators.signup({ email, username, password }))
            .catch(async (res) => {
              const data = await res.json();
              if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
      };

      return (
        <form className="formSignup" onSubmit={handleSubmit}>
          <div className="sign-up-form">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label>
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={`Enter your first name...`}
              required
            />
          </label>
          <label>
            Last Name
            <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={`Enter your last name...`}
            required
            />
          </label>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`Enter your email address...`}
              required
            />
          </label>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={`Create a username...`}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={`Create a password...`}
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={`Confirm your password...`}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
          <div id="login-btn">
            <h4>Already a member of Spacr?</h4>
              <p>
                  <Link key={`login_btn`} to="/login">Click here!</Link>
              </p>
          </div>
          </div>
        </form>
      );
    }

export default SignupPage;
