import React from "react";

export interface ButtonTest {
    sx?: object,
}

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement & ButtonTest>) {
    return <button>{props.children}</button>
}