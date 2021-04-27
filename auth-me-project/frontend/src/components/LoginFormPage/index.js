//* LOGIN FORM COMPONENT *//
import './LoginForm.css'


import Footer from "../Footer/index"

//todo: import all the necessary hooks and actions
import React, { useState } from 'react';
import * as sessionActionCreators from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//todo: Functional component for the login page
function LoginFormPage() {
    //? All the the react-redux hooks:
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    //? useState hooks:
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);

    //? React-router
    const history = useHistory()

    if (sessionUser) history.push(`/profile/${sessionUser.id}`);

    //? Handle submit custom event handler:
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        return dispatch(sessionActionCreators.login({ credential, password }))
                .catch(async res => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors)
                })
            }
            //? JSX Form for login:
            return (
                <>
                    <div className="form-main-body">
                    <form className="formLogin" onSubmit={handleSubmit}>
                            <ul>
                                {errors.map((error, index) => {
                                    <li key={index}>{error}</li>
                                })}
                            </ul>
                            <label>
                                Please enter Username or Email
                                <input
                                    className="input1"
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                    Please enter Password
                                    <input
                                        className="input2"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                            </label>
                            <button type="submit" >Log In</button>
                    </form>
                        <div id="demo-btn">
                            <button
                                onClick={() => dispatch(sessionActionCreators.demoUserLogin())}
                            >
                                Demo Login</button>
                        </div>
                    </div>
                    <Footer />
                </>
            )
}

export default LoginFormPage;
