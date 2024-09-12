import React from "react";

import {styled} from "@pigment-css/react";

const ButtonBase = styled('button')({
    padding: '10px 20px',
    borderRadius: 5,
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'darkblue'
    }
});


export interface ButtonTest {
    sx?: object,
}

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement & ButtonTest>) {
    return <ButtonBase>{props.children}</ButtonBase>
}