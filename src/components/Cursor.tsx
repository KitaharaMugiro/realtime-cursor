import React from "react";
import "./cursor.module.css";

interface Props {
    userInfo: { color: string, avatar: string, name: string }
}

const Cursor = (props: Props) => {
    const userInfo = props.userInfo
    return (
        <>
            <div className="realtimely_pointer" style={{ color: userInfo.color }}>
                ➤
            </div>
            <div
                className="realtimely_userinfo"
                style={{
                    backgroundColor: userInfo.color,
                    color: "white",
                }}
            >
                {userInfo.avatar}&nbsp;{userInfo.name}
            </div>
        </>
    )

}

export { Cursor }