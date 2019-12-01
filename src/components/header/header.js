import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul className={headerStyles.nav__list}>
                    <li>
                        <Link to="/blog" activeClassName={headerStyles.nav__item_active} className={headerStyles.nav__item}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName={headerStyles.nav__item_active} className={headerStyles.nav__item}>About us</Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName={headerStyles.nav__item_active} className={headerStyles.nav__item}>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;