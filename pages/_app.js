import Layout from "../pageComponents/layout/Layout";
import styled from "styled-components";
import ContextUser from "../pageComponents/ContextUser";
import React, {useEffect, useState} from "react";
import AuthLayout from "../pageComponents/layout/AuthLayout";

const getLayout = (asPath) => {
    if (asPath === "/login" || asPath === "/join") {
        return AuthLayout;
    }
    return Layout;
};

function MyApp({ Component, pageProps, router }) {
    const Layout = getLayout(router.asPath);
    const [user, setUser] = useState(null);

    return (
        <ContextUser.Provider value={[user, setUser]}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ContextUser.Provider>
    );
}

export default MyApp;
