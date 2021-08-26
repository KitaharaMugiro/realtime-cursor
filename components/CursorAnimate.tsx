import styles from "./cursor.module.css";

interface Props {
    curPos: { x: number, y: number }
    userInfo: { color: string, avatar: string, name: string }
}

const CursorAnimate = (props: Props) => {
    const curPos = props.curPos
    const userInfo = props.userInfo
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
            <div className={styles.pointer} style={{ color: userInfo.color }}>
                ➤
            </div>
            <div
                className={styles.userinfo}
                style={{
                    backgroundColor: userInfo.color,
                    color: "white",
                }}
            >
                {userInfo.avatar}&nbsp;{userInfo.name}
            </div>
        </div>
    )

}

export { CursorAnimate }