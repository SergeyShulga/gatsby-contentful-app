import React from "react";
import "../styles/index.scss";
import Layout from "../components/layout";
import Head from "../components/head";

const HomePage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>Something important</h2>
        </Layout>
    )
};

export default HomePage;