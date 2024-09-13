import React from "react";

import {styled} from "@pigment-css/react";

//
// @ts-ignore
const ButtonBase = styled('button')(({theme}) => ({
    padding: '10px 20px',
    borderRadius: 5,
    border: 'none',
    backgroundColor: 'blue',
    color: theme.bgColor,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'darkblue',
        border: `1px solid ${theme.borderColor}`
    }
}));

export interface ButtonTest {
    sx?: object,
}

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement & ButtonTest>) {
    return <ButtonBase sx={(theme) => ({backgroundColor: theme.fontColor})}>{props.children}</ButtonBase>
}