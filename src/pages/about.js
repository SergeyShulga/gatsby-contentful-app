import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About us"/>
            <h1>About us</h1>
            <p>some info about us</p>
            <Link to="/contact">Contact us!</Link>
        </Layout>
    );
};

export default AboutPage;