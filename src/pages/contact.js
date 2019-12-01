import React from 'react';
import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact us</h1>
            <p>Contact information</p>
            <a href="https://twitter.com/">Twitter</a>
        </Layout>
    );
};

export default ContactPage;