import React from "react";
import LinkComponent from "../Link/Link";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.navigation}>
            <LinkComponent href="#" title="Home" type="header" />
            <LinkComponent href="#" title="About" type="header" />
            <LinkComponent href="#" title="Services" type="header" />
            <LinkComponent href="#" title="Pricing" type="header" />
            <LinkComponent href="#" title="Cars" type="header" />
            <LinkComponent href="#" title="Blog" type="header" />
            <LinkComponent href="#" title="Contact" type="header" />
            <LinkComponent href="#" title="Login" type="header" />
            <LinkComponent href="#" title="Register" type="header" />
        </header>
    )
};

export default Header;