import React from "react";

const LinkComponent = ({ title, href, type }) => {
    return (
        <li data-test-id={`link-${title}`} className={`${type}-item`}>
            <a href={href} className={`${type}-link`}>
                {title}
            </a>
        </li>
    )
}

export default LinkComponent;