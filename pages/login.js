import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {useRouter} from "next/router";
import jwt from "jsonwebtoken-promisified";
import ContextUser from "../pageComponents/ContextUser";


const Root = styled.div`

`;

export default function Home() {
    const router = useRouter();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useContext(ContextUser);

    const onSubmit = async () => {
        try {
            const response = await axios.post("/api/auth/login", {id, password});
            const {accessToken, refreshToken} = response.data;
            const payload = jwt.decode(accessToken);
            localStorage.setItem('RefreshToken', refreshToken);
            setUser(payload);
            // await router.push('/');
        } catch (e) {
            alert(e);
            return;
        }
    }

    return (
        <Root>
            <form onSubmit={onSubmit}>
                아이디:
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>

                비밀번호:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button onClick={onSubmit}>로그인</button>
            </form>
        </Root>
    )
}
