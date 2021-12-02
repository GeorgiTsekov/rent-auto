import React from "react";
import styles from './Link.module.css';

const LinkComponent = ({ title, href, type }) => {
    return (
        <li data-test-id={`link-${title}`} className={styles[`${type}-list-item`]}>
            <a href={href} className={styles[`${type}-link`]}>
                {title}
            </a>
        </li>
    )
}

export default LinkComponent;