import styled from "styled-components";
import React from "react";

const Root = styled.div`
`;
const AuthLayout = ({children}) => {

    return (
        <Root>
            {children}
        </Root>
    )
}

export default AuthLayout;