import React from "react";
import "./cursor.module.css";

interface Props {
    userInfo: { color: string, avatar: string, name: string }
}

const Cursor = (props: Props) => {
    const userInfo = props.userInfo
    return (
        <>
            <div
                className="realtimely_pointer"
                style={
                    {
                        display: "inline-block",
                        transform: "rotate(-127deg)",
                        fontSize: "16px",
                        color: userInfo.color
                    }
                }>
                ➤
            </div>
            <div
                className="realtimely_userinfo"
                style={{
                    display: "block",
                    margin: "4px 16px",
                    padding: "5px",
                    whiteSpace: "nowrap",
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