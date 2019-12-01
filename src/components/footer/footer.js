import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from "./footer.module.scss";

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <footer className={footerStyles.footer}>
            <p>Created by <span style={{textDecoration: 'underline', fontWeight: 600}}>{data.site.siteMetadata.author}</span>, 2019</p>
        </footer>
    );
};

export default Footer;