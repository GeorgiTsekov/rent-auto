import React from "react";
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href, type }) => {
    return (
        <li data-test-id={`link-${title}`} className={`${type}-item`}>
            <Link to={href} className={`${type}-link`}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent;