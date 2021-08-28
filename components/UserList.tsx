import styles from "./userlist.module.css"
interface Props {
    realtimeUser: Array<any>
}

export default function UserList(props: Props) {

    //TODO: フロントでフィルタリングしないといけない・・・？
    // １分前の実装としては最悪
    const now = new Date()
    now.setMinutes(now.getMinutes() - 1)
    const users = props.realtimeUser.filter(i => new Date(i.updatedAt) > now)


    return (
        <div className={styles.grid}>
            {users.map((user: any) => (
                <div key={user.SK} className={styles.circle} style={{ backgroundColor: user.color }}>
                    {user.avator}
                    <div className={styles.description}>{user.name}</div>
                </div>
            ))}
        </div>
    );
}