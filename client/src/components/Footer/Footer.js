import React, { Component } from "react";

import LinkComponent from "../LinkComponent/LinkComponent";

class Footer extends Component {

    render() {

        return (
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2"><a href="/" className="logo">Car<span>book</span></a></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Information</h2>
                                <ul className="list-unstyled">
                                    <LinkComponent href="/" title="Home" type="nav" />
                                    <LinkComponent href="/about" title="About" type="nav" />
                                    <LinkComponent href="#" title="Services" type="nav" />
                                    <LinkComponent href="#" title="Term and Conditions" type="nav" />
                                    <LinkComponent href="#" title="Best Price Guarantee" type="nav" />
                                    <LinkComponent href="#" title="Privacy &amp; Cookies Policy" type="nav" />
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Customer Support</h2>
                                <ul className="list-unstyled">
                                    <LinkComponent href="#" title="FAQ" type="nav" />
                                    <LinkComponent href="#" title="Payment Option" type="nav" />
                                    <LinkComponent href="#" title="Booking Tips" type="nav" />
                                    <LinkComponent href="#" title="How it works" type="nav" />
                                    <LinkComponent href="#" title="Contact Us" type="nav" />
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <LinkComponent href="#" title="Triaditsa 5B, Sofia, Bulgaria" type="nav" />
                                        <LinkComponent href="#" title="359 884 35 21 37" type="nav" />
                                        <LinkComponent href="#" title="rent_mobile93@gmail.com" type="nav" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;