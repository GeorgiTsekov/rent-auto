import React from "react";

import LinkComponent from "../Link/Link";

const Header = ({
    isAuthenticated,
    user
}) => {
    console.log(user);
    let guestNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/login" title="Login" type="nav" />
            <LinkComponent href="/register" title="Register" type="nav" />
        </ul>
    )

    let userNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/profile" title={`Welcome, ${user}`} type="nav" />
            <LinkComponent href="/rentACar" title="Rent a Car" type="nav" />
            <LinkComponent href="/createCar" title="Create a Car" type="nav" />
            <LinkComponent href="/logout" title="Logout" type="nav" />
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">Auto<span>road</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <LinkComponent href="/" title="Home" type="nav" />
                        <LinkComponent href="/about" title="About" type="nav" />
                        <LinkComponent href="/car" title="All Cars" type="nav" />
                    </ul>
                    {isAuthenticated ? userNavigation : guestNavigation}

                </div>
            </div>
        </nav >
    )
};

export default Header;