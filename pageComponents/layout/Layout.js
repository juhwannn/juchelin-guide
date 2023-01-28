import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";

const Root = styled.div`
    .layoutRootHeader {
        height: 5vh;
        padding-left: 30px;
        padding-top: 30px;
        padding-right: 30px;
        
        .layoutRootLeftHeader {
            float: left;
            font-weight: bold;
            font-size: 1.5rem;
            color: blue;
        }
        
        .layoutRootRightHeader {
            >a {
                text-decoration: none;
            }
            
            .layoutRootMenu, a {
                float: right;
                font-weight: bold;
                cursor: pointer;
                color: blue;
                
                margin-right: 30px;
            }
            .layoutRootMenu:after, a:after {
                content:"";
                display: block; 
                border-bottom: 3px solid rgba(0,86,102); 
                transition: all 250ms ease-in-out; 
                left: 50%; 
                width: 0;
            }
            .layoutRootMenu:hover:after, a:hover:after {
                transition: all 250ms ease-in-out;
                left: 0%;
                width: 100%;
            }
        }
    }
    
    .layoutRootBody {
        height: 100vh;
        
        overflow: auto;
    }
    
    .layoutRootFooter {
        height: 5vh;
        
        font-size: 10px;
        font-weight: lighter;
        text-align: center;
    }
`;

const Profile = () => {
    const isLogin = true;

    return isLogin ? (
        <>
            <Link href={'/mypage'}>MYPAGE</Link>
            <Link href={'/logout'}>로그아웃</Link>
        </>
    ) : (
        <>
            <Link href={'/login'}>로그인</Link>
        </>
    )
}

const Layout = ({
    children,
}) => {
    const router = useRouter();

    return (
        <Root>
            <Head>
                <title>JUCHELIN</title>
            </Head>

            <div className="layoutRootHeader">
                <div className="layoutRootLeftHeader">
                    JUCHELIN
                </div>

                <div className="layoutRootRightHeader">
                    <Profile/>
                    <a className="layoutRootMenu" onClick={e => router.push("/")}> HOME </a>
                </div>
            </div>

            <div className="layoutRootBody">
                {children}
            </div>

            <div className="layoutRootFooter">
                Copyright 2022. juhwannn all rights reserved.
            </div>
        </Root>
    );
}

export default Layout;
