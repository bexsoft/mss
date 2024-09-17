import React, { FC} from "react";

import {CSSProperties, styled} from "@pigment-css/react";


// @ts-expect-error test
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
    sx?: CSSProperties,
}

const Button: FC<ButtonTest & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, sx, ...restProps}) => {
    return <ButtonBase sx={() => ({...sx})} {...restProps}>{children}</ButtonBase>
}

export default Button;