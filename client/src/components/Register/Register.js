import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div className="hero-wrap" style={{ backgroundImage: "url(images/bg_1.jpg)" }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="overlay"></div>
                    <div className="row no-gutters slider-text align-items-center">
                        <form action="/#" className="request-form bg-primary">
                            <h2>Register your account</h2>
                            <div className="form-group">
                                <label htmlFor="name" className="label">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Georgi Tsekov" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="label">Email</label>
                                <input type="text" className="form-control" name="email" placeholder="georgi_tsekov@abv.bg" />
                            </div>
                            <div className="d-flex">
                                <div className="form-group mr-2">
                                    <label htmlFor="password" className="label">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="password" />
                                </div>
                                <div className="form-group ml-2">
                                    <label htmlFor="rePassword" className="label">Repeat Password</label>
                                    <input type="password" className="form-control" name="rePassword" placeholder="repeat password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Register Your Account Now" className="btn btn-secondary py-3 px-4" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;