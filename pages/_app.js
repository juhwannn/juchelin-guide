import Layout from "../pageComponents/layout/Layout";
import styled from "styled-components";
import React, {useEffect, useState} from "react";

const getLayout = (asPath) => {

    return Layout;
};

function MyApp({Component, pageProps, router}) {
    const Layout = getLayout(router.asPath);

    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    );
}

export default MyApp;
