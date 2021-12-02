import React, { Component } from "react";
import LinkComponent from "../Link/Link";
import styles from './Footer.module.css';

class Footer extends Component {

    render() {

        return (
            <footer className={styles.container}>
                <LinkComponent href="#" title="Home" type="header" />
                <LinkComponent href="#" title="About" type="header" />
                <LinkComponent href="#" title="Services" type="header" />
                <LinkComponent href="#" title="Pricing" type="header" />
                <LinkComponent href="#" title="Cars" type="header" />
                <LinkComponent href="#" title="Blog" type="header" />
                <LinkComponent href="#" title="Contact" type="header" />
                <LinkComponent href="#" title="Login" type="header" />
                <LinkComponent href="#" title="Register" type="header" />
                <p className={styles.university}>rent_mobile2013@gmail.com</p>
            </footer>
        )
    }
}

export default Footer;