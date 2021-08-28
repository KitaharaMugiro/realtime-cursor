import style from "./button.module.css"
import { CSSTransition, Transition, TransitionStatus } from 'react-transition-group';
import React from "react";

interface Props {
    onClick: Function
}

export default (props: Props) => {
    const onClick = (e: any) => {
        e.preventDefault()
        props.onClick()
    }


    return (

        <a
            onClick={onClick}
            href="" className={`${style["btn"]} ${style["btn--orange"]}`}>PUSH</a>
    )
}