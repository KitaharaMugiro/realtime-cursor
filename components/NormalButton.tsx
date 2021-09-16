import style from "./button.module.css"
import { CSSTransition, Transition, TransitionStatus } from 'react-transition-group';
import React from "react";

interface Props {
    onClick: Function
    text?: string
}

export default (props: Props) => {
    const text = props.text || "PUSH"
    const onClick = (e: any) => {
        e.preventDefault()
        props.onClick()
    }

    return (
        <a
            onClick={onClick}
            href="" className={`${style["btn"]} ${style["btn--orange"]}`}>{text}</a>
    )
}