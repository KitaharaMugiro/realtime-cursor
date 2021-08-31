import React from "react";
import { Cursor } from "./Cursor";
let styles = require("./cursor.module.css");
type CurPos = {
    x: number, y: number
}

type UserInfo = {
    color: string, avatar: string, name: string
}

export type CustomCursorViewParameter = {
    userInfo: UserInfo
}

interface Props {
    curPos: CurPos
    userInfo: UserInfo
    customView?: (viewParameter: CustomCursorViewParameter) => JSX.Element
}

const CursorAnimate = (props: Props) => {
    const curPos = props.curPos
    const userInfo = props.userInfo

    const view = () => {
        if (props.customView) {
            return props.customView({ userInfo })
        } else {
            return <Cursor userInfo={userInfo} />
        }
    }

    return (
        <div
            className={styles.cursor}
            style={{
                left: 0,
                top: 0,
                transform: `translateX(${curPos.x}px) translateY(${curPos.y}px)`,
                transition: "transform 1s"
            }}
        >
            {view()}
        </div>
    )

}

export { CursorAnimate };
