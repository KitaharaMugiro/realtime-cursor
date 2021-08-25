import styles from "./cursor.module.css";

interface Props {
    curPos: { x: number, y: number }
    userInfo: { color: string, avatar: string, name: string }
}

const CursorEye = (props: Props) => {
    const curPos = props.curPos
    const userInfo = props.userInfo
    const EYE_ICONS = ["👀", "👁", "👁 👁"]
    return (
        <div
            className={styles.cursor}
            style={{
                left: curPos.x,
                top: curPos.y,
            }}
        >
            <div className={styles.pointer_no_rotation} style={{ color: userInfo.color }}>
                {EYE_ICONS[0]}
            </div>
            {/* <div
                className={styles.userinfo}
                style={{
                    backgroundColor: userInfo.color,
                    color: "white",
                }}
            >
                {userInfo.avatar}&nbsp;{userInfo.name}
            </div> */}
        </div>
    )

}

export { CursorEye }