import React from 'react';
import Head from "next/head"
// this component for seo
const SeoForAll = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default SeoForAll;