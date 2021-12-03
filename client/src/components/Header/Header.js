import React from "react";

import LinkComponent from "../Link/Link";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html">Auto<span>road</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <LinkComponent href="/#" title="Home" type="nav" />
                        <LinkComponent href="/#" title="About" type="nav" />
                        <LinkComponent href="/#" title="Services" type="nav" />
                        <LinkComponent href="/#" title="Pricing" type="nav" />
                        <LinkComponent href="/#" title="Cars" type="nav" />
                        <LinkComponent href="/#" title="Blog" type="nav" />
                        <LinkComponent href="/#" title="Contact" type="nav" />
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;