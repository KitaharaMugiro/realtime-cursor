import styles from "./cursor.module.css";

interface Props {
    userInfo: { color: string, avatar: string, name: string }
}

const Cursor = (props: Props) => {
    const userInfo = props.userInfo
    return (
        <>
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
        </>
    )

}

export { Cursor }