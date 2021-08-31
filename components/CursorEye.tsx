import styles from "./cursor.module.css";

interface Props {
    userInfo: { color: string, avatar: string, name: string }
}

const CursorEye = (props: Props) => {
    const userInfo = props.userInfo
    const EYE_ICONS = ["👀", "👁", "👁 👁"]
    return (
        <div
            className={styles.cursor}
        >
            <div className={styles.pointer_no_rotation} style={{ color: userInfo.color }}>
                {props.userInfo.avatar}
            </div>
        </div>
    )

}

export { CursorEye }