import React from "react";
import { useNavigate } from "react-router";

import * as authService from '../../services/authService';

const Login = ({
    onLogin
}) => {
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');

        authService.login(email);
        onLogin(email);
        navigate.toString('/');
    }
    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onLoginHandler} method="POST">
                        <h2>Login your account</h2>
                        <div className="form-group">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="text" className="form-control" name="email" placeholder="georgi_tsekov@abv.bg" />
                        </div>
                        <div className="form-group mr-2">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login Your Account Now" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;