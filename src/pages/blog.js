import React from 'react';
import Layout from "../components/layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import blogStyles from "./blog.module.scss";
import Head from "../components/head";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort:{
                    fields:published,
                    order:DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        published(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <p>Here will be some posts:</p>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => (
                    <li className={blogStyles.posts__item} key={edge.node.title}>
                        <Link to={`/blog/${edge.node.slug}`} className={blogStyles.posts__link}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.published}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    );
};

export default BlogPage;