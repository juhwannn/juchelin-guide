import Layout from "../pageComponents/layout/Layout";
import styled from "styled-components";
import React, {useState} from "react";
import ContextUser from "../pageComponents/ContextUser";

const getLayout = (asPath) => {

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
